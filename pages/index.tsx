import { useAuthentication } from "../hooks/authentication";
import Head from "next/head";

import Nav from "../components/Nav";
import Slider from "../components/Slider";

export default function Home() {
  const { user } = useAuthentication();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className="container">
          <Slider />
          <p style={{ fontSize: "24px" }}>{user?.uid || "未ログイン"}</p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
