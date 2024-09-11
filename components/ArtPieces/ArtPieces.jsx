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
function ArtPieces({ pieces, setArtPieceInFocusId, artPieceInFocus }) {
  return (
    <Root>
      {pieces?.map(
        ({ slug, name, artist, year, genre, dimensions, imageSource }) => {
          return (
            <ArtPiecesPreview
              key={slug}
              slug={slug}
              title={name}
              artist={artist}
              year={year}
              genre={genre}
              image={imageSource}
              width={dimensions.width}
              height={dimensions.height}
              setArtPieceInFocusId={setArtPieceInFocusId}
            />
          );
        }
      )}
    </Root>
  );
}

export default ArtPieces;
