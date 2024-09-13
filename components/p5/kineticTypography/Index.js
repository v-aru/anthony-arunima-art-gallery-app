import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import useResizeObserver from "@/hooks/useResizeObserver";
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

  useEffect(() => {
    setIsClient(true);
    setDimensions({
      width: containerRef?.current?.offsetWidth,
      height: containerRef?.current?.offsetHeight,
    });
  }, [containerRef]);
  const [isUserActive, setIsUserActive] = useState(false);
  const handleUserActivity = useCallback(() => {
    setIsUserActive(true);
  }, []);
  useResizeObserver(
    containerRef,
    setDimensions,
    handleUserActivity,
    setIsUserActive
  );
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
