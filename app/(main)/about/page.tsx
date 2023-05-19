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
    <div className='w-full flex flex-col items-center justify-between pb-48 px-36 xl:px-0'>
      <ThemeSwitcher />
      <BackToTop />

      <section id="about" className="mb-64 w-full flex flex-col items-center justify-center xl:flex-col xl:items-center xl:justify-center xl:space-x-0 xl:space-y-20 md:mb-48">
        <div className="flex items-center w-full justify-center space-x-24 mb-20 2xl:space-x-16 xl:flex-col xl:mb-12 xl:text-center xl:space-x-0">
          <div className="xl:order-2 xl:mt-8 flex-shrink-1">
            <h1 className="text-5xl capitalize font-bold mb-2 2xl:text-4xl sm:text-3xl xs:text-2xl">Hieu Nguyen Ho Trung</h1>
            <p className="text-xl font-medium text-dark/75 dark:text-light/75 sm:text-lg xs:text-base">( Developer / Photographer )</p>
          </div>
          <Image src={profilePic} alt='My Profile Picture' priority className=' w-52 h-52 flex-shrink-0 border border-dark dark:border-light object-cover grayscale rounded-full 2xl:w-48 2xl:h-48 sm:w-40 sm:h-40' />
        </div>

        <div className="flex flex-col items-start justify-start text-justify">
          <div className="mb-4 xl:self-center">
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