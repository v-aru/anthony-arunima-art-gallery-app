import Image from "next/image";
import styled from "styled-components";
import { useWindowSize } from "@uidotdev/usehooks";

const Root = styled.div`
  display: inline-block;
  border: 2px solid white;
  padding: 2rem;
  overflow: hidden;
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  color: #ccc;
`;

function ArtPiecesPreview({ artist, title, width, height, image }) {

  const viewWidth = useWindowSize().width * 0.4;
  const aspectRatio = width / height;
  const actualHeight = viewWidth / aspectRatio;
  
  return (
    <Root>
      <Image src={image} alt={title} width={viewWidth} height={actualHeight} />
      <Caption>
        <strong>{title}</strong>&nbsp;By&nbsp;<em>{artist}</em>
      </Caption>
    </Root>
  );
}

export default ArtPiecesPreview;
