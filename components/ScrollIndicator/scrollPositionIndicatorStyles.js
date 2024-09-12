import styled from "styled-components";

export const StyledScrollIndicator = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  ${"" /* background-color: #f1f1f1; */}
  background-color: lightblue;
`;
export const ProgressContainer = styled.div`
  /* Your existing CSS styles for the progress-container */
  background-color: #eee;
  border-radius: 5px;
  width: 100%; /* Adjust as needed */
  height: 10px;
`;

export const ProgressBar = styled.div`
  /* Your existing CSS styles for the progress-bar */
  background-color: #4caf50;
  border-radius: 5px;
  height: 100%;
  width: ${(props) => props.width};

  transition: width 50 ease-in-out; /* Smooth transition */
`;
