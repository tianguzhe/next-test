import { prisma } from "@/lib/prisma"

const getData = async () => {
  return {
    jokeListItems: await prisma.joke.findMany({
      take: 5,
      select: { id: true, name: true },
      orderBy: { createdAt: "desc" },
    }),
  }
}

export default async function BlogPage() {
  const data = await getData()

  return (
    <>
      <div className="text-2xl text-blue-500">Blog Index Page</div>
      <ul>
        {data.jokeListItems.map((joke) => (
          <li key={joke.id}>
            <p>{joke.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
