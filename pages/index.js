import Spotlight from "./Spotlight";
import styled from "styled-components";


const Root = styled.main`
  color: #888;
`;

const Title = styled.h1`
  text-align: center;
  color:#888;
`;

//Renaming HomePage to SpotlightPage
export default function SpotlightPage({ data }) {

  const randomPiece = data[Math.floor(Math.random() * data.length)];
  
  return (
    <Root>
      <Title>ART GALLERY - SPOTLIGHT</Title>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width * 0.3}
        height={randomPiece.dimensions.height * 0.3}
      />
    </Root>
  );
}
