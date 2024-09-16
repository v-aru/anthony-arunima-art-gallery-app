import React from "react";
import { StyledMenu, StyledButtonsArray, SVGWrapper } from "./menuStyles";
import { StyledParagraph } from "../Comment/commentStyling";

export default function Menu({ data, onButtonClick }) {
  return (
    <StyledMenu>
      <StyledParagraph variant="large" flex="center">
        {data?.length} Comments
      </StyledParagraph>
      <StyledButtonsArray>
        <SVGWrapper onClick={() => onButtonClick()}>
          <svg version="1.1" width="48" height="48" viewBox="0 0 220 220">
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(62.954085603112844 62.954085603112816) scale(1 1)"
            >
              <path
                d="M 62.99 90 H 8.919 C 4.001 90 0 85.999 0 81.081 V 8.919 C 0 4.001 4.001 0 8.919 0 h 72.162 C 85.999 0 90 4.001 90 8.919 v 56.135 c 0 1.104 -0.896 2 -2 2 s -2 -0.896 -2 -2 V 8.919 C 86 6.207 83.793 4 81.081 4 H 8.919 C 6.207 4 4 6.207 4 8.919 v 72.162 C 4 83.793 6.207 86 8.919 86 H 62.99 c 1.104 0 2 0.896 2 2 S 64.095 90 62.99 90 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 78.404 89.997 c -1.852 0 -3.702 -0.705 -5.111 -2.114 L 52.078 66.668 c -1.411 -1.411 -2.465 -3.165 -3.049 -5.074 l -3.4 -11.127 c -0.419 -1.372 -0.049 -2.856 0.966 -3.871 c 1.014 -1.016 2.496 -1.386 3.871 -0.966 l 11.126 3.399 c 0.001 0 0.001 0.001 0.001 0.001 c 1.909 0.584 3.663 1.638 5.074 3.049 l 21.215 21.215 c 2.818 2.818 2.818 7.403 0 10.222 l -4.368 4.368 C 82.105 89.292 80.255 89.997 78.404 89.997 z M 49.523 49.523 l 3.331 10.901 c 0.393 1.284 1.103 2.465 2.052 3.415 l 21.215 21.215 c 1.261 1.258 3.307 1.258 4.565 0 l 4.368 -4.368 c 1.259 -1.259 1.259 -3.307 0 -4.565 L 63.84 54.906 c -0.949 -0.949 -2.131 -1.659 -3.415 -2.052 L 49.523 49.523 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 70.298 84.06 c -0.512 0 -1.023 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 11.762 -11.762 c 0.781 -0.781 2.047 -0.781 2.828 0 s 0.781 2.047 0 2.828 L 71.712 83.474 C 71.321 83.864 70.81 84.06 70.298 84.06 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 72.089 23.545 H 17.911 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 54.178 c 1.104 0 2 0.896 2 2 S 73.193 23.545 72.089 23.545 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 72.089 39.182 H 17.911 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 54.178 c 1.104 0 2 0.896 2 2 S 73.193 39.182 72.089 39.182 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 32.998 54.818 H 17.911 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 15.087 c 1.104 0 2 0.896 2 2 S 34.103 54.818 32.998 54.818 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 42.771 70.454 h -24.86 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 24.86 c 1.104 0 2 0.896 2 2 S 43.875 70.454 42.771 70.454 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
            </g>
          </svg>
        </SVGWrapper>
      </StyledButtonsArray>
    </StyledMenu>
  );
}
