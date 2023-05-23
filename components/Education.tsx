"use client";

import { useRef } from "react";
import EducationDetail from "./EducationDetail";

type Props = {}

function Education({ }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className='text-dark dark:text-light mb-64 max-w-[70%] md:mb-48'>
      <h2 className='font-bold text-6xl mb-32 w-full tracking-[2px] text-center lg:text-7xl lg:mb-28 md:text-6xl md:mb-16 xs:text-4xl'>Education</h2>
      <div ref={ref} className='w-full flex items-start relative xl:w-full'>
        <ul className='flex flex-col w-full items-center justify-between xs:ml-2'>
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