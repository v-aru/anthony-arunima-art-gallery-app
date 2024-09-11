import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import styled from "styled-components";

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
  const { data, error, isLoading } = useSWR(URL, fetcher);
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
          <Component {...pageProps} data={data} />
        </Layout>
      </SWRConfig>
    </>
  );
}
