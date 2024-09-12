import styled from "styled-components";

export const Root = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background: ${(props) =>
    props.colors && `linear-gradient(0.25turn, ${props.colors.join(", ")}) `};
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const Piece = styled.div`
  flex: 1;
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
