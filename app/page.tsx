import Link from "next/link"
import Image from "next/image"
import {
  getBlogViews,
  getRecentCommitCount,
  increaseProjectViews,
} from "lib/metrics"

import { BsGithub, BsGraphUpArrow } from "react-icons/bs"
import { name, about, bio, avatar } from "lib/info"

export const revalidate = 0
export const runtime = "edge"

export default async function HomePage() {
  let [recentCommits, views, projectViews] = await Promise.all([
    getRecentCommitCount("plasmadice", process.env.GITHUB_EMAIL as string, 30),
    getBlogViews(),
    increaseProjectViews("portfolio"),
  ])

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] ">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <div className="tooltip tooltip-bottom" data-tip={`${projectViews} page views 😉`}>
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />
        </div>
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-base-content">
          <Link href="/activity" className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-400 transition-all">
            <BsGithub className="text-primary" size="1.5em" />
            {`${recentCommits} commits in last 30 days`}
          </Link>

          <Link href="/blog" className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-400 transition-all">
            <BsGraphUpArrow className="text-primary mr-2" size="1.5em" />
            {`${views.toLocaleString()} blog views all time`}
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px]">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm">
        <li>
          <a
            className="flex items-center btn btn-ghost hover:text-neutral-900 dark:hover:text-neutral-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/plasmadice"
          >
            <BsGithub className="text-primary" size="1.5em" />
            <p className="h-4">My Github</p>
          </a>
        </li>
      </ul>
    </section>
  )
}
