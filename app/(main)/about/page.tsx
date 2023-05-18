import Logo from "@/components/Logo";
import Image from "next/image";

import profilePic from "@/public/images/me.jpg"
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import BackToTop from "@/components/BackToTop";

const age = new Date().getFullYear() - 2002
const para1 = `Hi! I'm a ${age} year old software developer based in Vietnam and currently studying at Ho Chi Minh University of Science.`
const para2 = `My motto is "I don't know everything, but I can learn anything". As a developer, I am constantly learning and exploring new technologies and tools to enhance my skillset. I believe that good software development requires attention to details, a willingness to learn, and a passion for creating excellent user experiences.`
const para3 = `I am excited to continue my journey and look forward to exploring new opportunities to develop innovative solutions. I'm actively open to collaborations with others so feel free to reach out if you have any interesting projects or ideas!`

export const metadata = {
  title: "Hieu Nguyen - About",
  description: `Hieu Nguyen's Personal Website`,
}

function AboutPage() {
  return (
    <div className='w-full flex flex-col items-center justify-between pb-48'>
      <ThemeSwitcher />
      <BackToTop />

      <section id="about" className="w-full mb-64 flex justify-between space-x-20 xl:flex-col xl:items-center xl:justify-center xl:space-x-0 xl:space-y-20 md:mb-48">
        <div className='w-full h-auto 2xl:w-1/2 flex md:items-center justify-center md:w-full'>
          <Image src={profilePic} alt='My Profile Picture' priority className='w-full h-auto object-cover grayscale md:rounded-full md:w-72 md:h-72 sm:w-64 sm:h-64 xs:w-48 xs:h-48' />
        </div>

        <div className="flex flex-col items-start justify-start 2xl:w-1/2 xl:items-center xl:w-full">
          <div className="mb-4">
            {/* <Logo className="w-28" /> */}
            <h1 className="font-medium text-lg text-dark/75 dark:text-light/75 uppercase">About me</h1>
          </div>
          <p className='my-4 font-medium text-dark dark:text-light xs:text-sm'>{para1}</p>
          <p className='my-4 font-medium text-dark dark:text-light xs:text-sm'>{para2}</p>
          <p className='my-4 font-medium text-dark dark:text-light xs:text-sm'>{para3}</p>
          <div className='my-4 font-medium xl:self-start xs:text-sm'>
            <p><b>Full name:</b> Hieu Nguyen Ho Trung</p>
            <p><b>Email:</b> nhthieu0106@gmail.com</p>
            <p><b>Location:</b> Ho Chi Minh, Vietnam</p>
          </div>
          <div className='flex items-center self-start mt-8 xs:mt-4'>
            <Link
              href='/cv.pdf'
              target='_blank'
              download={true}
              className='flex items-center dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent dark:hover:border-light dark:hover:bg-dark dark:hover:text-light transition ease duration-300 mr-8 md:px-4 md:text-base xs:text-sm md:mr-4 bg-dark text-light hover:border-dark hover:bg-light hover:text-dark'>
              Resume
              <LinkArrow className='w-6 ml-2 md:hidden' />
            </Link>
            <Link
                href='mailto:nguyenhotrunghieu0106@gmail.com'
                target='_blank'
                className='text-lg font-semibold text-dark dark:text-light underline md:text-base xs:text-sm'
              >
                Email me
              </Link>
          </div>
        </div>
      </section>

      <Education />
      {/* <Experience /> */}
      <Skills />
    </div>
  );
}

export default AboutPage;