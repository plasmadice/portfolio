import me from '../app/avatar.png'

export const name = "Herman White"
export const descpription = "Developer, creator, and skater."
export const avatar = me
export const projects = [
  {
    title: "LazyAnime",
    img: "/images/lazyanime.png",
    description:
      "WIP! Most ambitious frontend project yet. Anime info and streaming app. User permissions controlled by Discord roles.",
    technologies: ["React", "Next.js", "TailwindCSS", "DaisyUI"],
    links: {
      demo: "https://lazyanime.com/",
      github: "https://github.com/plasmadice/lazyanime",
    },
  },
  {
    title: "Seemail",
    img: "/images/seemail.png",
    description:
      "For accessing emails through the browser. Specific use case: Assist friends with logging into a shared account.",
    technologies: ["React", "Next.js", "TailwindCSS"],
    links: {
      demo: "https://www.seemail.dev/",
      github: "https://github.com/plasmadice/seemail",
    },
  },
  {
    title: "LazyFTP",
    img: "/images/lazyftp.png",
    description:
      "The answer to: How to connect to an FTP server through the browser?",
    technologies: ["React", "Gatsby", "Semantic UI", "Express"],
    links: {
      demo: "https://lazyftp.com/",
      github: "https://github.com/plasmadice/lazyftp",
    },
  },
  {
    title: "Previous Portfolio",
    img: "/images/oldportfolio.png",
    description:
      "My previous portfolio. Built with Next.js, MaterialUI, and hosted on Vercel.",
    technologies: ["React", "Next.js", "MaterialUI"],
    links: {
      demo: "https://port-foe-leo.vercel.app/",
      github: "https://github.com/plasmadice/port-foe-leo",
    },
  },
]
export const about = () => {
  return (
    <>
      Hello, I'm a <strong>Software Engineer</strong> with experience in modern
      web technologies. In previous roles, I automated healthcare tasks as a
      Software Engineer and lead a team in my role as Courseware Developer under
      a DoD (Department of Defense) contractor.
    </>
  )
}
export const bio = () => {
  return (
    <>
      Apart from coding, I have a keen interest in exploring emerging
      technologies, engaging in thought-provoking books, and jogging to keep my
      creative juices flowing. I'm always up for a good tech discussion or an
      impromptu brainstorming session.
    </>
  )
}
