import { useAuthentication } from "../hooks/authentication";
import Head from "next/head";

export default function Home() {
  const { user } = useAuthentication();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <p style={{ fontSize: "12px" }}>{user?.uid || "未ログイン"}</p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
