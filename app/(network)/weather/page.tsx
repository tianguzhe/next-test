import Image from "next/image"

export default function WeatherPage() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="/photo-1515.webp"
            alt="Man looking at item at a store"
            height={192}
            width={192}
          />
        </div>
        <div className="bg-white p-8 shadow-md dark:bg-black">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Case study
          </div>
          <a
            href="#"
            className="mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:text-white"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  )
}
