import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const Root = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Body = styled.main`
  flex: 1;
  overflow: hidden;
`;

export default function Layout({ children }) {
  return (
    <Root>
      <Body>{children}</Body>
      <Navigation />
    </Root>
  );
}
