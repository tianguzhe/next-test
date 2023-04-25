type PageProps = {
  params: {
    slug: string
  }
}

export default function BlogSlugPage({ params: { slug } }: PageProps) {
  return (
    <div>
      <span className="text-black dark:text-white">Blog slug</span>
      <span className="text-2xl text-red-500">{slug}</span> Page
    </div>
  )
}
