import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import CommentsList from "@/components/CommentsList/CommentsList";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function ArtPiecePage({
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
}) {
  const router = useRouter();
  

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!artPieceInFocus) {
    return <div>Art piece not found</div>;
  }

  const { slug, name, artist, year, genre, dimensions, imageSource } =
    artPieceInFocus;
    
  const Root = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    background: ${(props) => {
      console.log(artPieceInFocus);
      return (
        props.colors && `linear-gradient(0.25turn, ${props.colors.join(", ")}) `
      );
    }};
  `;
  const CommentsWrapper = styled.section`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
  `;
  return (
    <Root colors={artPieceInFocus.colors}>
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
        isInFocus={true}
        artPieceInfo={artPieceInfo}
        onToggleFavourite={onToggleFavourite}
      />
      <CommentsWrapper>
        <CommentsList artPieceInFocus={artPieceInFocus} />
      </CommentsWrapper>
    </Root>
  );
}
