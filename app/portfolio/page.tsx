import { projects } from "lib/info"
import { GitHubIcon } from "components/icons"

type ProjectProps = {
  key: number
  title: string
  img: string
  description: string
  technologies: string[]
  links: {
    demo: string
    github: string
  }
}

const Project = ({
  title,
  img,
  description,
  technologies,
  links,
}: ProjectProps) => (
  <li key={title}>
    <div className="antialiased card glass compact w-80 bg-white text-neutral-800 dark:text-neutral-200 dark:bg-neutral-900 shadow-xl">
      <figure>
        <img
          src={img}
          alt={title}
          className="object-cover h-64 w-full" // ensure a 3:2 ratio
        />
      </figure>
      <div className="card-body text-inherit">
        <a
          href={links.demo ? links.demo : links.github ? links.github : "/"}
          className="card-title w-fit"
        >
          {title}
        </a>
        <p>{description}</p>
        {/* Display technologies here */}
        <p className="mt-4">
          <strong>Stack: </strong> {technologies.join(", ")}
        </p>
        <div className="card-actions justify-end mt-4">
          {links.demo.length ? (
            <a
              href={links.demo}
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          ) : null}
          {links.github.length ? (
            <a
              href={links.github}
              className="project-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github{" "}
              <div className="pl-2">
                <GitHubIcon />
              </div>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </li>
)

export default function page() {
  return (
    <main className="flex-grow w-fit place-self-start">
      <h1 className="font-bold text-3xl font-serif text-neutral-800 dark:text-neutral-200">
        Portfolio/Projects
      </h1>
      <ul className="my-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </ul>
    </main>
  )
}
