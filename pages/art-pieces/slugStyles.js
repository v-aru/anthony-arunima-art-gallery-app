import styled from "styled-components";

export const Root = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  ${"" /* flex: 1; */}
  justify-content: space-between;
  ${"" /* justify-content: center; */}
  align-items: center;
  background: ${(props) => {
    return (
      props.colors && `linear-gradient(0.25turn, ${props.colors.join(", ")}) `
    );
  }};
`;
export const StyledBody = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 1rem;
  justify-content: space-between;
  ${"" /* justify-content: center; */}
  align-items: center;
`;
export const CommentsWrapper = styled.section`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
`;
