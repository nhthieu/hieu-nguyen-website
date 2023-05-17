"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import Logo from "./Logo";
import { motion } from "framer-motion";
import CustomMobileLink from "./CustomMobileLink";

type Props = {
  className?: string;
}

function Header({ className = "" }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${className} flex items-center justify-between w-screen py-6 fixed left-0 top-0 px-48 font-medium z-30 2xl:px-44 xl:px-36 lg:px-32 md:px-20 sm:px-12 xs:px-8 md:justify-start ${isScrolled ? "border-b border-solid border-light/10 backdrop-blur-xl" : ""}`}>
        <button
          className='flex-col justify-center items-center hidden md:flex py-2'
          onClick={toggleMenu}>
          <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>


        <Link href="/">
          <Logo className="w-20 md:hidden" />
        </Link>

        <nav className='flex items-center justify-between text-base md:hidden' >
          {/* <CustomLink href='/' title='Home' className='mx-4' /> */}
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='mx-4' />
          <CustomLink href='/contact' title='Contact' className='mx-4' />
          <CustomLink href='/blog' title='Blog' className='mx-4' />
        </nav>
      </header>


      {/* Mobile */}
      {
        isOpen && (
          <motion.nav
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className='min-w-[70vw] flex flex-col items-center justify-center fixed top-1/2 left-1/2 z-30 bg-light/75 rounded-lg backdrop-blur-md py-16'>
            <CustomMobileLink href='/' title='Home' className='' toggle={toggleMenu} />
            <CustomMobileLink href='/about' title='About' className='' toggle={toggleMenu} />
            <CustomMobileLink href='/projects' title='Projects' className='' toggle={toggleMenu} />
            <CustomMobileLink href='/contact' title='Contact' className='' toggle={toggleMenu} />
            <CustomMobileLink href='/blog' title='Blog' className='' toggle={toggleMenu} />
          </motion.nav>
        )
      }
    </>
  );
}

export default Header;