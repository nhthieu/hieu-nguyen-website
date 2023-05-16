import Header from '@/components/Header'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Hieu Nguyen',
  description: `Hieu Nguyen's Portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-dark text-light`}>
        {/* <Header className='px-40'/> */}
        <main className=''>
          {children}
        </main>
        {/* <Footer className='px-40'/> */}
      </body>
    </html>
  )
}
