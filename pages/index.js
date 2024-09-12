import styled from "styled-components";
import Spotlight from "../components/Spotlight/Spotlight";
import { useEffect, useState } from "react";

const Root = styled.main`
  color: #888;
`;

const Title = styled.h1`
  text-align: center;
  color: #888;
`;

//Renaming HomePage to SpotlightPage
export default function SpotlightPage({
  data,
  artPieceInfo,
  onToggleFavourite,
}) {
  const [randomPiece, setRandomPiece] = useState(null);

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

  return (
    <Root>
      <Title>ART GALLERY - SPOTLIGHT</Title>
      <Spotlight
        image={randomPiece.imageSource}
        colors={randomPiece.colors}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
        artPieceInfo={artPieceInfo}
        onToggleFavourite={onToggleFavourite}
      />
    </Root>
  );
}
