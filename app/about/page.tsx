import type { Metadata } from "next"
import { name } from "lib/info"
import { BsGithub } from "react-icons/bs"

export const metadata: Metadata = {
  title: "About",
  description:
    "Passionate Software Engineer focusing on modern web technologies.",
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-neutral-800 dark:text-neutral-200 text-3xl font-serif">
        About Me
      </h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hello, I'm <b>{name.split(" ")[0]}</b>.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm a <b>Software Engineer</b> with a solid foundation in creating and
          implementing systems. Recently, I played a crucial role in the
          automation of tasks within the healthcare sector and the enhancement
          of its overall efficiency.
        </p>
        <hr className="bg-primary" />
        <p>
          My passion lies in coding, especially in TypeScript and JavaScript.
          Recently, I have been focusing on learning and mastering modern web
          technologies like Next.js, Docker, and AWS.
        </p>
        <p>
          I <b>love</b> the ever-evolving landscape of web development. From
          simple HTML and CSS to complex applications, I thrive on the
          challenges and opportunities that the web presents.
        </p>
        <p className="mb-8">
          As I transition from my role at Olive AI, I am excited to apply my
          skills to new projects and challenges. I am always on the lookout for
          opportunities to innovate and create efficient solutions.
        </p>
        <p className="mb-8">
          Feel free to reach out to me for any potential opportunities,
          collaborations, or if you just want to connect and chat about the
          latest in tech.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/plasmadice"
            className="flex w-full border border-neutral-200 dark:border-primary rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <BsGithub className="text-primary" size="1.5em" />
              <div className="ml-3">GitHub</div>
            </div>
            {/* <ArrowIcon color="#BD0009" /> */}
          </a>
        </div>
      </div>
    </section>
  )
}
