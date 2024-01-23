"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 dark:text-white/70">
        In <span className="font-medium">2018</span>, armed with a degree in
        <span className="font-medium"> Computer Scieince</span>, I embarked on a journey to channel my programming passion.
        The dynamic art of <span className="font-medium">problem-solving</span> truly captivates me, offering both challenge and gratification. Specializing in{" "}
        <span className="font-medium">
          React JS and Next JS 
        </span>
        {" "}My toolkit extends to include <span className="font-medium">Gatsby.js, Vue.js, Node.js, Express.js and TypeScript.</span>
        {" "}I have some experience working <span className="font-medium">Python (Django), PHP (Laravel)</span> and both <span className="font-medium">SQL (MySQL, PostreSQL) </span> and <span className="font-medium">NoSQL (Mongo DB, Redis, Firebase)</span> databases.
        I'm a perpetual learner, eagerly embracing emerging technologies.
        Currently, I actively seek a full-time role as a <span className="font-medium">seasoned software engineer</span>, poised to bring innovation and expertise to the forefront of your team.
      </p>
    </motion.section>
  );
}
