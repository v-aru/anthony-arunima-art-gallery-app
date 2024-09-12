import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Carousell from "@/components/Carousell/Carousell";
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

//TODO: discuss if the title should be a component used by ArtPiecesPage, Favorites, Detailed/Single ArtPiece and Spotlight

function ArtPiecesPage({
  data,
  setArtPieceInFocusId,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  return (
    <>
      <Title>ART GALLERY</Title>
      <Carousell pieces={data} onSetArtPieceInFocus={onSetArtPieceInFocus} />
      <ArtPieces
        pieces={data}
        artPieceInFocus={artPieceInFocus}
        artPieceInfo={artPieceInfo}
        onToggleFavourite={onToggleFavourite}
        onSetArtPieceInFocus={onSetArtPieceInFocus}
      />
    </>
  );
}

export default ArtPiecesPage;
