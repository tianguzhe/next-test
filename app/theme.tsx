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
      className="ml-5 rounded-[100px] border-2 border-red-500 px-4 py-2 text-xl text-red-500 hover:shadow-sm dark:border-white dark:text-white"
      onClick={changeTheme}
    >
      Theme
    </button>
  )
}
