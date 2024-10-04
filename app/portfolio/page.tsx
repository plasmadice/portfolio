import { projects } from "lib/info"
import Project from "components/Project"
import Projects from "components/Projects"

export default function page() {
  return (
    <main className="flex-grow w-fit place-self-start">
      <h1 className="font-bold text-3xl font-serif">
        Portfolio
      </h1>
      <Projects />
    </main>
  )
}
