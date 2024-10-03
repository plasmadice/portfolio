import { projects } from "lib/info"
import { BsGithub } from "react-icons/bs"
import Project from "components/Project"

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

export default function page() {
  return (
    <main className="flex-grow w-fit place-self-start">
      <h1 className="font-bold text-3xl font-serif">
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
