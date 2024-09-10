import Link from "next/link";
import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
