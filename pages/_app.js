import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FavouritesProvider } from "../components/Favourites/FavouritesContext.js";
import { CommentsProvider } from "../components/CommentsList/CommentsContext";

import { UsersProvider } from "@/components/UsersList/UsersContext";

import "../globalStyles.css"; // Adjust the path if needed

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
  const [artPieceInFocus, setArtPieceInFocus] = useState(null); //TODO: Remove setArtPieceInFocus and refactor useState to simple "const"?

  const { data, error, isLoading } = useSWR(URL, fetcher);

  const handleSetArtPieceInFocus = (slug) => {
    if (slug === artPieceInFocus?.slug) {
      setArtPieceInFocus(null);
    } else {
      const artPiece = data.find((piece) => piece.slug === slug);
      setArtPieceInFocus(artPiece);
    }
  };
  useEffect(() => {
    if (!isLoading && !error) {
      handleSetArtPieceInFocus();
    }
  }, [data, isLoading, error]);

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
        <UsersProvider>
          <FavouritesProvider>
            <CommentsProvider>
              <Layout>
                <Component
                  {...pageProps}
                  data={data}
                  artPieceInFocus={artPieceInFocus}
                  onSetArtPieceInFocus={handleSetArtPieceInFocus}
                />
              </Layout>
            </CommentsProvider>
          </FavouritesProvider>
        </UsersProvider>
      </SWRConfig>
    </>
  );
}
