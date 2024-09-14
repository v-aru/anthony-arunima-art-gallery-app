import styled from "styled-components";

export const StyledCommentsList = styled.ul`
  width: 100%;
  max-width: 32ch;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: transparent;
  overflow: scroll;
  ${"" /* padding: 1rem; */}
  gap: 1rem;
`;
