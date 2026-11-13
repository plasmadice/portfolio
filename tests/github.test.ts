import assert from "node:assert/strict"
import test from "node:test"

import { formatCommitCount, getRecentCommits } from "../lib/github.ts"

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  })

test("hydrates modern PushEvents through the compare API", async () => {
  const requestedUrls: string[] = []
  const fetcher: typeof fetch = async (input) => {
    const url = String(input)
    requestedUrls.push(url)

    if (url.includes("/users/plasmadice/events")) {
      return jsonResponse([
        {
          type: "PushEvent",
          public: true,
          created_at: "2026-11-10T12:00:00Z",
          repo: { id: 1, name: "plasmadice/portfolio" },
          payload: { before: "before-sha", head: "head-sha" },
        },
      ])
    }

    if (url.includes("/repos/plasmadice/portfolio/compare/before-sha...head-sha")) {
      return jsonResponse({
        commits: [
          {
            sha: "abcdef123456",
            html_url: "https://github.com/plasmadice/portfolio/commit/abcdef123456",
            author: { login: "plasmadice" },
            commit: { message: "Fix activity", author: { email: "hidden@example.com" } },
          },
        ],
      })
    }

    return jsonResponse([])
  }

  const activity = await getRecentCommits(
    "plasmadice",
    30,
    fetcher,
    new Date("2026-11-13T00:00:00Z"),
  )

  assert.equal(activity.totalCommits, 1)
  assert.equal(activity.pushEvents.length, 1)
  assert.equal(activity.pushEvents[0].size, 1)
  assert.equal(activity.pushEvents[0].commits?.[0].message, "Fix activity")
  assert.ok(requestedUrls.some((url) => url.includes("/compare/before-sha...head-sha")))
})


test("reports GitHub API failures instead of silently returning zero", async () => {
  const fetcher: typeof fetch = async () =>
    jsonResponse({ message: "Bad credentials" }, 401)

  await assert.rejects(
    () =>
      getRecentCommits(
        "plasmadice",
        30,
        fetcher,
        new Date("2026-11-13T00:00:00Z"),
      ),
    /GitHub API request failed \(401\): Bad credentials/,
  )
})


test("the homepage count excludes private commits", async () => {
  const { getRecentCommitCount } = await import("../lib/github.ts")
  const fetcher: typeof fetch = async (input) => {
    const url = String(input)
    if (url.includes("/users/plasmadice/events")) {
      return jsonResponse([
        {
          type: "PushEvent",
          public: true,
          created_at: "2026-11-10T12:00:00Z",
          repo: { id: 1, name: "plasmadice/public-repo" },
          payload: { before: "public-before", head: "public-head" },
        },
        {
          type: "PushEvent",
          public: false,
          created_at: "2026-11-10T13:00:00Z",
          repo: { id: 2, name: "plasmadice/private-repo" },
          payload: { before: "private-before", head: "private-head" },
        },
      ])
    }

    const isPrivate = url.includes("private-repo")
    return jsonResponse({
      commits: [
        {
          sha: isPrivate ? "private-sha" : "public-sha",
          html_url: `https://example.com/${isPrivate ? "private" : "public"}`,
          author: { login: "plasmadice" },
          commit: { message: "A commit" },
        },
      ],
    })
  }

  const count = await getRecentCommitCount(
    "plasmadice",
    30,
    fetcher,
    new Date("2026-11-13T00:00:00Z"),
  )

  assert.equal(count, 1)
})


test("formats a singular commit count", () => {
  assert.equal(formatCommitCount(1, true), "1 public commit in the last 30 days")
})
