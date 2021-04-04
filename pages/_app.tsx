import Head from "next/head";
import { RecoilRoot } from "recoil";
import "../lib/firebase";
import "../hooks/authentication";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
