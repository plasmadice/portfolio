import { formatDistanceToNow, parseISO } from "date-fns"
import { getRecentCommits, type Push } from "lib/metrics"
import Link from "next/link"

export const dynamic = 'force-dynamic';
export const revalidate = 300 // revalidate every 5 minutes

export default async function page() {
  const { totalCommits, pushEvents } = await getRecentCommits(
    "plasmadice",
    process.env.GITHUB_EMAIL as string,
    30
  )

  const totalCount = pushEvents.length
  const totalRepos = new Set(pushEvents.map((event: Push) => event?.repo?.id))
    .size
  const privateCommits = pushEvents
    .filter((event) => !event.public)
    .reduce((acc, curr) => acc + curr.size, 0)

  const last30PublicPushEvents = pushEvents
    .filter((event) => event.public)
    .slice(0, 30)

  return (
    <div className="mr-auto pr-4 pb-8 text-neutral-900 dark:text-neutral-300">
      <h1 className="font-bold text-3xl font-serif mb-6">Github Activity</h1>
      <p className="mt-12 mb-6 font-semibold text-lg">
        {`${totalCommits} total commits in ${totalCount} push events across ${totalRepos} repositories in the last 30 days`}
      </p>
      <p className="mb-6 font-bold text-md">
        {`Does NOT include ${privateCommits} private commit${
          privateCommits !== 1 ? "s" : ""
        }`}
      </p>
      <h2 className="text-2xl font-bold mb-6">Public pushes in last 30 days:</h2>
      <div className="space-y-6">
      {last30PublicPushEvents.map((pushEvent, index) => (
          <div key={index} className="bg-base-100 shadow rounded px-4 pt-4 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">
            <Link
              href={String(pushEvent.repo?.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary no-underline hover:underline"
            >
              {pushEvent.repo?.name}
            </Link>
          </h3>
              <p className="text-sm text-gray-500">
                {`Created ${pushEvent.commits?.length} commit${
                  pushEvent.commits?.length && pushEvent.commits?.length > 1
                    ? "s"
                    : ""
                }`}{" "}
                {formatDistanceToNow(parseISO(String(pushEvent.created_at)))} ago
              </p>
        </div>
            <ul className="list-disc space-y-2 pl-4">
              {pushEvent.commits?.map((commit, index) => (
                <li key={index} className="border-b border-secondary pb-2">
                  <Link
                    href={String(commit?.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    <span className="inline-block pr-4 font-mono text-sm">{commit?.sha?.slice(0, 7)}</span>
                  </Link>
                  <p className="inline">- "{commit?.message}"</p>
                </li>
      ))}
            </ul>
    </div>
        ))}
      </div>
    </div>
  )
}
