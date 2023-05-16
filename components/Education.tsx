"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import EducationDetail from "./EducationDetail";

type Props = {}

function Education({ }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )

  return (
    <div className='text-light my-32 mb-72 w-full'>
      <h2 className='font-bold text-8xl mb-32 w-full tracking-[2px] text-center md:text-6xl md:mb-16 xs:text-4xl'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-8 top-0 w-[4px] h-full bg-light origin-top'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <EducationDetail
            type='Dual-degree Bachelor of Information Technology'
            time='Aug 2020 - Oct 2024 (expected)'
            place='Ho Chi Minh University of Science'
            // gpa='GPA: 8.33 / 10'
            info='Relevant courses: Data Structures and Algorithms, Database Management Systems, Computer Networks.'
          />
          <EducationDetail
            type='Dual-degree Bachelor of Information Technology'
            time='Aug 2020 - Oct 2024 (expected)'
            place='Claude Bernard University Lyon 1'
            // gpa='GPA: 8.33 / 10'
            info='Relevant courses: Theory of Automata & Formal Language, Java Programming, Web Development, Logic Programming.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Education