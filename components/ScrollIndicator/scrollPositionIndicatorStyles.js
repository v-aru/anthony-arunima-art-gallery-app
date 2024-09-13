import styled from "styled-components";

export const StyledScrollIndicator = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: lightblue;
`;
export const ProgressContainer = styled.div`
  background-color: #eee;
  border-radius: 5px;
  width: 100%;
  height: 10px;
`;

export const ProgressBar = styled.div`
  background-color: #4caf50;
  border-radius: 5px;
  height: 100%;
  width: ${(props) => props.width};

  transition: width 50 ease-in-out;
`;
