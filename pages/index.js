import styled from "styled-components";
import Spotlight from "../components/Spotlight/Spotlight";
import { useEffect, useState } from "react";
import Title from "@/components/Title/Title";
import { useFavourites } from "@/components/Favourites/FavouritesContext";

const Root = styled.main`
  color: #888;
`;

//Renaming HomePage to SpotlightPage
export default function SpotlightPage({
  data
}) {
  const [randomPiece, setRandomPiece] = useState(null);
  const { favourites, toggleFavourite } = useFavourites();

  useEffect(() => {
    // Select random art piece only once, when the component mounts
    if (data && data.length > 0) {
      // Select random art piece only when the data is available
      const randomNumber = Math.floor(Math.random() * data.length);
      const selectedPiece = data[randomNumber];
      setRandomPiece(selectedPiece);
    }
  }, [data]);

  if (!randomPiece) return <div>Loading...</div>;
  if (randomPiece) {
    console.log("Random piece slug:", randomPiece.slug); // Ensure this is logging a valid slug
  }


  return (
    <Root>

      <Title content={"ART GALLERY - SPOTLIGHT"} />

      <Spotlight
        image={randomPiece.imageSource}
        colors={randomPiece.colors}
        artist={randomPiece.artist}
        title={randomPiece.title}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
        onToggleFavourite={() => toggleFavourite(randomPiece.slug, randomPiece.artist, randomPiece.title, randomPiece.imageSource, randomPiece.dimensions)}
      />
    </Root>
  );
}
