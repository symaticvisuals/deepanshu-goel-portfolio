import {
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github?: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Chat to PDF",
    description: "Transform Your PDFs into Interactive Conversations",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, FaFire],
    techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Firestore"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://firebase.google.com/",
    ],
    // github: "https://github.com/symaticvisuals/deepanshu-goel-portfolio",
    demo: "https://chat-with-pdf-challenge-deepanshu.vercel.app/",
    image: "/projects/chattopdf.png",
    available: true,
  },
  {
    id: 1,
    name: "4Art - Platform for Artists",
    description:
      "A Platform for Artists to Showcase their Art and publish there Courses",
    technologies: [SiTypescript, SiReact, SiExpress],
    techNames: ["Typescript", "React", "ExpressJS"],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://expressjs.com/",
    ],
    // github: "https://github.com/symaticvisuals/deepanshu-goel-portfolio",
    demo: "https://4artindia.vercel.app/",
    image: "/projects/4art.png",
    available: true,
  },
  {
    id: 2,
    name: "PID Projects - Interior Design Portfolio",
    description:
      "A Portfolio Website for an Interior Designer to Showcase their Projects",
    technologies: [SiTypescript, SiReact],
    techNames: ["Typescript", "React"],
    techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/"],
    // github: "https://github.com/symaticvisuals/deepanshu-goel-portfolio",
    demo: "https://www.pidprojects.in/",
    image: "/projects/pid.png",
    available: true,
  },
];
