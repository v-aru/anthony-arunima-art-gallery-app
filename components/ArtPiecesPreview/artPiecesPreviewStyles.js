import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 2rem;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px; /* Top-right corner */
  right: 10px;
  z-index: 10; /* Ensure the button stays on top of the image */
`;

//TODO: discuss to introduce image style "onHover" so that the Link/Icon gets more visible
// export const ImageWrapper = styled.div`
//   filter: blur(0px);
//   &:hover {
//     filter: blur(4px);
//   }
// `;
export const Caption = styled.div`
  display: flex;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  color: #ccc;
`;
export const ImageInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #ccc;
  background-color: #33343380; /* Overall container styling */
  border: 1px solid #ccc; /* Subtle border */
  padding: 15px;
  margin-top: 10px; /* Space above the box */
  font-family: sans-serif;
`;
export const FlowingText = styled.p`
  margin: 0;
  padding: 0;
`;
export const LinkWrapper = styled.div`
  z-index: 10;
  width: 100%;
  ${"" /* height: fit-content; */}
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
    background-color: #33343380;
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

