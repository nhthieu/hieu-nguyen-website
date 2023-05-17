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
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="cursor-pointer"
    >
      <Image
        src='/images/skills/react.png'
        alt='Skill'
        width={5000}
        height={5000}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 lg:w-20 lg:h-20 xs:w-16 xs:h-16"
      />
    </motion.div>
  )
}

export default Skill