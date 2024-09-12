import NextLink from "next/link";
import styled from 'styled-components';
import { useRouter } from "next/router";

const Root = styled.div`
    height: 60px;
    display: flex;
    background: lightgray
    align-items: center;
    text-align-center;
`;

const Link = styled(NextLink)`
    font-weight: 1.5rem;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;

    &:hover {
        background-color: ${(props) => (props.isActive ? '#333' : 'lightgray')};
        color: ${(props) => (props.isActive ? 'white' : '#333')};
    }

    background-color: ${(props) => (props.isActive ? '#333' : 'lightgray')};
    color: ${(props) => (props.isActive ? 'white' : 'inherit')};
`;


export default function Navigation () {
    const router = useRouter();
    const isActive = (pathname) => router.pathname === pathname;
    return (
        <Root>
            <Link href="/" isActive={isActive('/')}>Spotlight</Link>
            <Link href="/art-pieces" isActive={isActive('/art-pieces')}>Art Pieces</Link>
            <Link href="/favourites" isActive={isActive('/favourites')}>Favourites</Link>
        </Root>
    );
}