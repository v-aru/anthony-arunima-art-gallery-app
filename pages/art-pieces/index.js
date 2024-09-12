import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Title from "@/components/Title/Title";
import Carousell from "@/components/Carousell/Carousell";

//TODO: discuss if the title should be a component used by ArtPiecesPage, Favorites, Detailed/Single ArtPiece and Spotlight

function ArtPiecesPage({
  data,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  return (
    <>
      <Title content={"ART GALLERY"} />
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
