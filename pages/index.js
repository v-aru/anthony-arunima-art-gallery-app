import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "./Spotlight";
// import styled from "styled-components";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  const customImageSizeFactor = 0.2;
  return (
    <div>
      <Spotlight
        pieces={data}
        isLoading={isLoading}
        customImageSizeFactor={customImageSizeFactor}
      />
      <h1>Art Gallery App</h1>
      <ArtPieces
        pieces={data}
        isLoading={isLoading}
        customImageSizeFactor={customImageSizeFactor}
      />
    </div>
  );
}
