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
  CardContainer,
  ImageWrapper
} from "./artPiecesPreviewStyles.js";

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
  isFavourite,
  onSetArtPieceInFocus,
}) {
  const viewWidth = useWindowSize().width * 0.2;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;

  const isInFocus = artPieceInFocus?.slug === slug;
  const currentArtPiece = artPieceInfo?.find((piece) => piece.slug === slug);

  return (
    <Root data-slug={slug} isInFocus={isInFocus}>
      <CardContainer key={slug}>
        <ImageWrapper>
          <Image src={image} alt={title} width={viewWidth} height={actualHeight} />
          </ImageWrapper>
          <ButtonWrapper>
            <FavouritesButton
              slug={slug}
              artist={artist}
              title={title}
              image={image}
              artPieceInfo={artPieceInfo}
              onToggleFavourite={onToggleFavourite}
              isFavourite={isFavourite}
            />
          </ButtonWrapper>
        {/* </ImageWrapper> */}
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
                see Details
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
            <FlowingText>{genre}</FlowingText>{" "}
            <ColorCirclesWrapper>
              {artPieceInFocus?.colors.map((color, index) => (
                <Circle key={index} color={color} />
              ))}
            </ColorCirclesWrapper>
          </ImageInfo>
        )}
      </CardContainer>
    </Root>
  );
}

export default ArtPiecesPreview;
