import React from "react";
import { StyledTitle, Line } from "./titleStyles";
export default function Title({ line1, line2 }) {
  return (
    <StyledTitle>
      <Line>{line1}</Line>
      <Line>{line2}</Line>
    </StyledTitle>
  );
}
