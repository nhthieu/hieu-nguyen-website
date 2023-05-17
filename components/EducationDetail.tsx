"use client";

import { useRef } from 'react'
import { motion } from 'framer-motion';

type Props = {
  type: string;
  time: string;
  place: string;
  gpa?: string;
  info: string;
}

function EducationDetail({ type, time, place, gpa, info }: Props) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between xl:w-[80%] md:w-full'>
      {/* <LiIcon reference={ref}/> */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        viewport={{ once: true }}
      >
        <h3 className='font-bold text-2xl sm:text-xl xs:text-lg'>{type}&nbsp;</h3>
        <span className='font-medium text-light/75 dark:text-light/75 inline-block mt-2 xs:text-sm'>
          {time} | {place}
        </span>
        {/* <p className='font-medium w-full mt-2 md:text-sm'>
          {gpa}
        </p> */}
        <p className='font-medium w-full mt-2 md:text-sm'>
          {info}
        </p>
      </motion.div>
    </li>
  )
}

export default EducationDetail