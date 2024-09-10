import styled from "styled-components";
import ArtPiecesPreview from "./ArtPiecesPreview/ArtPiecesPreview.jsx";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
function ArtPieces({ pieces, customImageSizeFactor }) {
  return (
    <Root>
      {pieces?.map(({ slug, name, artist, dimensions, imageSource }) => {
        return (
          <ArtPiecesPreview
            key={slug}
            title={name}
            artist={artist}
            image={imageSource}
            width={dimensions.width * 0.2}
            height={dimensions.height * 0.2}
          />
        );
      })}
    </Root>
  );
}

export default ArtPieces;
