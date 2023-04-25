"use client"

import { useTheme } from "next-themes"

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button
      className="p-8 text-xl text-red-500 dark:text-white"
      onClick={changeTheme}
    >
      Theme
    </button>
  )
}
