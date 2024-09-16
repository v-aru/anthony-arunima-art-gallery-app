import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import CommentsList from "@/components/CommentsList/CommentsList";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFavourites } from "@/components/Favourites/FavouritesContext";
import FormAddComment from "@/components/FormAddComment/FormAddComment";
import { CommentsWrapper, Root, StyledBody } from "./slugStyles";
import Title from "@/components/Title/Title";
import { useContext, useState } from "react";
import CommentsContext from "@/components/CommentsList/CommentsContext";
import Menu from "@/components/Menu/Menu";

export default function ArtPiecePage({
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
}) {
  const router = useRouter();
  const { filteredCommentsBySlug } = useContext(CommentsContext);
  const [showFormAddComments, setShowFormAddComments] = useState(false);
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

  const handleToggleShowFormAddComment = () => {
    setShowFormAddComments((prev) => !prev);
  };
  return (
    <Root colors={artPieceInFocus.colors}>
      <Title
        line1="B R U S H &nbsp; 'N' &nbsp; B Y T E "
        line2="G A L L E R Y"
      />
      <StyledBody>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Menu
            context="slug"
            data={filteredCommentsBySlug}
            onButtonClick={handleToggleShowFormAddComment}
          />
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
          {showFormAddComments && <FormAddComment />}
        </div>
        <CommentsWrapper>
          <CommentsList artPieceInFocus={artPieceInFocus} />
        </CommentsWrapper>
      </StyledBody>
    </Root>
  );
}
