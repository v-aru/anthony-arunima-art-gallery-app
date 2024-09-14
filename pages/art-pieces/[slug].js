import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import CommentsList from "@/components/CommentsList/CommentsList";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFavourites } from "@/components/Favourites/FavouritesContext";
import FormAddComment from "@/components/FormAddComment/FormAddComment";
import { CommentsWrapper, Root, StyledBody } from "./slugStyles";
import Title from "@/components/Title/Title";

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

  const isFavourite = favourites.some((fav) => fav.slug === slug);
  return (
    <Root colors={artPieceInFocus.colors}>
      <Title
        line1="B R U S H &nbsp; 'N' &nbsp; B Y T E "
        line2="G A L L E R Y"
      />
      <StyledBody>
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
          }}
        >
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
          <FormAddComment />
        </div>
        <CommentsWrapper>
          <CommentsList artPieceInFocus={artPieceInFocus} />
        </CommentsWrapper>
      </StyledBody>
    </Root>
  );
}
