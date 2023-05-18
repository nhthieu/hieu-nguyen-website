"use client";

import { useEffect, useState } from 'react'
import { RocketLauncIcon } from './Icons';
import { AnimatePresence, motion } from 'framer-motion'

type Props = {}

function BackToTop({ }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <AnimatePresence>
      {
        isScrolled && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, y: 100, transition: { duration: 0.5 } }}
            className={`fixed left-8 bottom-6 rounded-full bg-dark/75 dark:bg-light/75 z-30 p-4 w-16 h-16 flex items-center justify-center backdrop-blur opacity-90 hover:bg-dark dark:hover:bg-light transition duration-150 ease-in sm:p-2 sm:w-12 sm:h-12`}
            onClick={handleClick}
          >
            <RocketLauncIcon className="fill-light dark:fill-dark w-6 sm:w-5" />
          </motion.button>
        )
      }
    </AnimatePresence>
  )
}

export default BackToTop