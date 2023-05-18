"use client";

import { ThemeProvider } from 'next-themes'

type Props = {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}

export default Providers