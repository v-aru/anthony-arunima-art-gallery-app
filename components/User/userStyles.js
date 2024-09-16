import styled from "styled-components";

export const StyledUserWrapper = styled.li`
  width: 100%;
  height: fit-content;
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

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;
export const StyledUserHeader = styled.h6`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 0;
  margin: 0;
`;
