import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const LoadingWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 48px;
  color: #888;
`;

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPieceInFocusId, setArtPieceInFocusId] = useState(null); //FIX: discuss if "Id" should be renamed to "slug"
  const [artPieceInFocus, setArtPieceInFocus] = useState(null); //TODO: Remove setArtPieceInFocus and refactor useState to simple "const"?

  const { data, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    const handleSetArtPieceInFocus = () => {
      const artPiece = data.find((piece) => piece.slug === artPieceInFocusId);
      setArtPieceInFocus(artPiece);
    };
    if (!isLoading && !error) {
      handleSetArtPieceInFocus();
    }
  }, [data, artPieceInFocusId, isLoading, error]);

  if (error) {
    return <div>An error occurred. Please try again!</div>;
  }
  if (isLoading) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component
            {...pageProps}
            data={data}
            artPieceInFocus={artPieceInFocus}
            setArtPieceInFocusId={setArtPieceInFocusId}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
