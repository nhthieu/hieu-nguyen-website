"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  title: string;
  toggle: () => void;
  className?: string;
}

function CustomMobileLink({ href, title, toggle, className }: Props) {
  const router = useRouter();
  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button aria-label='Navbar Link' className={`${className} relative group text-light dark:text-dark my-2 md:text-lg sm:text-base`} onClick={handleClick}>
      {title}
      {/* <span className={`h-[1px] inline-block bg-light dark:bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span> */}
    </button>
  )
}

export default CustomMobileLink