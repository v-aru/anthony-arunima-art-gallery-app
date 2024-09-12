import Image from "next/image";
import styled from "styled-components";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";
import Favourites from "../Favourites/Favourites";

const Root = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 2rem;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px; /* Top-right corner */
  right: 10px;
  z-index: 10; /* Ensure the button stays on top of the image */
`;

//TODO: discuss to introduce image style "onHover" so that the Link/Icon gets more visible
// const ImageWrapper = styled.div`
//   filter: blur(0px);
//   &:hover {
//     filter: blur(4px);
//   }
// `;
const Caption = styled.div`
  display: flex;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  color: #ccc;
`;
const ImageInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #ccc;
  background-color: #33343380; /* Overall container styling */
  border: 1px solid #ccc; /* Subtle border */
  padding: 15px;
  margin-top: 10px; /* Space above the box */
  font-family: sans-serif;
`;
const FlowingText = styled.p`
  margin: 0;
  padding: 0;
`;
const LinkWrapper = styled.div`
  z-index: 10;
  width: 100%;
  ${"" /* height: fit-content; */}
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &:hover {
    letter-spacing: 2px;
    opacity: 1;
  }
  & > * {
    color: white;
    background-color: #33343380;
    padding: 1rem;
    overflow-wrap: break-word;
  }
`;

const ColorCirclesWrapper = styled.span`
  display: flex;
  flex-flow: row nowrap;
  gap: 1;
`;
const Circle = styled.span`
  height: 25px;
  width: 25px;
  background: ${(props) => {
    console.log(props);
    return props.color;
  }};

  border-radius: 50%;
`;
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
