import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "./Spotlight";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  return (
    <div>
      <h1>Spotlight Header</h1>
      <Spotlight pieces={data} isLoading={isLoading} />
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data} isLoading={isLoading} />
    </div>
  );
}
