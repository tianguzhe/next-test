import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-start p-24 bg-blue-600 text-2xl text-white">
      <Link href="/" className="px-8">
        Home
      </Link>{" "}
      |
      <Link href="/blog" className="px-8">
        Blog
      </Link>{" "}
      |
      <Link href="/blog/abc" className="px-8">
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
    </div>
  );
}
