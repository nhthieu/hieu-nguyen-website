"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="cursor-pointer"
    >
      <Image
        src='/images/skills/react.png'
        alt='Skill'
        width={5000}
        height={5000}
        className="rounded-full border border-gray-500 object-cover w-24 h-24"
      />
    </motion.div>
  )
}

export default Skill