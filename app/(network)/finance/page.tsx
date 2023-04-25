import { Suspense } from "react"

// source: 'USD', target: 'CNY', value: 6.8935, time: 1682146800000
type FinanceModel = {
  source: string
  target: String
  value: number
  time: number
}

const getFinance = async (source: string, target: string) => {
  const url = `https://wise.com/rates/history+live?source=${source}&target=${target}&length=2&resolution=hourly&unit=day`

  const resp = await fetch(url, { next: { revalidate: 60 } })

  if (!resp.ok) {
    throw new Error("fetch error")
  }

  return resp.json()
}

export default async function Finance() {
  const data: FinanceModel[] = await getFinance("USD", "CNY")

  return (
    <>
      {data.map((it, index) => (
        <div className="flex flex-row text-black dark:text-white" key={index}>
          <p className="mx-8">{it.source}</p>
          <p className="mx-8">{it.target}</p>
          <p className="mx-8 w-20">{it.value}</p>
          <p className="mx-8 w-[300px]">{formatTime(it.time)}</p>
        </div>
      ))}
    </>
  )
}

const formatTime = (t: number) => {
  const date = new Date(t)

  return date.toLocaleString()
}
