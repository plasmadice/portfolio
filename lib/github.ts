type GitHubCommit = {
  sha: string
  html_url: string
  author?: { login?: string | null } | null
  commit: {
    message: string
    author?: { email?: string | null } | null
  }
}

type GitHubPushEvent = {
  type: string
  public: boolean
  created_at: string
  repo: { id: number; name: string }
  payload?: { before?: string; head?: string }
}

type Commit = {
  message: string
  url: string
  sha: string
}

export type Push = {
  public: boolean
  size: number
  created_at?: string | null
  repo?: { id: number; name: string; url: string } | null
  commits?: Commit[] | null
}

const githubHeaders = () => ({
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
  "X-GitHub-Api-Version": "2022-11-28",
})

async function readGitHubJson(response: Response) {
  const data = await response.json()
  if (!response.ok) {
    const message =
      typeof data === "object" && data && "message" in data
        ? String(data.message)
        : response.statusText
    throw new Error(`GitHub API request failed (${response.status}): ${message}`)
  }
  return data
}

export function formatCommitCount(count: number, isPublic = false) {
  const visibility = isPublic ? " public" : ""
  const noun = count === 1 ? "commit" : "commits"
  return `${count}${visibility} ${noun} in the last 30 days`
}

export async function getRecentCommits(
  username: string,
  days: number = 30,
  fetcher: typeof fetch = fetch,
  now: Date = new Date(),
) {
  const timeFrame = new Date(now)
  timeFrame.setDate(timeFrame.getDate() - days)

  const eventsResponse = await fetcher(
    `https://api.github.com/users/${username}/events?page=1&per_page=100`,
    { headers: githubHeaders() },
  )
  const events = (await readGitHubJson(eventsResponse)) as GitHubPushEvent[]
  const recentPushEvents = events.filter(
    (event) =>
      event.type === "PushEvent" &&
      new Date(event.created_at) >= timeFrame &&
      event.payload?.before &&
      event.payload?.head,
  )

  const pushEvents: Push[] = await Promise.all(
    recentPushEvents.map(async (event) => {
      const compareResponse = await fetcher(
        `https://api.github.com/repos/${event.repo.name}/compare/${event.payload?.before}...${event.payload?.head}`,
        { headers: githubHeaders() },
      )
      const comparison = (await readGitHubJson(compareResponse)) as {
        commits?: GitHubCommit[]
      }
      const commits = (comparison.commits ?? []).filter(
        (commit) => commit.author?.login?.toLowerCase() === username.toLowerCase(),
      )

      return {
        public: event.public,
        size: commits.length,
        created_at: event.public ? event.created_at : null,
        repo: event.public
          ? {
              id: event.repo.id,
              name: event.repo.name,
              url: `https://github.com/${event.repo.name}`,
            }
          : null,
        commits: event.public
          ? commits.map((commit) => ({
              message: commit.commit.message,
              url: commit.html_url,
              sha: commit.sha,
            }))
          : null,
      }
    }),
  )

  return {
    totalCommits: pushEvents.reduce((total, event) => total + event.size, 0),
    pushEvents,
  }
}

export async function getRecentCommitCount(
  username: string,
  days: number = 30,
  fetcher: typeof fetch = fetch,
  now: Date = new Date(),
) {
  const { pushEvents } = await getRecentCommits(username, days, fetcher, now)
  return pushEvents
    .filter((event) => event.public)
    .reduce((total, event) => total + event.size, 0)
}
