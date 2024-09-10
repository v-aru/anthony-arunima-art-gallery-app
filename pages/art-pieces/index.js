import ArtPieces from "@/components/ArtPieces/ArtPieces";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color:#888;
`;

function ArtPiecesPage ({data}) {
    return (
        <>
            <Title>ART GALLERY</Title>
            <ArtPieces pieces={data}/>
        </>
    );
};

export default ArtPiecesPage;