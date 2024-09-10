import styled from "styled-components"
import ArtPiecesPreview from "./ArtPiecesPreview/ArtPiecesPreview.jsx";

const Root =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 1rem; 
    align-items: center
`;
function ArtPieces({ pieces }) {
  return (
      <Root>
        {pieces?.map(({slug, name, artist, dimensions, imageSource}) => {
            return (
                <ArtPiecesPreview
                    key={slug}
                    title={name}
                    artist={artist}
                    image={imageSource}
                    width={dimensions.width * 0.75}
                    height={dimensions.height * 0.75}
                />
            );
        })}
        </Root>
    );
}

export default ArtPieces;