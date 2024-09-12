import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function ArtPiecePage({
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
}) {
  const router = useRouter();
  const { slug, name, artist, year, genre, dimensions, colors, imageSource } =
    artPieceInFocus;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!artPieceInFocus) {
    return <div>Art piece not found</div>;
  }
  const Root = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    background: ${(props) =>
      props.colors && `linear-gradient(0.25turn, ${props.colors.join(", ")}) `};
  `;
  return (
    <Root colors={colors}>
      <ArtPiecesPreview
        key={slug}
        slug={slug}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        colors={colors}
        image={imageSource}
        width={dimensions.width}
        height={dimensions.height}
        isInFocus={true}
        artPieceInfo={artPieceInfo}
        onToggleFavourite={onToggleFavourite}
      />
    </Root>
  );
}
