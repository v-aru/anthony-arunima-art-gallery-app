import Image from "next/image";
import FavouritesButton from "../Favourites/FavouritesButton";
import { Root, Piece, Artist } from "./spotlightStyles";
import { useFavourites } from "../Favourites/FavouritesContext";

export default function Spotlight({
  image,
  title,
  artist,
  colors,
  width,
  height,
  slug
}) {
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/"); // Navigate back to the homepage
  // };

  const {favourites, toggleFavourite} = useFavourites();
  const isFavourite = favourites.some(fav => fav.slug === slug);

  //TODO: discuss if the return should be refactored to use the ArtPiecesPreview component
  //it then could use the Link to the actual ArtPiece Page
  return (
    <Root colors={colors}>
      <Piece>
        <FavouritesButton
          slug={slug}
          artistName={artist}
          title={title}
          image={image}
          onToggleFavourite={(slug) => toggleFavourite(slug, artist, title, image, {width, height})}
          isFavourite={isFavourite}
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
