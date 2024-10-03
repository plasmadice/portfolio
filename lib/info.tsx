import me from '../app/avatar.png'

export const name = "Herman White"
export const descpription = "Developer, creator, and skater."
export const avatar = me
export const projects = [
  {
    title: "LazyAnime",
    img: "/images/lazyanime.png",
    description:
      "Anime info and streaming app. User permissions controlled by Discord roles.",
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
      I'm a <strong>Software Engineer</strong> with extensive experience in JavaScript, TypeScript, React, and API development. Notable achievements include automating healthcare processes at Olive AI, reducing manual work by over 100 hours monthly, and accelerating a Flash conversion project at Carley Corporation by six months. Recently, I successfully implemented the new version (V2) of Glossi’s app, leading to a full-time position as a full-stack developer.
    </>
  );
};
export const bio = () => {
  return (
    <>
      Beyond coding, I enjoy exploring new technologies, reading interesting books, and skating. I'm always up for a tech discussion or an impromptu brainstorming session. Let's connect and see how we can collaborate!
    </>
  );
};
