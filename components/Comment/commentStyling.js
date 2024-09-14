import styled from "styled-components";

export const StyledCommentWrapper = styled.li`
  width: 100%;
  height: fit-content;
  ${
    "" /* max-width: 100%;
  max-height: 100%; */
  }
  ${"" /* aspect-ratio: 3 / 4; */}
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #ddd;
  transition: box-shadow 0.3s ease;
  ${"" /* overflow: hidden; */}

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;
export const StyledAvatar = styled.span`
  width: 2.2rem;
  height: 2.2rem;
  border: 2px solid transparent;
  border-radius: 50%;
  margin: 2rem 0rem 0 0;
  &:hover {
    border: 2px solid #333;
    transition: border 0.3s ease; // Smooth transition
  }
`;
export const StyledCommentHeader = styled.h6`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  color: black;
  padding: 0;
  margin: 0;
`;

export const StyledCommentBody = styled.section`
  width: 100%;
  font-size: 1rem;
  padding: 0 1.2rem 0 0.5rem;
  margin: 0;
`;
export const StyledCommentMenu = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: black;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
`;
export const SVGWrapper = styled.svg`
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  border-radius: 50%;
  padding: 0.2rem;
  object-fit: contain;
  &:hover {
    background-color: #ccc;
  }
  &:hover path {
    stroke: red;
    stroke-width: 3; // Thicker stroke on hover
    transition: stroke-width 0.3s ease; // Smooth transition
  }
`;
export const StyledCommentParagraph = styled.p`
  width: 100%;
  height: fit-content;
  display: flex;
  ${"" /* flex-flow: row nowrap; */}
  justify-content: ${(props) => {
    switch (props.flex) {
      case "center":
        return center;
      case "end":
        return "flex-end";
      default:
        return "flex-start";
    }
  }};
  align-items: flex-start;
  color: black;
  padding: ${(props) => {
    switch (props.variant) {
      case "large":
        return "0rem 0 0 0";
      case "small":
        return 0;
      default:
        return "0.5rem 0";
    }
  }};
  margin: 0;
  font-size: ${(props) => {
    switch (props.variant) {
      case "large":
        return "1.1rem";
      case "small":
        return "0.8rem";
      default:
        return "0.9rem";
    }
  }};
  font-weight: ${(props) => {
    switch (props.variant) {
      case "large":
        return 400;
      case "small":
        return 100;
      default:
        return 200;
    }
  }};
`;
