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

export type MusicTrack = {
  title: string;
  artist: string;
  image: string;
  href: string;
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

type ContributionCalendarResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions?: number;
          weeks?: {
            contributionDays?: {
              date?: string;
              contributionCount?: number;
              contributionLevel?: string;
            }[];
          }[];
        };
      };
    };
  };
};

const contributionLevels: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function getGithubContributions(): Promise<GithubContributions> {
  if (!process.env.GITHUB_TOKEN) return { total: 0, days: [], live: false };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query PortfolioContributions {
          user(login: "PrathamRanka") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays { date contributionCount contributionLevel }
                }
              }
            }
          }
        }`,
      }),
      next: { revalidate: 300, tags: ['github-data'] },
    });
    if (!response.ok) return { total: 0, days: [], live: false };

    const result = (await response.json()) as ContributionCalendarResponse;
    const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar?.weeks) return { total: 0, days: [], live: false };

    return {
      total: calendar.totalContributions ?? 0,
      live: true,
      days: calendar.weeks.flatMap((week) =>
        (week.contributionDays ?? []).flatMap((day) =>
          day.date
            ? [{
                date: day.date,
                count: day.contributionCount ?? 0,
                level: contributionLevels[day.contributionLevel ?? 'NONE'] ?? 0,
              }]
            : [],
        ),
      ),
    };
  } catch {
    return { total: 0, days: [], live: false };
  }
}

type PlaylistItem = {
  snippet?: {
    title?: string;
    videoOwnerChannelTitle?: string;
    resourceId?: { videoId?: string };
    thumbnails?: {
      medium?: { url?: string };
      default?: { url?: string };
    };
  };
};

export async function getMusicTracks(): Promise<MusicTrack[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = process.env.YOUTUBE_MUSIC_PLAYLIST_ID;
  if (!apiKey || !playlistId) return [];

  try {
    const endpoint = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    endpoint.searchParams.set('part', 'snippet');
    endpoint.searchParams.set('maxResults', '5');
    endpoint.searchParams.set('playlistId', playlistId);
    endpoint.searchParams.set('key', apiKey);

    const response = await fetch(endpoint, { next: { revalidate: 1800 } });
    if (!response.ok) return [];

    const data = (await response.json()) as { items?: PlaylistItem[] };
    return (data.items ?? []).flatMap((item) => {
      const snippet = item.snippet;
      const videoId = snippet?.resourceId?.videoId;
      const image = snippet?.thumbnails?.medium?.url ?? snippet?.thumbnails?.default?.url;
      if (!snippet?.title || !videoId || !image) return [];
      return [{
        title: snippet.title,
        artist: snippet.videoOwnerChannelTitle ?? 'YouTube Music',
        image,
        href: `https://music.youtube.com/watch?v=${videoId}`,
      }];
    });
  } catch {
    return [];
  }
}
