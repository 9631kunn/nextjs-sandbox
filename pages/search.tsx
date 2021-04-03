import { useAuthentication } from "../hooks/authentication";
import Head from "next/head";

import SwiperCard from "../components/search/SwipeCard";

export default function Search() {
  const { user } = useAuthentication();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SwiperCard />
      </main>

      <footer></footer>
    </>
  );
}
