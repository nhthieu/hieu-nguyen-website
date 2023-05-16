import FloatingParticles from '@/components/FloatingParticles'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <FloatingParticles />
      <SideBar />
      <Navbar />
      <section id='hero'>
        <Hero />
      </section>
    </div>
  )
}
