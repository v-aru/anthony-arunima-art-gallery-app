import styled from "styled-components";
export const Root = styled.section`
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background: ${(props) =>
    props.colors &&
    `linear-gradient(${props.movement}turn, ${props.colors.join(", ")}) `};
  justify-content: center;
  align-items: center;
`;

export const Piece = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
`;

export const Artist = styled.div`
  width: 300px;
  text-align: center;
  height: 100%;
  padding: 1rem;
  color: black;
`;
