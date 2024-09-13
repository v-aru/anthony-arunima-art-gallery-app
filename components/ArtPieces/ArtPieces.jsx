import styled from "styled-components";
import { useEffect, useRef } from "react";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview.jsx";
import ScrollPositionIndicator from "../ScrollIndicator/ScrollPositionIndicator.js";
import { useFavourites } from "../Favourites/FavouritesContext.js";

const Root = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: scroll;
`;
function ArtPieces({
  pieces,
  artPieceInFocus,
  onSetArtPieceInFocus,
}) {
  const artPiecesRef = useRef(null);
  const { favourites, toggleFavourite } = useFavourites();

  const scrollToPiece = (piece) => {
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
    if (artPieceInFocus) {
      scrollToPiece(artPieceInFocus);
    }
  }, [artPieceInFocus]);
  return (
    <Root ref={artPiecesRef}>
      {" "}
      <ScrollPositionIndicator artPiecesRef={artPiecesRef} />
      {pieces?.map(
        ({
          slug,
          name,
          title,
          artist,
          year,
          genre,
          dimensions,
          colors,
          imageSource
        }) => {
        
          const isFavourite = favourites.some(fav => fav.slug === slug);

          return (
            <>
              <ArtPiecesPreview
                dataSlug={slug} //TODO: clean this up
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
                onToggleFavourite={() => toggleFavourite(slug, artist, title, imageSource, dimensions)}
                isFavourite={isFavourite}
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
