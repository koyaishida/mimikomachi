import Layout from "../components/layout";
import Style from "../styles/about.module.css";

const RssParser = require("rss-parser");

export default function About({ blogData }) {
  return (
    <Layout>
      <div>
        <h2>店舗情報</h2>
        <p>お店の最新情報はブログでチェック！</p>
        <ul className={Style.listContainer}>
          <h4>店長ブログ</h4>
          <div className={Style.scroll}>
            {blogData.length > 0 ? (
              blogData.map((blog, index) => (
                <li key={index} className={Style.listItem}>
                  <a href={blog.link}>
                    <p>{blog.pubDate.split("T")[0]}</p>
                    <p className={Style.blogTitle}>{blog.title}</p>
                  </a>
                  <p className={Style.border}></p>
                </li>
              ))
            ) : (
              <p>ブログが見つかりません。</p>
            )}
          </div>
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = "https://mimikomachi.hatenablog.com/feed";
  const rssParser = new RssParser();
  let blogData = [];
  await rssParser.parseURL(url).then((feed) => {
    blogData = feed.items;
  });

  return {
    props: {
      blogData,
    },
  };
}
