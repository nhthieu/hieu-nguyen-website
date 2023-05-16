"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import { ArrowBackIcon } from "./Icons";


type Props = {
  className?: string;
  arrowBackTo: string;
}

function Header({ className, arrowBackTo }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
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
    <header className={`${className} flex items-center justify-center w-screen py-10 fixed left-0 top-0 px-40 font-medium z-30 ${isScrolled ? "border-b border-solid border-light/10 backdrop-blur-md" : ""}`}>
      {/* <Link href={arrowBackTo}>
        <ArrowBackIcon className="fill-light/75 h-6 hover:fill-light transition duration-300 ease-out" />
      </Link> */}

      <nav className='flex items-center justify-between lg:hidden' >
        <CustomLink href='/' title='Home' className='mx-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/contact' title='Contact' className='mx-4' />
        <CustomLink href='/blog' title='Blog' className='mx-4' />
      </nav>
    </header>
  );
}

export default Header;