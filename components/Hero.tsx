"use client"

import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import heroPic from "../public/images/astronaut.jpg";

function Hero() {
  const [text, helper] = useTypewriter({
    words: ["Hi, I'm Hieu Nguyen", "IT-Student.md", "<SoftwareDeveloper />", "Guy-who-loves-cats.tsx"],
    loop: true,
  })

  return (
    <div className="h-full flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={heroPic}
          alt="Hero Picture"
          priority
          className="relative rounded-full h-40 w-40 mx-auto object-cover"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="font-semibold text-6xl px-10 mt-16"
      >
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="text-primary" />
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-[60%] mt-4"
      >
        <h1 className="font-medium text-lg text-light/50 pt-6">
          Curious software developer, university student passionate about learning and exploring new technologies.
        </h1>
      </motion.div>
    </div>
  )
}

export default Hero