import Image from "next/image";
import {
  // getBlogViews,
  getRecentCommitCount,
  // increaseProjectViews,
} from "lib/metrics";

import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
} from "react-icons/bs";
import { name, about, bio, avatar } from "lib/info";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export const revalidate = 0;
export const runtime = "edge";

export default async function HomePage() {
  let [recentCommits] = await Promise.all([
    getRecentCommitCount(
      "plasmadice",
      process.env.GITHUB_EMAIL as string,
      30
    ),
  ]);

  return (
    <section className="">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl font-serif">{name}</h1>

        <p className="mt-12 my-5">{about()}</p>

        <div className="h-full flex items-start md:items-center my-8 flex-col md:flex-row">
          <div className="tooltip tooltip-bottom rounded-full">
            <Image
              alt={name}
              className="rounded-full"
              src={avatar}
              placeholder="blur"
              width={150}
              height={150}
              priority
            />
          </div>

          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-4 text-base-content">
            <a
              href="https://github.com/plasmadice"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-400 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-primary" size="1.5em" />
              {`${recentCommits} public commits in the last 30 days`}
            </a>

            <a
              href="https://linkedin.com/in/herman-white"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-400 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-primary" size="1.5em" />
              LinkedIn Profile
            </a>

            <a
              href="mailto:herman.white.third@gmail.com"
              className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-neutral-400 transition-all"
            >
              <BsEnvelope className="text-primary" size="1.5em" />
              herman.white.third@gmail.com
            </a>
          </div>
        </div>

        <p className="my-5">{bio()}</p>
      </div>
      <div className="flex flex-col">
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
      </div>

    </section>
  );
}
