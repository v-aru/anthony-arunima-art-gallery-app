import useSWR from "swr";

export default function HomePage() {

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  return (
    <div>
      <h1>Art Gallery App</h1>
    </div>
  );
}
