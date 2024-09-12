import styled from "styled-components";
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
  setArtPieceInFocusId,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
}) {
  return (
    <Root>
      {pieces?.map(
        ({ slug, name, artist, year, genre, dimensions, imageSource }) => {
          return (
            <>
              <ArtPiecesPreview
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
                setArtPieceInFocusId={setArtPieceInFocusId}
                artPieceInfo={artPieceInfo}
                onToggleFavourite={onToggleFavourite}
              />
            </>
          );
        }
      )}
    </Root>
  );
}

export default ArtPieces;
