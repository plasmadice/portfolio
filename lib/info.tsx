import me from '../app/avatar.png'

export const name = "Herman White"
export const descpription = "Developer, creator, and skater."
export const avatar = me
export const projects = [
  {
    title: "Glossi",
    img: "/images/glossi.png",
    description:
      "Web interface for 'Glossi,' an Unreal Engine pixel streaming app. Implemented UI/UX features, optimized performance, and integrated a custom Stripe payment system.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Radix-UI",
      "Framer Motion",
      "Apollo GraphQL",
      "Recoil",
      "Stripe API",
      "HubSpot",
      "PostHog",
      "Sentry",
    ],
    links: {
      demo: "",
      github: "https://app.glossi.io/", 
    },
  },
  {
    title: "LazyAnime",
    img: "/images/lazyanime.png",
    description:
      "Anime info and streaming app using React and Next.js. Integrated REST and GraphQL APIs; user permissions managed via Discord roles.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "GraphQL",
      "REST APIs",
      "Discord API",
    ],
    links: {
      demo: "https://lazyanime.com/",
      github: "https://github.com/plasmadice/lazyanime",
    },
  },
  {
    title: "Seemail",
    img: "/images/seemail.png",
    description:
      "Web app for accessing emails through the browser. Uses serverless functions and Puppeteer to automate adding devices to shared accounts.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "AWS Lambda",
      "Serverless Functions",
      "Puppeteer",
      "API Development",
    ],
    links: {
      demo: "https://www.seemail.dev/",
      github: "https://github.com/plasmadice/seemail",
    },
  },
  {
    title: "LazyFTP",
    img: "/images/lazyftp.png",
    description:
      "Web-based FTP client. Created a custom FTP API service to access FTP servers through the browser.",
    technologies: [
      "React",
      "Gatsby",
      "Semantic UI",
      "Express",
      "Node.js",
      "FTP Protocol",
    ],
    links: {
      demo: "https://lazyftp.com/",
      github: "https://github.com/plasmadice/lazyftp",
    },
  },
  {
    title: "Previous Portfolio",
    img: "/images/oldportfolio.png",
    description:
      "My previous portfolio site built with Next.js and Material-UI, showcasing projects and skills.",
    technologies: ["React", "Next.js", "Material-UI"],
    links: {
      demo: "",
      github: "https://github.com/plasmadice/port-foe-leo",
    },
  },
];


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
