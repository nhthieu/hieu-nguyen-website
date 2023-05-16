"use client";

import { motion } from "framer-motion";

type Props = {}

function OpeningEffect({ }: Props) {
  return (
    <>
      <motion.div
        initial={{ width: '50%', borderRight: '1px solid #f5f5f5' }}
        animate={{ width: '0%', borderRight: '0px solid #fafafa', opacity: 0 }}
        transition={{  duration: 2, ease: 'easeOut' }}
        className='w-screen h-screen bg-black fixed top-0 bottom-0 z-30 left-0'
      />
      <motion.div
        initial={{ width: '50%', borderLeft: '1px solid #f5f5f5' }}
        animate={{ width: '0%', borderLeft: '0px solid #fafafa', opacity: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className='w-screen h-screen bg-black fixed top-0 bottom-0 z-30 right-0'
      />
    </>


  )
}

export default OpeningEffect