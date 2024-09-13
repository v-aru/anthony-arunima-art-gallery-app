import React, { useState, useEffect, useRef, useCallback } from "react";

import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("./Sketch"), {
  ssr: false,
});
export default function SketchWrapper({ containerRef, textToWrite }) {
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: containerRef?.current?.offsetWidth,
    height: containerRef?.current?.offsetHeight,
  });

  const width = dimensions?.width;
  const height = dimensions?.height;
  const padding = -200;

  useEffect(() => {
    setIsClient(true);
    setDimensions({
      width: containerRef?.current?.offsetWidth,
      height: containerRef?.current?.offsetHeight,
    });
  }, [containerRef]);

  return (
    <>
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: "transparent",
        }}
      >
        {isClient && (
          <Sketch
            width={width}
            height={height}
            textToWrite={textToWrite}
            mainObjColor={"#333333"}
            backgroundColor={"#333333"}
          />
        )}
      </div>
    </>
  );
}
