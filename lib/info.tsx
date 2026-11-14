import me from '../app/avatar.png'

export const name = "Herman White"
export const descpription = "Developer, creator, and skater."
export const avatar = me
export const projects = [
  {
    title: "Onnee PillBox",
    img: "/images/onnee-pillbox.jpg",
    description:
      "Medication management app for building routines, scanning medication labels, scheduling reminders, and tracking adherence. Developed mobile UI/UX, onboarding, routine workflows, and API integrations.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "NativeWind",
      "Fastify",
      "gRPC",
      "DynamoDB",
    ],
    links: {
      demo: "https://onnee.com",
      appStore: "https://apps.apple.com/us/app/onnee/id6756633185",
      github: "",
    },
  },
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
      demo: "https://app.glossi.io/",
      github: "", 
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
