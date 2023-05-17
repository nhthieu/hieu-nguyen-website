"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";
import profileData from "../data.json"

type Props = {}

function Skills({ }: Props) {
  return (
    <motion.div
      className="w-full flex flex-col justify-start items-center"
    >
      <h3 className="font-bold text-8xl tracking-[2px] text-center mb-32 lg:text-7xl lg:mb-28 md:mb-16 md:text-6xl xs:text-4xl">Skills</h3>
      <div className="grid grid-cols-4 gap-6 sm:gap-4 xs:grid-cols-3">
        {
          profileData.skills.map((skill, index) => (
            <Skill
              key={skill.name}
              name={skill.name}
              link={skill.link}
              image={skill.image}
              proficency={skill.proficiency}
            />
          ))
        }
        {/* <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}
      </div>
    </motion.div>
  )
}

export default Skills