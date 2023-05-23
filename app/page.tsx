import FloatingParticles from '@/components/FloatingParticles'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OpeningEffect from '@/components/OpeningEffect'
import SideBar from '@/components/SideBar'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export const metadata = {
  title: 'Hieu Nguyen',
  description: `Hieu Nguyen's Personal Website`,
}

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-customLinearLight dark:bg-customLinearDark xs:px-4 md:px-12 sm:px-8'>
      {/* <OpeningEffect /> */}
      {/* <FloatingParticles /> */}
      <SideBar />
      <Navbar />
      <section id='hero'>
        <Hero />
      </section>
      <ThemeSwitcher />
    </div>
  )
}
