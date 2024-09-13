import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import FavouritesButton from "../Favourites/FavouritesButton";
import {
  Root,
  Caption,
  ImageInfo,
  FlowingText,
  LinkWrapper,
  ButtonWrapper,
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
  isInFocus = false,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  const viewWidth = useWindowSize().width * 0.2;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;

  return (
    <Root data-slug={slug}>
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
