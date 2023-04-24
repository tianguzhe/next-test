type PageProps = {
  params: {
    slug: string;
  };
};

export default function BlogSlugPage({ params: { slug } }: PageProps) {
  return (
    <div>
      Blog slug <span className="text-red-500 text-2xl">{slug}</span> Page
    </div>
  );
}
