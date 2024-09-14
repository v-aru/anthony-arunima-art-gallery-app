import styled from "styled-components";

export const StyledFormAddComment = styled.section`
  ${
    "" /* position: absolute;
  bottom: 4rem; */
  }
  ${"" /* width: 35ch; */}
  ${"" /* height: 3rem; */}
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #888;
`;
export const TextArea = styled.textarea`
  width: 100%;
  min-width: 45ch;
  max-width: 45ch;
  height: 100%;
  color: black;
  border-radius: 5px;
  padding: 0.5rem;
`;
export const FormAddCommentFooter = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
`;

export const Button = styled.button``;
