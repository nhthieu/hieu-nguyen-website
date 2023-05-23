import Image from "next/image";
import Link from "next/link";

import profilePic from "@/public/images/me.jpg"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkArrow, LinkedInIcon } from "@/components/Icons";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import BackToTop from "@/components/BackToTop";

const age = new Date().getFullYear() - 2002
const para = `Hi! I'm a ${age} year old software developer based in Vietnam. My motto is "I don't know everything, but I can learn anything". As a developer, I am constantly learning and exploring new technologies and tools to enhance my skillset. I believe that good software development requires attention to details, a willingness to learn, and a passion for creating excellent user experiences.`
const title = "<Developer />"

export const metadata = {
  title: "Hieu Nguyen - About",
  description: `Hieu Nguyen's Personal Website`,
}


function AboutPage() {
  return (
    <div className='w-full flex flex-col items-center justify-between pb-16 xl:px-0'>
      <ThemeSwitcher />
      <BackToTop />

      <section id="about" className="w-[65%] xl:w-full flex flex-col items-center justify-center xl:flex-col xl:items-center xl:justify-center">
        {/* Title */}
        <div className="flex items-center justify-center w-full mb-16">
          <Image src={profilePic} alt='My Profile Picture' priority className='w-40 h-40 flex-shrink-0 border border-dark dark:border-light object-cover grayscale rounded-full' />
        </div>
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-5xl capitalize font-bold mb-2 2xl:text-4xl sm:text-3xl xs:text-2xl">Hieu Nguyen</h1>
          <p className="text-xl font-medium text-dark/75 dark:text-light/75 sm:text-lg xs:text-base">{title}</p>
        </div>

        {/* Details */}
        <div className="flex flex-col items-start justify-start mb-16 w-full">
          <div className="mb-4 relative">
            <h1 className="font-medium text-lg md:text-base text-dark/75 dark:text-light/75 uppercase">About me</h1>
            <div className="h-[1px] w-full absolute bottom-0 left-0 bg-dark dark:bg-light" />
          </div>
          <p className='font-medium text-lg text-dark dark:text-light md:text-base xs:text-sm'>{para}</p>
          <div className='my-4 font-medium text-lg  xs:text-sm md:text-base'>
            <p><b>Full name:</b> Hieu Nguyen Ho Trung</p>
            <p><b>Email:</b> nguyenhotrunghieu0106@gmail.com</p>
            <p><b>Location:</b> Ho Chi Minh, Vietnam</p>
          </div>
          <div className='flex items-center self-center mt-8 xs:mt-4'>
            <Link
              href='/cv.pdf'
              target='_blank'
              download={true}
              className='flex items-center dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent dark:hover:border-light dark:hover:bg-dark dark:hover:text-light transition ease duration-300 md:px-4 md:text-base xs:text-sm bg-dark text-light hover:border-dark hover:bg-light hover:text-dark'>
              Resume
              <LinkArrow className='w-6 ml-2 md:hidden' />
            </Link>
          </div>

          {/* Bio */}
          <div className="flex flex-col items-start justify-start text-start mt-20 w-full">
            <div className="mb-4 relative">
              <h1 className="font-medium text-lg text-dark/75 dark:text-light/75 uppercase md:text-base">Bio</h1>
              <div className="h-[1px] w-full absolute bottom-0 left-0 bg-dark dark:bg-light" />
            </div>
            <div className="font-medium">
              <div className="col-span-1 text-lg mb-8 md:text-base xs:text-sm">
                <p className="font-bold">2002</p>
                <p>Born in Nha Trang, Viet Nam</p>
              </div>
              <div className="col-span-1 text-lg md:text-base xs:text-sm">
                <p className="font-bold">2020 - Present</p>
                <p>Studying for Bachelor&apos;s degree in Information Technology at Ho Chi Minh University of Science (VNUHCMUS) </p>
              </div>
            </div>
          </div>

          {/* I love */}
          <div className="flex flex-col items-start justify-start text-start mt-12">
            <div className="mb-4 relative">
              <h1 className="font-medium text-lg text-dark/75 dark:text-light/75 uppercase md:text-base">I love</h1>
              <div className="h-[1px] w-full absolute bottom-0 left-0 bg-dark dark:bg-light" />
            </div>
            <div className="">
              <div className="text-lg mb-8 md:text-base xs:text-sm">
                <p className="font-medium">Programming,&nbsp;&nbsp;Computer Systems,&nbsp;&nbsp;Music,&nbsp;&nbsp;Anime,&nbsp;&nbsp;Playing Guitar,&nbsp;&nbsp;Photography</p>
              </div>
            </div>
          </div>

          {/* On the web */}
          <div className="flex flex-col items-start justify-start text-start mt-4">
            <div className="mb-4 relative">
              <h1 className="font-medium text-lg text-dark/75 dark:text-light/75 uppercase md:text-base">On the Web</h1>
              <div className="h-[1px] w-full absolute bottom-0 left-0 bg-dark dark:bg-light" />
            </div>
            <div className="text-lg md:text-base xs:text-sm">
              <Link
                href="https://www.linkedin.com/in/nhthieu16/"
                target="blank"
                className="mb-4 mt-2 flex items-center">
                <div className="flex items-center justify-center w-6 md:w-4 mr-3">
                  <LinkedInIcon className="w-full fill-dark dark:fill-light" />
                </div>
                <p className="font-bold">@nhthieu16</p>
              </Link>
              <Link
                href="https://www.github.com/nhthieu/"
                target="blank"
                className="my-4 flex items-center">
                <div className="flex items-center justify-center w-6 md:w-4 mr-3">
                  <GithubIcon className="w-full fill-dark dark:fill-light" />
                </div>
                <p className="font-bold">@nhthieu</p>
              </Link>
              <Link
                href="https://www.instagram.com/nht.hieu/"
                target="blank"
                className="my-4 flex items-center">
                <div className="flex items-center justify-center w-6 md:w-4 mr-3">
                  <InstagramIcon className="w-full fill-dark dark:fill-light" />
                </div>
                <p className="font-bold">@hieu0106</p>
              </Link>
              <Link
                href="https://www.facebook.com/hieu0106/"
                target="blank"
                className="my-4 flex items-center">
                <div className="flex items-center justify-center w-6 md:w-4 mr-3">
                  <FacebookIcon className="w-full fill-dark dark:fill-light" />
                </div>
                <p className="font-bold">@hieu0106</p>
              </Link>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

export default AboutPage;