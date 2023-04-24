const getWeather = async () => {
  const resp = await fetch("http://wttr.in", { next: { revalidate: 10 } });

  if (!resp.ok) {
    throw new Error("fetch error");
  }

  return resp.text();
};

export default async function Weather() {
  const data = await getWeather();

  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}
