// components/Skills.js

import React from 'react';
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiPython,
  DiNodejs,
  DiDocker,
  DiReact,
  DiMongodb,
  DiPostgresql,
  DiRedis,
  DiGit,
  DiAws,
} from 'react-icons/di';

import {
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiTailwindcss,
  SiFigma,
  SiJira,
  SiSlack,
  SiConfluence,
  SiSentry,
  SiRedux,
  SiStripe,
  SiHubspot,
  SiPosthog,
  SiApollographql,
  SiGnubash,
  SiFramer,
  SiGithub,
  SiVercel,
  SiCsharp,
  SiTypescript,
} from 'react-icons/si';

import { FaDatabase } from 'react-icons/fa';

const skills = [
  // Languages
  { name: 'JavaScript', icon: <DiJavascript1 size="3em" color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript size="3em" color="#3178C6" /> },
  { name: 'HTML5', icon: <DiHtml5 size="3em" color="#E34F26" /> },
  { name: 'CSS3', icon: <DiCss3 size="3em" color="#1572B6" /> },
  { name: 'Python', icon: <DiPython size="3em" color="#3776AB" /> },
  { name: 'C#', icon: <SiCsharp size="3em" color="#239120" /> },
  { name: 'SQL', icon: <FaDatabase size="3em" color="#4479A1" /> },
  { name: 'Bash', icon: <SiGnubash size="3em" color="#4EAA25" /> },
  // Libraries and Frameworks
  { name: 'React', icon: <DiReact size="3em" color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs size="3em" color="#000000" /> },
  { name: 'Node.js', icon: <DiNodejs size="3em" color="#339933" /> },
  { name: 'Express', icon: <SiExpress size="3em" color="#000000" /> },
  { name: 'Apollo GraphQL', icon: <SiApollographql size="3em" color="#311C87" /> },
  { name: 'GraphQL', icon: <SiGraphql size="3em" color="#E10098" /> },
  { name: 'Docker', icon: <DiDocker size="3em" color="#2496ED" /> },
  { name: 'PostgreSQL', icon: <DiPostgresql size="3em" color="#336791" /> },
  { name: 'Redis', icon: <DiRedis size="3em" color="#DC382D" /> },
  { name: 'MongoDB', icon: <DiMongodb size="3em" color="#47A248" /> },
  // UI/UX Technologies
  { name: 'Framer Motion', icon: <SiFramer size="3em" color="#0055FF" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size="3em" color="#38B2AC" /> },
  // Tools and Platforms
  { name: 'Git', icon: <DiGit size="3em" color="#F05032" /> },
  { name: 'GitHub', icon: <SiGithub size="3em" color="#181717" /> },
  { name: 'AWS', icon: <DiAws size="3em" color="#FF9900" /> },
  { name: 'Vercel', icon: <SiVercel size="3em" color="#000000" /> },
  { name: 'Figma', icon: <SiFigma size="3em" color="#F24E1E" /> },
  { name: 'Jira', icon: <SiJira size="3em" color="#0052CC" /> },
  { name: 'Slack', icon: <SiSlack size="3em" color="#4A154B" /> },
  { name: 'Confluence', icon: <SiConfluence size="3em" color="#172B4D" /> },
  { name: 'Sentry', icon: <SiSentry size="3em" color="#FB4226" /> },
  // Data Reporting Tools
  { name: 'HubSpot', icon: <SiHubspot size="3em" color="#FF7A59" /> },
  { name: 'PostHog', icon: <SiPosthog size="3em" color="#FF5733" /> }, // May not have a specific icon
  // Other Skills
  { name: 'Redux', icon: <SiRedux size="3em" color="#764ABC" /> },
  { name: 'Stripe', icon: <SiStripe size="3em" color="#008CDD" /> },
];

export default function Skills() {
  return (
    <section>
      <h2 className="font-bold text-xl mt-12 font-serif">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center pt-4 pb-4 px-2 bg-secondary/70 rounded-lg shadow"
          >
            {skill.icon}
            <p className="pt-2 mt-auto text-sm text-secondary-content font-medium select-none">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
