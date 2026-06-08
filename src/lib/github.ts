type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
};

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

async function safeJson<T>(response: Response): Promise<T | null> {
  if (!response.ok) {
    return null;
  }

  return (await response.json()) as T;
}

export async function getGithubShowcase(username: string) {
  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    const profile = (await safeJson<GitHubProfile>(profileResponse)) ?? null;
    const repos = (await safeJson<GitHubRepo[]>(reposResponse)) ?? [];

    return {
      profile,
      repos: repos.filter((repo) => !repo.name.toLowerCase().includes("test")),
    };
  } catch {
    return { profile: null, repos: [] };
  }
}

export type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string; url: string };
  payload: {
    action?: string;
    ref_type?: string;
    commits?: Array<{ sha: string; message: string; author: { name: string; email: string } }>;
  };
  created_at: string;
};

export async function getGithubEvents(username: string): Promise<GitHubEvent[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`, {
      headers,
      next: { revalidate: 1800 },
    });
    if (!response.ok) return [];
    return (await response.json()) as GitHubEvent[];
  } catch {
    return [];
  }
}

