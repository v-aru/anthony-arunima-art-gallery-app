import Image from "next/image";
import styled from "styled-components";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

const Root = styled.div`
  position: relative;
  display: inline-block;
  border: 2px solid white;
  padding: 2rem;
  overflow: hidden;
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
  justify-content: flex-end;
  padding-top: 1rem;
  color: #ccc;
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
  }
`;
function ArtPiecesPreview({
  slug,
  artist,
  title,
  width,
  height,
  image,
  setArtPieceInFocusId,
  isInFocus = false,
}) {
  const viewWidth = useWindowSize().width * 0.4;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;

  return (
    <Root>
      {/* <ImageWrapper> */}
      <Image src={image} alt={title} width={viewWidth} height={actualHeight} />
      {/* </ImageWrapper> */}
      <Caption>
        <strong>{title}</strong>&nbsp;By&nbsp;<em>{artist}</em>
      </Caption>{" "}
      {!isInFocus && (
        <LinkWrapper>
          <Link
            href={`/art-pieces/${slug}`}
            onClick={() => setArtPieceInFocusId(slug)}
          >
            {title}
          </Link>
        </LinkWrapper>
      )}
    </Root>
  );
}

export default ArtPiecesPreview;
