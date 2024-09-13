import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import CommentsList from "@/components/CommentsList/CommentsList";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useFavourites } from "@/components/Favourites/FavouritesContext";

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

export default function ArtPiecePage({
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
}) {
  const router = useRouter();
  const { favourites, toggleFavourite } = useFavourites(); 

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!artPieceInFocus) {
    return <div>Art piece not found</div>;
  }

  const { slug, name, artist, year, genre, dimensions, imageSource } =
    artPieceInFocus;

  const isFavourite = favourites.some(fav => fav.slug === slug);
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
        artPieceInfo={favourites}
        onToggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
      />
      <CommentsWrapper>
        <CommentsList artPieceInFocus={artPieceInFocus} />
      </CommentsWrapper>
    </Root>
  );
}
