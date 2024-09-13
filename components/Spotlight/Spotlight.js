import Image from "next/image";
import FavouritesButton from "../Favourites/FavouritesButton";
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
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/"); // Navigate back to the homepage
  // };

  // const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  //TODO: discuss if the return should be refactored to use the ArtPiecesPreview component
  //it then could use the Link to the actual ArtPiece Page
  return (
    <Root colors={colors}>
      <Piece>
        <FavouritesButton
          slug={slug}
          artPieceInfo={artPieceInfo}
          onToggleFavourite={onToggleFavourite}
        />
        <Image
          src={image}
          alt="spotlight piece"
          width={width * 0.18}
          height={height * 0.18}
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}
