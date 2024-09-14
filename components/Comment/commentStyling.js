import styled from "styled-components";

export const StyledCommentWrapper = styled.li`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #333;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.4),
    0px 6px 10px 0px rgba(0, 0, 0, 0.3), 0px 1px 18px 0px rgba(0, 0, 0, 0.3);
`;
export const StyledAvatar = styled.span`
  width: 1.9rem;
  height: 1.8rem;
  border: 2px solid transparent;
  border-radius: 50%;
  margin: 1rem 0rem 0 0;
  &:hover {
    border: 2px solid white;
    transition: border 0.3s ease; // Smooth transition
  }
`;
export const StyledCommentHeader = styled.h6`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: white;
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
  color: white;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
`;
export const SVGWrapper = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  font-size: 2rem;
  border-radius: 50%;
  padding: 0.2rem;
  object-fit: contain;
  &:hover {
    background-color: #555;
  }
  &:hover path {
    stroke-width: 3; // Thicker stroke on hover
    transition: stroke-width 0.3s ease; // Smooth transition
  }
`;
export const StyledCommentParagraph = styled.p`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row nowrap;
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
  color: white;
  padding: ${(props) => {
    switch (props.variant) {
      case "large":
        return "1rem 0";
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
