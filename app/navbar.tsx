import Link from "next/link"
import ThemeButton from "./theme"

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-start bg-blue-600 p-4 text-2xl text-white sm:text-sm">
      <Link href="/" className="px-8">
        Home
      </Link>
      |
      <Link href="/blog" className="px-8">
        Blog
      </Link>
      |
      <Link href="/blog/abc" className="btn">
        ParamsBlog
      </Link>
      |
      <Link href="/weather" className="px-8">
        Weather
      </Link>
      |
      <Link href="/finance" className="px-8">
        Finance
      </Link>
      <ThemeButton />
    </nav>
  )
}
