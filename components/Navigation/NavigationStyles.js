import styled from "styled-components";
import NextLink from "next/link";

export const Root = styled.div`
    height: 60px;
    display: flex;
    background: lightgray
    align-items: center;
    text-align-center;
    border-radius: 18px;
`;

export const Link = styled(NextLink)`
    font-weight: 1.5rem;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;

    &:hover {
        background-color: ${(props) => (props.isActive ? '#8C92AD' : '#C7CCDB')};
        color: ${(props) => (props.isActive ? 'white' : '#484B57')};
    }

    background-color: ${(props) => (props.isActive ? '#9096B4' : '#2A324B')};
    color: ${(props) => (props.isActive ? '#484B57' : 'white')};
`;