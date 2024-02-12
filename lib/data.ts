import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tecmeImg from "@/public/tecme_short.png";
import visiomateImg from "@/public/visiomate_short.png";
import eventrayImg from "@/public/eventray_short.png";
import viztosImg from "@/public/viztos_short.png";
import cybervisionImg from "@/public/cybervision_short.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tecme",
    description:
      ["It is a website that offers IT management and technology solutions for small and medium-sized businesses (SMBs)."],
    tags: ["React js", "Redux", "Ant Design", "Firebase", "Bootstrap", "Algolia"],
    imageUrl: tecmeImg || "https://i.ibb.co/kBs9cWj/React-App.png",
  },
  {
    title: "Cybervision",
    description:
      ["It is a company that offers comprehensive cybersecurity management services, including consulting, governance, risk compliance, security products."],
    tags: ["React Js", "Next js", "Sass", "Axios", "Node Mailer"],
    imageUrl: cybervisionImg,
  },
  {
    title: "Visiomate",
    description:
      ["It is a company that offers intelligent business intelligence (BI) solutions, including end-to-end data management and analytics."],
    tags: ["React js", "Gatsby js", "Ant Design", "GraphQL"],
    imageUrl: visiomateImg,
  },
  {
    title: "Viztos",
    description:
      ["Viztos integrates POS and ERP features, addressing issues like multiple sessions, web-based systems, and advanced UI design."],
    tags: ["React js", "Redux Thunk", "Ant Design", "Indexed DB"],
   
    imageUrl: viztosImg,
  },
  {
    title: "EventRay",
    description:
      ["It is a website offering online event registration and customizable real-time reporting services, enabling users to efficiently implement events."],
    tags: ["React js", "Redux", "Redux Thunk", "Normalize CSS"],
    imageUrl: eventrayImg,
  }
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React JS",
  "Next JS",
  "Gatsby JS",
  "Vue JS",
  "Tailwind CSS",
  "Bootstrap",
  "Ant Design",
  "Material UI",
  // "Shadcn UI",
  "Framer Motion",
  "Recoil",  
  "Redux",  
  "Redux Toolkit",  
  "Redux Thunk",  
  "Redux Saga",
  "Node JS",
  "Express JS",
  "PHP",
  "Laravel",
  "Python",
  "Django",
  "Firebase",
  "Redis",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Jest",
  "Mocha",
  "Chai",
  "Git",
] as const;
