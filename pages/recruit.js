import Layout from "../components/layout";
import Style from "../styles/recruit.module.css";

export default function Recruit() {
  return (
    <Layout>
      <div className={Style.description}>
        <h2>採用情報</h2>
        <p>
          学生さん、フリーターの方や、主婦の方や、 <br />
          お仕事帰りのWワークにも最適で、
          <br />
          空いた時間を使って効率よく高収入を稼げます。
          心温まる癒し処…。そんなお店を一緒に作りましょう♪
        </p>
        <p>
          お仕事内容は耳かきとハンドリフレが主になり, <br />
          NO風俗店で資格必要なし、
          <br />
          誰にでも覚えられる簡単なお仕事です。
        </p>
        <p>
          人と接するのが好きな方、お話し好きな方、
          <br />
          世話好きな方、耳かきが好きな方、
          <br />
          どれか一つでも当てはまればOKです。
        </p>
        <p>
          まずはご応募いただき、面接時に仕事内容、 <br />
          待遇面について一通りの説明をします。
          その後ベテランの優しい女性指導者から、 <br />
          講習を経て実務にあたって頂きます。
        </p>
      </div>
      <div className={Style.container}>
        <div>
          <h3>募集要項</h3>
          <h4>給与</h4>
          <p>完全出来高制 ※最低保証有り (時給3,000円以上可)</p>
        </div>
        <div>
          <h4>採用条件</h4>
          <p>癒しに興味がある方明るく挨拶のできる方</p>
        </div>
        <div>
          <h4>待遇</h4>
          <p>
            週１OK / 初心者OK / 短期バイトOK / 経験者優遇 / 友達と応募可 /
            かけもち可 / 茶髪OK / 浴衣支給/駐車場あり/交通費支給
          </p>
        </div>
        <div>
          <h4>応募資格</h4>
          <p>
            19歳～45歳くらい迄の方（未経験者歓迎、経験者優遇）【高校生不可】リラクゼーション関係有資格者優遇※未経験の方もOK！
          </p>
        </div>
        <div>
          <h4>勤務地</h4>
          <p>岐阜市日野西</p>
        </div>
        <div>
          <h4>時間</h4>
          <p>
            １５時〜２１時(最終受付) 日曜定休
            ※上記時間内の希望シフト制
          </p>
        </div>
        <div>
          <h4>雇用形態</h4>
          <p>
            パート・アルバイト・短期アルバイト・長期アルバイト・店長候補・受付スタッフ
          </p>
        </div>
      </div>
    </Layout>
  );
}
