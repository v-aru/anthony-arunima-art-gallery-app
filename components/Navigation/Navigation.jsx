import NextLink from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Root = styled.div`
  height: 60px;
  display: flex;
  background: lightgray;
  align-items: center;
  text-align: center;
  border-radius: 18px;
`;

const Link = styled(NextLink)`
  font-size: 1.4rem;
  font-weight: 300;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;

  font-family: "Roboto-Thin", sans-serif;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#8C92AD" : "#C7CCDB")};
    color: ${(props) => (props.isActive ? "white" : "#484B57")};
  }

  background-color: ${(props) => (props.isActive ? "#9096B4" : "#2A324B")};
  color: ${(props) => (props.isActive ? "#484B57" : "white")};
`;

export default function Navigation() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  return (
    <Root>
      <Link href="/" isActive={isActive("/")}>
        Spotlight
      </Link>
      <Link href="/art-pieces" isActive={isActive("/art-pieces")}>
        Art Pieces
      </Link>
      <Link href="/favourites" isActive={isActive("/favourites")}>
        Favourites
      </Link>
    </Root>
  );
}
