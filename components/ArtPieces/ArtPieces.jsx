import styled from "styled-components";
import { useEffect, useRef } from "react";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview.jsx";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
function ArtPieces({
  pieces,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  const artPiecesRef = useRef(null);

  const scrollToPiece = (piece) => {
    console.log("triggered scrollToPiece");

    if (artPiecesRef.current) {
      const pieceElement = artPiecesRef.current.querySelector(
        `[data-slug="${piece.slug}"]`
      );
      if (pieceElement) {
        pieceElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest", // Adjust as needed
          inline: "nearest", // Adjust as needed
        });
      }
    }
  };

  useEffect(() => {
    console.log("triggered useEffect");
    if (artPieceInFocus) {
      scrollToPiece(artPieceInFocus);
    }
  }, [artPieceInFocus]);
  return (
    <Root ref={artPiecesRef}>
      {pieces?.map(
        ({ slug, name, artist, year, genre, dimensions, imageSource }) => {
          return (
            <>
              <ArtPiecesPreview
                data-slug={slug}
                key={slug}
                slug={slug}
                artist={artist}
                title={name}
                year={year}
                genre={genre}
                width={dimensions.width}
                height={dimensions.height}
                image={imageSource}
                artPieceInFocus={artPieceInFocus}
                artPieceInfo={artPieceInfo}
                onToggleFavourite={onToggleFavourite}
                onSetArtPieceInFocus={onSetArtPieceInFocus}
              />
            </>
          );
        }
      )}
    </Root>
  );
}

export default ArtPieces;
