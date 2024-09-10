import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces, isLoading }) {
  const router = useRouter();
  const [randomPiece, setRandomPiece] = useState(null);
  const handleClick = () => {
    router.push("/"); // Navigate back to the homepage
  };
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * pieces?.length);
    const tempArtPiece = pieces?.[randomNumber];
    setRandomPiece(tempArtPiece);
  }, [pieces]);

  return (
    <div>
      {/* <h1>Spotlight Page</h1> */}
      <button onClick={handleClick}>Go Back</button>

      {!isLoading && randomPiece && (
        <ArtPiecesPreview
          key={randomPiece?.slug}
          title={randomPiece?.name}
          artist={randomPiece?.artist}
          image={randomPiece?.imageSource}
          width={randomPiece?.dimensions?.width * 0.75}
          height={randomPiece?.dimensions?.height * 0.75}
        />
      )}
    </div>
  );
}
//
//
