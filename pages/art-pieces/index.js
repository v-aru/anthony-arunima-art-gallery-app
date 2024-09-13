import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Title from "@/components/Title/Title";
import Carousell from "@/components/Carousell/Carousell";
import ScrollPositionIndicator from "@/components/ScrollIndicator/ScrollPositionIndicator";

//TODO: discuss if the title should be a component used by ArtPiecesPage, Favorites, Detailed/Single ArtPiece and Spotlight

function ArtPiecesPage({
  data,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  console.log(onSetArtPieceInFocus);
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
