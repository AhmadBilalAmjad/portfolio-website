import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import tecmeImg from "@/public/tecme_short.png";
import visiomateImg from "@/public/visiomate_short.png";
import eventrayImg from "@/public/eventray_short.png";
import viztosImg from "@/public/viztos_short.png";
import cybervisionImg from "@/public/cybervision_short.png";
import imagecraftifyImg from "@/public/imagecraftify_new.png";

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
    title: "CoderBatch",
    location: "Remote",
    description:
      "I am currently working as a Principal Software Engineer at CoderBatch, specializing in React.js, Next.js, and Node.js. I am open to exploring exciting full-time opportunities.",
    icon: CgWorkAlt,
    date: "2023 - present",
  },
  {
    title: "Software Engineering Consultant",
    location: "Tecme - Remote",
    description:
      "After two years at Visiomate, I embraced a remote role with Tecme, a US product company. I spearheaded notable enhancements, slashing initial render times and skyrocketing their GTMetrix score from 40% to 87%. Additionally, I engineered a captivating new landing page to drive conversion rates.",
    icon: CgWorkAlt,
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer - Team Lead",
    location: "Visiomate - Lahore, PK",
    description:
      "I transitioned to Visiomate, where I served as the Front End Lead, expanding the team from one to six members under my leadership.",
    icon: CgWorkAlt,
    date: "2020 - 2022",
  },
  {
    title: "Software Engineer",
    location: "TechClan - Lahore, PK",
    description:
      "I commenced my career at a software company, initially as an associate software engineer for 6 months, subsequently advancing to a full stack software engineer position.",
    icon: CgWorkAlt,
    date: "2019 - 2020",
  },
  {
    title: "Freelancer",
    location: "Worldwide",
    description:
      "Freelancing since 2018, developing quality solutions in JS, TS, PHP, and Python.",
    icon: CgWorkAlt,
    date: "2018 - present",
  },
  {
    title: "BSCS",
    location: "Lahore, PK",
    description:
      "I graduated with a degree in computer science, with my final year project focusing on PHP (Laravel).",
    icon: LuGraduationCap,
    date: "2014 - 2018",
  }
] as const;

export const projectsData = [
  {
    title: "Tecme",
    description:
      "It is a web app that offers IT management and technology solutions for small and medium-sized businesses (SMBs).",
    tags: ["React js", "Redux", "Ant Design", "Firebase", "Bootstrap", "Algolia"],
    imageUrl: tecmeImg,
    liveUrl: "https://tecme.io/"
  },
  {
    title: "ImageCraftify",
    description:
      "It's a web app with AI-driven image manipulation capabilities, including Image Restoration, Object Recoloring etc.",
    tags: ["React js", "Next js", "Shadcn/ui", "Tailwind CSS", "MongoDB", "Clerk", "Stripe"],
    imageUrl: imagecraftifyImg,
    liveUrl: "https://www.imagecraftify.com/"
  },
  {
    title: "Cybervision",
    description:
      "It is a company that offers comprehensive cybersecurity management services, including consulting, governance, risk compliance, and security products.",
    tags: ["React Js", "Next js", "Sass", "Axios", "Node Mailer"],
    imageUrl: cybervisionImg,
    liveUrl: "https://cybervision.com.sa/"
  },
  {
    title: "Visiomate",
    description:
      "It is a company that offers intelligent business intelligence (BI) solutions, including end-to-end data management and analytics.",
    tags: ["React js", "Gatsby js", "Ant Design", "GraphQL"],
    imageUrl: visiomateImg,
    liveUrl: "https://www.visiomate.com/"
  },
  {
    title: "EventRay",
    description:
      "It is a web app offering online event registration and customizable real-time reporting services, enabling users to efficiently implement events.",
    tags: ["React js", "Redux", "Redux Thunk", "Normalize CSS"],
    imageUrl: eventrayImg,
    liveUrl: "https://eventray.com/"
  },
  {
    title: "Viztos",
    description:
      "Viztos integrates POS and ERP features, addressing issues like multiple sessions, web-based systems, and advanced UI design.",
    tags: ["React js", "Redux Thunk", "Ant Design", "Indexed DB"],
   
    imageUrl: viztosImg,
    liveUrl: "https://www.visiomate.com/caseStudies/products/viztos/"
  },
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
  "Shadcn UI",
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
  "Clerk",
  "Stripe",
] as const;
