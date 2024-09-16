import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 1rem;
  overflow: hidden;
  background: ${(props) => (props.isInFocus ? "black" : "white")};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 15;
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  pointer-events: all;
`;

export const Caption = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #6689a1;

`;

export const ImageInfo = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #6689a1;
  background-color: #33343380;
  border: 1px solid #6689a1;

  padding: 15px;
  margin-top: 10px;
  font-family: sans-serif;
`;

export const FlowingText = styled.p`
  margin: 0;
  padding: 0;
`;

export const LinkWrapper = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &:hover {
    letter-spacing: 2px;
    opacity: 1;
  }
  & > * {
    color: white;
    background-color: #D4D5D1;
    padding: 1rem;
    overflow-wrap: break-word;
  }
`;

export const ColorCirclesWrapper = styled.span`
  display: flex;
  flex-flow: row nowrap;
  gap: 1;
`;
export const Circle = styled.span`
  height: 25px;
  width: 25px;
  background: ${(props) => props.color};

  border-radius: 50%;
`;

export const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #ddd;
  transition: box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;
