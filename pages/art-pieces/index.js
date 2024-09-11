import ArtPieces from "@/components/ArtPieces/ArtPieces";
import styled from "styled-components";

const Title = styled.h1`
  z-index: 10;
  position: sticky;
  top: 0;
  text-align: center;
  padding: 2rem;
  color: #888;
  background-color: #33343380;
`;

function ArtPiecesPage({ data, setArtPieceInFocusId, artPieceInFocus, artPieceInfo, onToggleFavourite }) {
  return (
    <>
      <Title>ART GALLERY</Title>
      <ArtPieces
        pieces={data}
        setArtPieceInFocusId={setArtPieceInFocusId}
        artPieceInFocus={artPieceInFocus}
        artPieceInfo={artPieceInfo}
        onToggleFavourite={onToggleFavourite}
      />
    </>
  );
}

export default ArtPiecesPage;
