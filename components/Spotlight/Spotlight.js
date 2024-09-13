import Image from "next/image";
import FavouritesButton from "../Favourites/FavouritesButton";
import { Root, Piece, Artist } from "./spotlightStyles";
import { useFavourites } from "../Favourites/FavouritesContext";
import { useEffect, useState } from "react";


export default function Spotlight({
  image,
  title,
  artist,
  colors,
  width,
  height,
  genre,
  year,
  slug
}) {
  const [movement, setMovement] = useState(0);
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/"); // Navigate back to the homepage
  // };

  const {favourites, toggleFavourite} = useFavourites();
  const isFavourite = favourites.some(fav => fav.slug === slug);

  //TODO: discuss if the return should be refactored to use the ArtPiecesPreview component
  //it then could use the Link to the actual ArtPiece Page

  const someAngle = Math.random() * Math.PI * 2;
  function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
    return (
      toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow)
    );
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMovement(mapRange(Math.sin(someAngle), -1, 1, 0, 1));
    }, 40);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Root colors={colors} movement={movement}>
      <Piece>
        <FavouritesButton
          slug={slug}
          artistName={artist}
          title={title}
          image={image}
          onToggleFavourite={(slug) => toggleFavourite(slug, artist, title, image, {width, height}, genre, year)}
          isFavourite={isFavourite}
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
    </Root>
  );
}
