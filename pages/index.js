import styled from "styled-components";
import Spotlight from "../components/Spotlight/Spotlight";

import { useEffect, useRef, useState } from "react";
import SketchWrapper from "@/components/p5/kineticTypography/Index";
// import Title from "@/components/Title/Title";
import { useFavourites } from "@/components/Favourites/FavouritesContext";

const Root = styled.main`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #888;
`;

//Renaming HomePage to SpotlightPage
export default function SpotlightPage({
  data,
  artPieceInfo,
  onToggleFavourite,
}) {
  const containerRef = useRef(null);
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

  return (
    <Root>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100px",
          // backgroundColor: "black",
        }}
      >
        <SketchWrapper
          containerRef={containerRef}
          textToWrite={"Brush'n'Byte, Berlin"}
        />{" "}
      </div>{" "}
      {/* <Title content={"ART GALLERY - SPOTLIGHT"} /> */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          // flex: 1,
          justifyContent: "center",
          alignItems: "center",
          color: "#888",
        }}
      >
        {" "}
        <Spotlight
          image={randomPiece.imageSource}
          colors={randomPiece.colors}
          artist={randomPiece.artist}
          width={randomPiece.dimensions.width}
          height={randomPiece.dimensions.height}
          artPieceInfo={favourites}
          onToggleFavourite={(slug) =>
            toggleFavourite(slug, randomPiece.artist)
          }
        />
      </div>{" "}
    </Root>
  );
}
