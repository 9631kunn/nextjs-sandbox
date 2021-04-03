import { useAuthentication } from "../hooks/authentication";
import Head from "next/head";

import FirstView from "../components/FirstView";
import Nav from "../components/Nav";

export default function Home() {
  const { user } = useAuthentication();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstView />
      <Nav />
      <main>
        <div className="container">
          <p style={{ fontSize: "12px" }}>{user?.uid || "未ログイン"}</p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
