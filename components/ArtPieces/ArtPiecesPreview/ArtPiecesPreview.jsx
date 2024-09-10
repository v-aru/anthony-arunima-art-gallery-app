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
const CaptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4); // Adjust opacity value here
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
`;

function ArtPiecesPreview({ artist, title, width, height, image }) {
  return (
    <Root>
      <Image src={image} alt={title} width={width} height={height} />
      <CaptionWrapper>
        <Caption>
          <strong>{title}</strong>&nbsp;By&nbsp;<em>{artist}</em>
        </Caption>
      </CaptionWrapper>
    </Root>
  );
}

export default ArtPiecesPreview;
