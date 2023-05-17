import FloatingParticles from '@/components/FloatingParticles'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OpeningEffect from '@/components/OpeningEffect'
import SideBar from '@/components/SideBar'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-customLinear2 xs:px-4 md:px-12 sm:px-8'>
      {/* <OpeningEffect /> */}
      <FloatingParticles />
      <SideBar />
      <Navbar />
      <section id='hero'>
        <Hero />
      </section>
    </div>
  )
}
