import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.wrap}>
        <h2>システム・料金のご案内</h2>
        <p>御来店の際は、事前にご予約をお願い致します。</p>
        <p>※ 当店は風俗店では御座いません。</p>
        <div className={utilStyles.imageWrap}>
          <img src="./images/menu.jpeg" className={utilStyles.image} />
        </div>
        <div>
          <h4>注意事項・規約</h4>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>当店は会員制の為、簡単な会員登録が必要となります。</p>
          </div>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>店内での大声での会話は禁止です。</p>
          </div>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>
              店内での私物・貴重品の紛失に関しては、当店では責任を負いかねます。
            </p>
          </div>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>泥酔状態や体調不良での入店は禁止です。</p>
          </div>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>耳に疾患がある場合は、入店をお断り致します。</p>
          </div>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>
              女の子に触れる事やセクハラてき言動や嫌がる行為は即退店して頂きます。
            </p>
          </div>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>反社会的勢力と関わりのあるかたは入店できません。</p>
          </div>
          <div className={utilStyles.flex}>
            <p>・</p>
            <p>
              スタッフや女の子の指示に従って頂けない場合や、
              他のお客様の迷惑となる行為があった場合には、
              即退店して頂きます。その場合の返金は行いません。
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
