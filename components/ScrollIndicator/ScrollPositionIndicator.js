import { useEffect, useState } from "react";
import {
  StyledScrollIndicator,
  ProgressContainer,
  ProgressBar,
} from "./scrollPositionIndicatorStyles";

export default function ScrollPositionIndicator({ artPiecesRef }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!artPiecesRef.current) return;

      const container = artPiecesRef.current;
      const containerScrollTop = container.scrollTop;
      const containerScrollHeight = container.scrollHeight;
      const containerClientHeight = container.clientHeight;

      const scrolled =
        (containerScrollTop / (containerScrollHeight - containerClientHeight)) *
        100;
      setScrollPercentage(scrolled);
    };

    if (artPiecesRef.current) {
      artPiecesRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (artPiecesRef.current) {
        artPiecesRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [artPiecesRef]);

  return (
    <StyledScrollIndicator>
      <ProgressContainer>
        <ProgressBar width={`${scrollPercentage}%`} />
      </ProgressContainer>
    </StyledScrollIndicator>
  );
}
