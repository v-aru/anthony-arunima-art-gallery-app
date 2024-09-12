import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

export default function Carousell({ pieces, onSetArtPieceInFocus }) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        overflowX: "auto",
      }}
    >
      {pieces.map((piece) => {
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
}
