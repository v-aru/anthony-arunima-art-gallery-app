import Image from "next/image";
import React, { useRef } from "react";
import { Root, StyledCarousellItem } from "./carousellStyles";

export default function Carousell({ pieces, onSetArtPieceInFocus }) {
  const containerRef = useRef(null);

  return (
    <Root ref={containerRef}>
      {pieces.map((piece) => {
        return (
          <StyledCarousellItem
            key={piece.slug}
            onClick={() => onSetArtPieceInFocus(piece.slug)}
          >
            <Image
              src={piece.imageSource}
              alt={piece.title}
              quality={20}
              style={{ objectFit: "cover" }}
              width={50}
              height={50}
            />
          </StyledCarousellItem>
        );
      })}
    </Root>
  );
}
