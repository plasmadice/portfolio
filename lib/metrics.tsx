import "server-only"

import { queryBuilder } from "lib/planetscale"
import { cache } from "react"

export const getBlogViews = cache(async () => {
  const data = await queryBuilder
    .selectFrom("views")
    .select(["count"])
    .execute()

  return data.reduce((acc, curr) => acc + Number(curr.count), 0)
})

type Repository = {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  html_url: string
  description: string | null
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: string | null
  size: number
  stargazers_count: number
  watchers_count: number
  language: string | null
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  has_discussions: boolean
  forks_count: number
  mirror_url: string | null
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: {
    key: string
    name: string
    spdx_id: string
    url: string | null
    node_id: string
  } | null
  allow_forking: boolean
  is_template: boolean
  web_commit_signoff_required: boolean
  topics: string[]
  visibility: string
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
  temp_clone_token: string | null
  network_count: number
  subscribers_count: number
}

type Commit = {
  author: {
    name: string
    email: string
    username: string
  }
  message: string
  url: string
  sha: string 
  distinct: boolean
}

export type Push = {
  public: boolean
  size: number
  created_at?: string | null
  repo?: {
    id: number
    name: string
    url: string
  } | null
  commits?: Commit[] | null
}

export const getRepoData = (
  user: string,
  repo: string
): Promise<Repository> => {
  const url = `https://api.github.com/repos/${user}/${repo}`
  return fetch(url).then((res) => res.json())
}

export async function fetchUserEvents(username: string, email: string, days: number = 30) {
  let events: any[] = []
  let page = 1
  const perPage = 100
  const timeFrame = new Date()
  timeFrame.setDate(timeFrame.getDate() - days)
  let stop = false

  // Loop through pages until we find a commit outside of our timeframe
  while (!stop) {
    // Fetch last 100 events from GitHub API for User
    // retrieves private events if you are authenticated and fetching your own events
    const response = await fetch(
      `https://api.github.com/users/${username}/events?page=${page}&per_page=${perPage}`,
      {
        headers : {
          Accept: "application/vnd.github.v3+json",
          Authorization: process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : '',
        }
      }
    )

    const data = await response.json()

    if (data.length) {
      // filter out push events that do not contain commits and events older than {days} days and events not created by {email}
      const recentPushEvents = data.filter((event) => {
        return (
          event.type === "PushEvent" &&
          new Date(event.created_at) >= timeFrame &&
          event.payload?.commits?.some((commit) => commit.author?.email.includes(email))
        )
      })

      events = [...events, ...recentPushEvents]
      
      // check if the last event is older than {days} days, if true, stop the loop
      if (new Date(data[data.length - 1].created_at) < timeFrame) {
        stop = true
      }
    } else {
      stop = true
    }
    
    page++
  }

  return events
}

export async function getRecentCommits(username: string, email: string, days: number = 30) {
  let pushEvents: Push[] = []
  let totalCommits = 0
  const timeFrame = new Date()
  timeFrame.setDate(timeFrame.getDate() - days)

  const events = await fetchUserEvents(username, email, days)

  // filter out push events that do not contain commits and events older than {days} days and events not created by {email}
  const recentPushEvents = events.filter((event) => {
    return (
      event.type === "PushEvent" &&
      new Date(event.created_at) >= timeFrame &&
      event.payload?.commits?.some((commit) => commit.author?.email.includes(email))
    )
  })

  const userEvents: Push[] = recentPushEvents?.map((event) => {
    return {
      public: event.public,
      size: event.payload?.size,
      created_at: event.public ? event.created_at : null,
      repo: event.public ? {
        id: event.repo?.id,
        name: event.repo?.name,
        url: `https://github.com/${event.repo?.name}`,
      } : null,
      commits: event.public ? event.payload?.commits?.filter(
        (commit: Commit) => commit.author?.email.includes(email)
      ).map((commit: Commit) => {
        return {
          message: commit.message,
          url: `https://github.com/${event.repo?.name}/commit/${commit.sha}`,
          sha: commit.sha
        }
      }) : null
    }
  })

  pushEvents = [...pushEvents, ...userEvents]

  // count commits in each event authored by {email}
  totalCommits += recentPushEvents?.reduce((acc, event) => {
    const userCommits = event.payload?.commits?.filter(
      (commit) => commit.author?.email.includes(email)
    )

    return (acc += userCommits?.length)
  }, 0)
  
  return {
    totalCommits,
    pushEvents
  }
}

export async function getRecentCommitCount(username: string, email: string, days: number = 30) {
  let totalCommits = 0
  const timeFrame = new Date()
  timeFrame.setDate(timeFrame.getDate() - days)

  const events = await fetchUserEvents(username, email, days)
  // filter out push events that do not contain commits and events older than {days} days and events not created by {email}
  const recentPushEvents = events.filter((event) => {
    return (
      event.type === "PushEvent" &&
      new Date(event.created_at) >= timeFrame &&
      event.payload?.commits?.some((commit) => commit.author?.email.includes(email))
    )
  })
  
  // count commits in each event authored by {email}
  totalCommits += recentPushEvents?.reduce((acc, event) => {
    const userCommits = event.payload?.commits?.filter(
      (commit) => commit.author?.email.includes(email)
    )

    return (acc += userCommits?.length)
  }, 0)

  return totalCommits
}
