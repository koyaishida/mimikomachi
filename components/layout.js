import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "みみ小町";

const pageList = [
  { name: "コース案内", path: "./" },
  { name: "お店紹介", path: "./about" },
  { name: "アクセス", path: "./access" },
  { name: "スタッフ募集", path: "./recruit" },
];

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="みみ小町は岐阜県で唯一の耳かき専門店です。耳かきとハンドリフレを中心に究極の癒しをご堪能頂けます。"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img
              src="/images/main.jpg"
              className={styles.headerImage}
              alt={""}
            />
          </a>
        </Link>
        <div className={styles.headerMenu}>
          {pageList.map((page, index) => (
            <div key={index}>
              <Link href={page.path}>
                <a className={styles.headerTitle}>{page.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <h5>営業時間：平日１８時〜２２時（最終受付）</h5>
        <h5>定休日：不定休</h5>
        <h5>住所：岐阜県岐阜市日野西３丁目３ー１６</h5>
        <h5>連作先：０８０-７５３０-２１４５</h5>
      </footer>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← ホームへ戻る</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
