import { useAuthentication } from "../hooks/authentication";
import Head from "next/head";

import Header from "../components/Header";
import styles from "../styles/components/line.module.scss";

export default function Home() {
  const { user } = useAuthentication();

  const lines = [
    {
      date: "20210404",
      content: "若しも貴方が妾に裏切るやうな事があれば、妾は屹度貴方を殺さずには置きませんよ",
    },
    {
      date: "20210405",
      content: "山車屋台だしやたいに町々の見得をはりて土手をのぼりて廓内なかまでも入込いりこまんづ勢ひ",
    },
    {
      date: "20210401",
      content: "己おれの為する事は乱暴だと人がいふ、乱暴かも知れないが口惜くやしい事は口惜しいや、なあ聞いとくれ信さん",
    },
    {
      date: "20210104",
      content: "向ふの奴が漢語か何かで冷語ひやかしでも言つたら、此方こつちも漢語で仕かへしておくれ",
    },
    {
      date: "20210306",
      content: "閉ぢたるまゝの大門は何年いつぞやの暴風雨あらしをさながら、今にも覆へらんさま危ふく",
    },
    {
      date: "20200924",
      content: "今いまは亡うせたる傘屋かさやの先代せんだいに太ふとつ腹ぱらのお松まつとて一代いちだいに身上しんじやうをあげたる",
    },
    {
      date: "20201204",
      content: "何処どこやら釈しやくといひたげの素振そぶりなり",
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="container">
          <ul>
            {lines.map((line) => (
              <li key={line.date} className={styles.line}>
                <span className={styles.date}>{line.date}</span>
                <span className={styles.content}>{line.content}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "12px" }}>{user?.uid || "未ログイン"}</p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
