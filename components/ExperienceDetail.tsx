"use client";

import {useRef} from 'react'
import {motion} from 'framer-motion'

type Props = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

function ExperienceDetail({position, company, companyLink, time, address, work}: Props) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75 inline-block mt-2 xs:text-sm dark:text-light/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full mt-2 md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

export default ExperienceDetail