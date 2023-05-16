import { projects } from "lib/info"

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
  key,
  title,
  img,
  description,
  technologies,
  links,
}: ProjectProps) => (
  <li key={key}>
    <div className="card glass compact w-80 text-black bg-white dark:text-white dark:bg-[#111010] shadow-xl">
      <figure>
        <img
          src={img}
          alt={title}
          className="object-cover h-64 w-full" // ensure a 3:2 ratio
        />
      </figure>
      <div className="card-body prose lg:prose-xl text-inherit">
        <p>{description}</p>
        {/* Display technologies here */}
        <p className="mt-4">
          <strong>Stack: </strong> {technologies.join(", ")}
        </p>
        <div className="card-actions justify-end">
          {links.demo.length ? (
            <a
              href={links.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          ) : null}
          {links.github.length ? (
            <a
              href={links.github}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
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
      <h1 className="font-bold text-3xl font-serif">Portfolio/Projects</h1>
      <ul className="my-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </ul>
    </main>
  )
}
