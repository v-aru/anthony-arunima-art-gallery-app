import styled from "styled-components";
import ArtPiecesPreview from "../ArtPiecesPreview/ArtPiecesPreview.jsx";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
function ArtPieces({ pieces }) {
  return (
    <Root>
      {pieces?.map(({ slug, name, artist, dimensions, imageSource }) => {
        return (
          <ArtPiecesPreview
            key={slug}
            title={name}
            artist={artist}
            image={imageSource}
            width={dimensions.width}
            height={dimensions.height}
          />
        );
      })}
    </Root>
  );
}

export default ArtPieces;
