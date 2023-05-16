"use client";

import { motion } from "framer-motion"
import { useState } from "react";
import Link from "next/link"
import CustomMobileLink from "./CustomMobileLink";

type Props = {}

function Navbar({ }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        className='flex-col justify-center items-center hidden xs:flex fixed top-0 left-0 p-4 ml-4 mt-8'
        onClick={toggleMenu}>
        <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-between mb-32 text-md text-light/75 uppercase tracking-[1px] xs:hidden md:text-base md:mb-28 sm:text-sm"
      >
        <Link href='/about' className="mx-4 font-sm hover:text-light transition ease duration-300 xs:mx-2">About </Link>
        <Link href='/projects' className="mx-4 font-sm hover:text-light transition ease duration-300 xs:mx-2">Projects</Link>
        <Link href='/contact' className="mx-4 font-sm hover:text-light transition ease duration-300 xs:mx-2">Contact</Link>
        <Link href='/blog' className="mx-4 font-sm hover:text-light transition ease duration-300 xs:mx-2">Blog</Link>
      </motion.nav>

      {/* Mobile */}
      {
        isOpen && (
          <motion.nav
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[70vw] flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-light/75 rounded-lg backdrop-blur-md py-32'>
            <CustomMobileLink href='/' title='Home' className='' toggle={toggleMenu} />
            <CustomMobileLink href='/about' title='About' className='' toggle={toggleMenu} />
            <CustomMobileLink href='/projects' title='Projects' className='' toggle={toggleMenu} />
            <CustomMobileLink href='/gallery' title='Gallery' className='' toggle={toggleMenu} />
          </motion.nav>
        )
      }
    </>

  )
}

export default Navbar