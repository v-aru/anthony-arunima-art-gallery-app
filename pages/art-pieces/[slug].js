import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";

export default function ArtPiecePage({ artPieceInFocus, artPieceInfo, onToggleFavourite }) {
  const router = useRouter();
  const { slug, name, artist, dimensions, imageSource } = artPieceInFocus;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!artPieceInFocus) {
    return <div>Art piece not found</div>;
  }

  return (
    <div>
      <ArtPiecesPreview
        key={slug}
        slug={slug}
        title={name}
        artist={artist}
        image={imageSource}
        width={dimensions.width}
        height={dimensions.height}
        isInFocus={true}
        artPieceInfo={artPieceInfo}
        onToggleFavourite={onToggleFavourite}
      />
    </div>
  );
}
