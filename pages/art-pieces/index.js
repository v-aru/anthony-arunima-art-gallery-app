import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Title from "@/components/Title/Title";

//TODO: discuss if the title should be a component used by ArtPiecesPage, Favorites, Detailed/Single ArtPiece and Spotlight

function ArtPiecesPage({
  data,
  setArtPieceInFocusId,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
}) {
  return (
    <>
      <Title content={"ART GALLERY"} />
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
