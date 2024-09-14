import styled from "styled-components";

export const StyledFormAddComment = styled.section`
  ${"" /* width: 40ch; */}
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: 1px solid #ddd;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
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
