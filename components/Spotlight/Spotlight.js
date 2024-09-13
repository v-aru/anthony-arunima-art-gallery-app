import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Favourites from "../Favourites/Favourites";
import { Root, Piece, Artist } from "./spotlightStyles";

export default function Spotlight({
  image,
  artist,
  colors,
  width,
  height,
  slug,
  artPieceInfo,
  onToggleFavourite,
}) {
  const [movement, setMovement] = useState(0);
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/"); // Navigate back to the homepage
  // };

  // const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  //TODO: discuss if the return should be refactored to use the ArtPiecesPreview component
  //it then could use the Link to the actual ArtPiece Page
  let value;
  const someAngle = Math.random() * Math.PI * 2;
  function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
    return (
      toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow)
    );
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMovement(mapRange(Math.sin(someAngle), -1, 1, 0, 1));
      console.log(value);
    }, 40);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Root colors={colors} movement={movement}>
      <Piece>
        <Favourites
          slug={slug}
          artPieceInfo={artPieceInfo}
          onToggleFavourite={onToggleFavourite}
        />
        <Image
          src={image}
          alt="spotlight piece"
          width={width * 0.2}
          height={height * 0.2}
          style={{
            boxShadow: `3px 3px ${colors[2]}, -1em 0 -1em ${colors[0]}`,
          }}
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}
