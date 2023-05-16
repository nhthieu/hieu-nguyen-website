"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {}

function Skills({ }: Props) {
  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center my-32"
    >
      <h3 className="font-bold text-8xl tracking-[2px] text-center mb-32">Skills</h3>
      <div className="grid grid-cols-4 gap-6">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
      </div>
    </motion.div>
  )
}

export default Skills