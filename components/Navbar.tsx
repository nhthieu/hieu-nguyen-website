"use client";

import { motion } from "framer-motion"
import Link from "next/link"

type Props = {}

function Navbar({ }: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-between mb-32 text-md text-light/50 uppercase tracking-[1px]"
    >
      <Link href='/about' className="mx-4 font-sm hover:text-light transition ease duration-300"> About </Link>
      <Link href='/projects' className="mx-4 font-sm hover:text-light transition ease duration-300">Projects</Link>
      <Link href='/contact' className="mx-4 font-sm hover:text-light transition ease duration-300">Contact</Link>
      <Link href='/blog' className="mx-4 font-sm hover:text-light transition ease duration-300">Blog</Link>
    </motion.nav>
  )
}

export default Navbar