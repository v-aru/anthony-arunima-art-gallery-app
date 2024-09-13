import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Title from "@/components/Title/Title";
import Carousell from "@/components/Carousell/Carousell";

function ArtPiecesPage({
  data,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  return (
    <>
      <Title line1="B R U S H &nbsp; 'N' &nbsp; B Y T E " line2="G A L L E R Y" />
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
