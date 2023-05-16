"use client";

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion, transform } from 'framer-motion';

type Props = {}

function SideBar({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x:"-50%", y:"-50%"}}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 1.5 }}

      className='fixed left-0 top-[50%] -translate-y-1/2 h-[20%] px-1 bg-light/10 backdrop-blur flex flex-col items-center justify-center space-y-2'
    >
      <SocialIcon url="https://www.linkedin.com/in/nhthieu16/" fgColor="#fafafa" bgColor="transparent" target="blank" />
      <SocialIcon url="https://www.github.com/nhthieu/" fgColor="#fafafa" bgColor="transparent" target="blank" />
      <SocialIcon url="mailto:nguyenhotrunghieu0106@gmail.com" fgColor="#fafafa" bgColor="transparent" target="blank" />
    </motion.div>
  )
}

export default SideBar