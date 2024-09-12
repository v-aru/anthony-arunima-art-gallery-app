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
  //TODO: discuss if the return should be refactored to use the ArtPiecesPreview component
  //it then could use the Link to the actual ArtPiece Page
  return (
    <Root colors={colors}>
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
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}
