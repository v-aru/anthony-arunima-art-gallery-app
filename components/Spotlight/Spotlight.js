import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Root = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background: ${(props) =>
    props.colors && `linear-gradient(0.25turn, ${props.colors.join(", ")}) `};
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Piece = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Artist = styled.div`
  width: 300px;
  text-align: center;
  height: 100%;
  padding: 1rem;
  color: black;
`;

export default function Spotlight({ pieces }) {
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/"); // Navigate back to the homepage
  // };

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  //TODO: discuss if the return should be refactored to use the ArtPiecesPreview component
  //it then could use the Link to the actual ArtPiece Page
  return (
    <Root colors={randomPiece.colors}>
      <Piece>
        <Image
          src={randomPiece.imageSource}
          alt="spotlight piece"
          width={randomPiece.dimensions.width * 0.2}
          height={randomPiece.dimensions.height * 0.2}
        />
      </Piece>
      <Artist>{randomPiece.artist}</Artist>
    </Root>
  );
}
