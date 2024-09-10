import Image from "next/image";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 2rem;
  overflow: hidden;
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  font-size: 2rem;
`;

function ArtPiecesPreview({ artist, title, width, height, image }) {
  return (
    <Root>
      <Image src={image} alt={title} width={width} height={height} />
      <Caption>
        <strong>{title}</strong>&nbsp;By&nbsp;<em>{artist}</em>
      </Caption>
    </Root>
  );
}

export default ArtPiecesPreview;
