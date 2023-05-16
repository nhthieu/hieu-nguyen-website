import Logo from "@/components/Logo";
import Image from "next/image";

import profilePic from "@/public/images/me.jpg"
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

const age = new Date().getFullYear() - 2002
const para1 = `Hi! I'm a ${age} year old software developer based in Vietnam and currently studying at Ho Chi Minh University of Science.`
const para2 = `My motto is "I don't know everything, but I can learn anything". As a developer, I am constantly learning and exploring new technologies and tools to enhance my skillset. I believe that good software development requires attention to details, a willingness to learn, and a passion for creating excellent user experiences.`
const para3 = `I am excited to continue my journey and look forward to exploring new opportunities to develop innovative solutions. I'm actively open to collaborations with others so feel free to reach out if you have any interesting projects or ideas!`

export const metadata = {
  title: "Hieu Nguyen - About",
  description: `Hieu Nguyen's Portfolio`,
}

function AboutPage() {
  return (
    <div className='w-full flex flex-col items-center justify-between pb-40'>
      <section id="about" className="w-full flex justify-between space-x-20">
        <div className='w-full h-auto'>
          <Image src={profilePic} alt='My Profile Picture' priority className='w-full h-auto object-cover' />
        </div>

        <div className="flex flex-col items-start justify-start">
          <div className="mb-8">
            {/* <Logo className="w-28" /> */}
            <h1 className="font-medium text-lg text-light/75 uppercase">About me</h1>
          </div>
          <p className='my-4 font-medium text-light'>{para1}</p>
          <p className='my-4 font-medium text-light'>{para2}</p>
          <p className='my-4 font-medium text-light'>{para3}</p>
          <div className='my-4 font-medium '>
            <p><b>Full name:</b> Hieu Nguyen Ho Trung</p>
            <p><b>Email:</b> nhthieu0106@gmail.com</p>
            <p><b>Location:</b> Ho Chi Minh, Vietnam</p>
          </div>
          <div className='flex items-center self-start mt-8 lg:self-center'>
            <Link
              href='/cv.pdf'
              target='_blank'
              download={true}
              className='flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-light hover:bg-dark hover:text-light transition ease duration-300 mr-8'>
              Resume
              <LinkArrow className='w-6 ml-2' />
            </Link>
            <Link
                href='mailto:nguyenhotrunghieu0106@gmail.com'
                target='_blank'
                className='text-lg font-semibold capitalize text-light underline md:text-lg'
              >
                Email me
              </Link>
          </div>
        </div>
      </section>

      <Skills />
      {/* <Experience /> */}
      <Education />
    </div>
  );
}

export default AboutPage;