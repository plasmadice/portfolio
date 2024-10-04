import { formatDistanceToNow, parseISO } from "date-fns"
import { getRecentCommits, type Push } from "lib/metrics"
import Link from "next/link"

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
    <div className="mr-auto text-neutral-900 dark:text-neutral-300">
      <h1 className="font-bold text-3xl font-serif">
        Github Activity
      </h1>
      <p className="mt-12 mb-6 font-bold text-lg mr-8">
        {`${totalCommits} commits in ${totalCount} push events across ${totalRepos} repositories in the last 30 days`}
      </p>
      <p className="mb-6 font-bold text-md mr-8">
        {`Including ${privateCommits} private commit${
          privateCommits > 1 ? "s" : ""
        }`}
      </p>
      <h2 className="text-2xl font-bold mb-4">Last 30 public push events:</h2>
      {last30PublicPushEvents.map((pushEvent, index) => (
        <div
          key={index}
          className="bg-base-100 shadow rounded px-4 pt-1 pb-4 mb-6 prose"
        >
          <h3 className="font-semibold mb-2 text-lg">
            <Link
              prefetch={false}
              href={String(pushEvent.repo?.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary no-underline hover:underline"
            >
              {pushEvent.repo?.name}
            </Link>
            <p className="text-sm text-gray-500">
              {`Created ${pushEvent.commits?.length} commit${
                pushEvent.commits?.length && pushEvent.commits?.length > 1
                  ? "s"
                  : ""
              }`}{" "}
              {formatDistanceToNow(parseISO(String(pushEvent.created_at)))} ago
            </p>
          </h3>
          <ul className='list-decimal'>
            {pushEvent.commits?.map((commit, index) => (
              <li key={index} className="border-b border-secondary pb-2 mb-2 mr-4">
                <Link
                  prefetch={false}
                  href={String(commit?.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  <p className="inline-block pr-4">{commit?.sha?.slice(0, 7)}</p>
                </Link>
                <p className="inline">- "{commit?.message}"</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
