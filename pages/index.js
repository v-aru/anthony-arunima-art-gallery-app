import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function HomePage() {

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data}/>
    </div>
  );
}
