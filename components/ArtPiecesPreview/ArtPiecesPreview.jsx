import Image from "next/image";
import styled from "styled-components";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import Favourites from "../Favourites/Favourites";

import {
  Root,
  ButtonWrapper,
  ImageWrapper,
  Caption,
  ImageInfo,
  FlowingText,
  LinkWrapper,
} from "./artPiecesPreviewStyles";
function ArtPiecesPreview({
  dataSlug,
  slug,
  artist,
  title,
  year,
  genre,
  width,
  height,
  colors,
  image,
  isInFocus = false,
  artPieceInfo,
  onToggleFavourite,
  onSetArtPieceInFocus,
}) {
  const viewWidth = useWindowSize().width * 0.4;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;

  return (
    <Root data-slug={slug}>
      <ButtonWrapper>
        <Favourites
          slug={slug}
          artPieceInfo={artPieceInfo}
          onToggleFavourite={onToggleFavourite}
        />
      </ButtonWrapper>
      <Image src={image} alt={title} width={viewWidth} height={actualHeight} />{" "}
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

          <ColorCirclesWrapper>
            {colors?.map((color, i) => {
              return <Circle key={i} color={color}></Circle>;
            })}
          </ColorCirclesWrapper>
        </ImageInfo>
      )}
    </Root>
  );
}

export default ArtPiecesPreview;
