import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Root = styled.section`
    flex: 1;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    background: ${(props) =>
    props.colors && `linear-gradient(0.25turn, ${props.colors.join(", ")}) `};
`;

const Piece = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Artist = styled.div`
  width: 50px;
  height: 100%;
  padding: 1rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export default function Spotlight({ image, artist, width, height }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/"); // Navigate back to the homepage
  };  
  
  return (
    <Root>
      <Piece>
        <Image
          src={image}
          alt="spotlight piece"
          width={width}
          height={height}
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}
//
//
