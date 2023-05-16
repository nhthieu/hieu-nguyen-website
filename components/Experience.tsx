"use client";

import { useRef } from "react";
import {motion, useScroll} from "framer-motion";
import ExperienceDetail from "./ExperienceDetail";

type Props = {}

function Experience({}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )

  return (
    <div className=' text-light my-32 mb-72 w-full'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-8 top-0 w-[4px] h-full bg-light origin-top'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <ExperienceDetail
            position='Intern'
            company='Katalon'
            companyLink='https://www.katalon.com/'
            time='Jan 2023 - Present'
            address='Ho Chi Minh, Vietnam'
            work='Worked on a team responsible for developing a new product for Katalon Studio, including improving the accuracy of the test results and developing new tools for data analysis.'
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience