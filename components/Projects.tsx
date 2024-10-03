import Project from "components/Project";
import { projects } from "lib/info";

export default function Projects() {
  return (
    <>
      <h2 className="font-bold text-xl mt-12 font-serif">Projects</h2>
      <ul className="my-5 grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <Project variant="secondary" key={index} {...project} />
        ))}
      </ul>
    </>
  )
}