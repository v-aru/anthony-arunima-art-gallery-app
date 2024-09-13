import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import FavouritesButton from "../Favourites/FavouritesButton";
import {
  Root,
  ButtonWrapper,
  Caption,
  ImageInfo,
  FlowingText,
  LinkWrapper,
  ColorCirclesWrapper,
  Circle,
} from "./artPiecesPreviewStyles";

function ArtPiecesPreview({
  slug,
  artist,
  title,
  year,
  genre,
  width,
  height,
  image,
  artPieceInFocus,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  const viewWidth = useWindowSize().width * 0.2;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;
  const isInFocus = artPieceInFocus?.slug === slug;
  console.log(
    artPieceInFocus,
    artPieceInFocus?.slug,
    slug,
    artPieceInFocus?.slug === slug,
    isInFocus
  );

  return (
    <Root data-slug={slug} isInFocus={isInFocus}>
      <Image src={image} alt={title} width={viewWidth} height={actualHeight} />
      <ButtonWrapper>
        <FavouritesButton
          slug={slug}
          artist={artist}
          artPieceInfo={artPieceInfo}
          onToggleFavourite={onToggleFavourite}
        />
      </ButtonWrapper>

      {!isInFocus ? (
        <>
          <Caption>
            <strong>{title}</strong>&nbsp;By&nbsp;<em>{artist}</em>
          </Caption>
          <LinkWrapper>
            <Link
              href={`/art-pieces/${slug}`}
              onClick={() => onSetArtPieceInFocus(slug)}
            >
              {title}
            </Link>
          </LinkWrapper>
        </>
      ) : (
        <ImageInfo>
          <Caption>
            <FlowingText>
              <strong>{title}</strong>
            </FlowingText>
            <FlowingText>By {artist}</FlowingText>
          </Caption>
          <FlowingText>{year}</FlowingText>
          <FlowingText>{genre}</FlowingText>
        </ImageInfo>
      )}
    </Root>
  );
}

export default ArtPiecesPreview;
