type GithubUser = {
  followers: number;
  public_repos: number;
};

type GithubRepository = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  updated_at: string;
  language: string | null;
};

export type GithubStats = {
  followers: number;
  repositories: number;
  stars: number;
  forks: number;
  recentRepositories: Pick<
    GithubRepository,
    'name' | 'html_url' | 'description' | 'stargazers_count' | 'language'
  >[];
  live: boolean;
};

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

const githubSnapshot: GithubStats = {
  followers: 65,
  repositories: 46,
  stars: 53,
  forks: 10,
  live: false,
  recentRepositories: [
    {
      name: 'SpotifyDownloader',
      html_url: 'https://github.com/PrathamRanka/SpotifyDownloader',
      description: 'Production-ready TypeScript music download pipeline.',
      stargazers_count: 1,
      language: 'TypeScript',
    },
    {
      name: 'sendaifun',
      html_url: 'https://github.com/PrathamRanka/sendaifun',
      description: 'Kubernetes-native multi-tenant agent execution platform.',
      stargazers_count: 3,
      language: 'TypeScript',
    },
  ],
};

const githubHeaders: HeadersInit = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function getGithubStats(): Promise<GithubStats> {
  try {
    const [userResponse, repositoriesResponse] = await Promise.all([
      fetch('https://api.github.com/users/PrathamRanka', {
        headers: githubHeaders,
        next: { revalidate: 300, tags: ['github-data'] },
      }),
      fetch(
        'https://api.github.com/users/PrathamRanka/repos?per_page=100&sort=updated',
        { headers: githubHeaders, next: { revalidate: 300, tags: ['github-data'] } },
      ),
    ]);

    if (!userResponse.ok || !repositoriesResponse.ok) return githubSnapshot;

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
      live: true,
      recentRepositories: originalRepositories
        .filter((repository) => repository.name !== 'PrathamRanka')
        .slice(0, 3)
        .map((repository) => ({
        name: repository.name,
        html_url: repository.html_url,
        description: repository.description,
        stargazers_count: repository.stargazers_count,
        language: repository.language,
        })),
    };
  } catch {
    return githubSnapshot;
  }
}

export async function getGithubContributions(): Promise<GithubContributions> {
  try {
    const response = await fetch('https://github.com/users/PrathamRanka/contributions', {
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
