"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {
  name: string
  link: string
  image: string
  proficency?: string
}

function Skill({ link, image, proficency }: Props) {
  return (
    <Link href={link} target='blank'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="cursor-pointer relative "
      >
        {/* <div 
          className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-dark/75 backdrop-blur-sm rounded-full z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in'
        >
          <h1 className='text-light font-bold text-xl lg:text-lg xs:text-sm'>{proficency}</h1>
        </div> */}
        <Image
          src={image}
          alt='Skill'
          width={5000}
          height={5000}
          className="rounded-full border border-dark/5 dark:border-light/75 object-cover w-24 h-24 lg:w-20 lg:h-20 xs:w-16 xs:h-16 p-2 bg-dark/5 dark:bg-light hover:bg-dark/10 dark:hover:bg-light/75 transition duration-150 ease-in-out"
        />
      </motion.div>
    </Link>
  )
}

export default Skill