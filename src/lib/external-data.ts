type GithubUser = {
  followers: number;
  public_repos: number;
};

type GithubRepository = {
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

export type GithubStats = {
  followers: number;
  repositories: number;
  stars: number;
  forks: number;
};

export const githubUsername = process.env.GITHUB_USERNAME || 'PrathamRanka';

export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GithubContributions = {
  total: number;
  days: ContributionDay[];
  live: boolean;
};

const githubHeaders: HeadersInit = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function getGithubStats(): Promise<GithubStats | null> {
  try {
    const [userResponse, repositoriesResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${githubUsername}`, {
        headers: githubHeaders,
        next: { revalidate: 300, tags: ['github-data'] },
      }),
      fetch(
        `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`,
        { headers: githubHeaders, next: { revalidate: 300, tags: ['github-data'] } },
      ),
    ]);

    if (!userResponse.ok || !repositoriesResponse.ok) return null;

    const user = (await userResponse.json()) as GithubUser;
    const repositories = (await repositoriesResponse.json()) as GithubRepository[];
    const originalRepositories = repositories.filter((repository) => !repository.fork);

    return {
      followers: user.followers,
      repositories: user.public_repos,
      stars: originalRepositories.reduce(
        (total, repository) => total + repository.stargazers_count,
        0,
      ),
      forks: originalRepositories.reduce(
        (total, repository) => total + repository.forks_count,
        0,
      ),
    };
  } catch {
    return null;
  }
}

export async function getGithubContributions(): Promise<GithubContributions> {
  try {
    const response = await fetch(`https://github.com/users/${githubUsername}/contributions`, {
      headers: {
        Accept: 'text/html',
        'User-Agent': 'PrathamRanka-Portfolio',
      },
      next: { revalidate: 300, tags: ['github-data'] },
    });
    if (!response.ok) return { total: 0, days: [], live: false };

    const html = await response.text();
    const days = Array.from(
      html.matchAll(
        /<tool-tip[^>]*>(No|[\d,]+) contributions?[^<]*<\/tool-tip>\s*<td[^>]*data-date="([^"]+)"[^>]*data-level="(\d)"[^>]*>/g,
      ),
      (match) => ({
        count: match[1] === 'No' ? 0 : Number(match[1].replaceAll(',', '')),
        date: match[2],
        level: Number(match[3]),
      }),
    ).sort((a, b) => a.date.localeCompare(b.date));
    if (days.length < 300) return { total: 0, days: [], live: false };

    return {
      total: days.reduce((total, day) => total + day.count, 0),
      live: true,
      days,
    };
  } catch {
    return { total: 0, days: [], live: false };
  }
}
