"use client"

import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import heroPic from "../public/images/astronaut.jpg";

function Hero() {
  const [text, helper] = useTypewriter({
    words: ["Hi, I'm Hieu Nguyen", "IT-Student.md", "<Developer />", "Cats-lover.tsx"],
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
          className="relative rounded-full h-40 w-40 mx-auto object-cover xs:h-28 xs:w-28 md:h-32 md:w-32 sm:h-30 sm:w-30"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="font-semibold text-6xl mt-16 xs:text-2xl md:text-4xl sm:text-3xl"
      >
        <span className="mr-3 xs:mr-1">{text}</span>
        <Cursor />
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-[60%] mt-4 xs:mt-0 md:w-full lg:w-[80%]"
      >
        <h1 className="font-medium text-lg text-dark/75 dark:text-light/75 pt-6 sm:text-sm md:text-base">
          Curious software developer, university student passionate about learning and exploring new technologies.
        </h1>
      </motion.div>
    </div>
  )
}

export default Hero