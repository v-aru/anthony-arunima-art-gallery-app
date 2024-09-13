import React, { useState } from "react";
import { useRef, useEffect } from "react";
import * as p5 from "p5";

// import fontFile from "../../../public/fonts/NotoSansWarangCiti-Regular.ttf";
// import fontFile from "../../../public/fonts/Roboto-Black.ttf";
// import fontFile from "../../../public/fonts/Arvo-Bold.ttf";
// import fontFile from "../../../public/fonts/Roboto-BlackItalic.ttf";
import fontFile from "../../../public/fonts/Roboto-Thin.ttf";
// import fontFile from "../../../public/fonts/Syne-Bold.ttf";
// import fontFile from "../../../public/fonts/Syne-Regular.ttf";
// import fontFile from "../../../public/fonts/Syne-VariableFont_wght.ttf";
export default function Sketch({
  width,
  height,
  textToWrite,
  mainObjColor,
  backgroundColor,
}) {
  console.log(textToWrite, width, height);

  const sketchRef = useRef(null);
  let pg;
  var font;
  const Sketch = (p) => {
    p.preload = () => {
      font = p.loadFont(
        fontFile,
        // "../../../resources/assets/fonts/Syne-Regular.ttf",
        () => {
          // console.log("Font loaded successfully!");
        },
        (error) => {
          console.error("Error loading Font:", error);
          font = p.loadFont("Helvetica"); // Fallback to Helvetica
        }
      );
    };
    p.setup = () => {
      p.createCanvas(width, height);
      p.background(backgroundColor);

      pg = p.createGraphics(width, height);
      p.noStroke();
    };

    p.draw = () => {
      p.clear();
      p.background(255);
      pg.background(255);
      pg.fill(0);
      pg.textFont(font);
      pg.textSize(60);
      pg.push();
      pg.translate(width / 2, height / 2);
      pg.textAlign(p.CENTER, p.CENTER);
      pg.text(textToWrite, 0, 0);
      pg.pop();
      let tilesX = 20;
      let tilesY = 6;
      let tileW = p.round(width / tilesX);
      let tileH = p.round(height / tilesY);
      for (let y = 0; y < tilesY; y++) {
        for (let x = 0; x < tilesX; x++) {
          // WARP
          let wave = p.round(
            p.sin(p.frameCount * p.sin(0.01 + 0.01) + x * y * 0.1) * 15
          );
          // SOURCE
          let sx = x * tileW + wave;
          let sy = y * tileH;
          let sw = tileW;
          let sh = tileH;
          // DESTINATION
          let dx = x * tileW;
          let dy = y * tileH;
          let dw = tileW;
          let dh = tileH;
          p.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
        }
      }
    };
  };
  useEffect(() => {
    let inst = new p5(Sketch, sketchRef.current);
    return () => inst.remove();
  }, [width, height, textToWrite]);

  return (
    <>
      <div id="p5-template" ref={sketchRef}></div>
    </>
  );
}
