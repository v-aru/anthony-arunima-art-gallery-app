import styled from "styled-components";

export const StyledCommentWrapper = styled.li`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;
  color: white;
  background-color: #444;
`;
export const StyledCommentHeader = styled.h6`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: white;
  ${"" /* background-color: #888; */}
`;
export const StyledAvatar = styled.span`
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  border-radius: 50%;
  background-color: #000;
`;
export const StyledUserDisplayName = styled.p`
  width: 100%;
  font-size: 1rem;
  padding-left: 1rem;
`;
export const StyledCommentFooter = styled.p`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 0.8rem;
`;
