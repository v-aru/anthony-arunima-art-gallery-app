import ArtPiecesPreview from "@/components/ArtPieces/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

  const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
      props.colors && `linear-gradient(0.25turn, ${props.colors.join(", ")}) `};
  `;
  const handleGoToArtPiece = () => {};
  return (
    <StyledWrapper colors={randomPiece?.colors}>
      <h1>Spotlight Page</h1>
      <button onClick={handleClick}>Go Back</button>

      {!isLoading && randomPiece && (
        <ArtPiecesPreview
          key={randomPiece?.slug}
          title={randomPiece?.name}
          artist={randomPiece?.artist}
          image={randomPiece?.imageSource}
          width={randomPiece?.dimensions?.width * 0.2}
          height={randomPiece?.dimensions?.height * 0.2}
        />
      )}
    </StyledWrapper>
  );
}
//
//
