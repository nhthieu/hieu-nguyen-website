"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type Props = {}

function ThemeSwitcher({ }: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null;

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (

    <button
      className="fixed right-8 bottom-6 rounded-full bg-dark/75 dark:bg-light/75 p-4 w-16 h-16 flex items-center justify-center backdrop-blur opacity-90 hover:bg-dark dark:hover:bg-light transition duration-150 ease-in sm:p-2 sm:w-12 sm:h-12 z-30"
      onClick={handleSwitch}>
      {
        theme === "dark" ? (
          <SunIcon className="w-6 sm:w-5 fill-dark" />
        ) : (
          <MoonIcon className="w-6 sm:w-5 fill-light"/>
        )
      }
    </button>

  )
}

export default ThemeSwitcher