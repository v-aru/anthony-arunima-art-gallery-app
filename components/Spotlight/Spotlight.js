import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Favourites from "../Favourites/Favourites";

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
  position: relative;
`;

const Artist = styled.div`
  width: 300px;
  text-align: center;
  height: 100%;
  padding: 1rem;
  color: black;
`;

export default function Spotlight({ image, artist, colors, width, height, slug, artPieceInfo, onToggleFavourite}) {
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push("/"); // Navigate back to the homepage
  // };

  // const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <Root colors={colors}>
      <Piece>
        <Favourites
          slug={slug}
          artPieceInfo={artPieceInfo}
          onToggleFavourite={onToggleFavourite}
        />
        <Image
          src={image}
          alt="spotlight piece"
          width={width * 0.2}
          height={height * 0.2}
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}
