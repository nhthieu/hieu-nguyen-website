import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

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
      <body className={`${montserrat.className} bg-light dark:bg-dark`}>
        <main className=''>
          <Providers>
            {children}
          </Providers>
        </main>
        {/* <Footer className='px-40'/> */}
      </body>
    </html>
  )
}
