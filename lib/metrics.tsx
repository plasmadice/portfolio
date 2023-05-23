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

export const getRepoData = (user: string, repo: string) => {
  const url = `https://api.github.com/repos/${user}/${repo}`
  return fetch(url).then((res) => res.json())
}
