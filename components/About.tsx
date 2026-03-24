/* Aboutセクション：ライトテーマ版 */
const values = [
  {
    title: "品質へのこだわり",
    desc: "妥協のない製品品質を追求し、お客様に最高の価値をお届けします。",
    num: "01",
  },
  {
    title: "誠実な対応",
    desc: "誠実さを軸に、長期的な信頼関係を築くことを大切にしています。",
    num: "02",
  },
  {
    title: "迅速な対応力",
    desc: "お客様のニーズに素早く応え、スピーディーな解決を提供します。",
    num: "03",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-0.5 bg-brand-red" />
          <p className="text-brand-red text-sm font-bold tracking-[0.3em] uppercase">About Us</p>
        </div>

        {/* 大見出し */}
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 md:mb-16 leading-tight">
          T.A株式会社<br />
          <span className="text-gold-gradient">について</span>
        </h2>

        {/* 会社・現場イメージ写真 */}
        <div
          className="relative h-56 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg bg-gray-300"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs font-bold tracking-widest opacity-70 uppercase mb-1">Since 1995</p>
            <p className="text-xl md:text-2xl font-black">確かな品質と誠実な対応</p>
          </div>
        </div>

        {/* 上段：本文 + 代表メッセージ */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">

          {/* Left: 本文 */}
          <div className="space-y-5">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              1995年の創業以来、製造・小売業を通じてお客様の生活とビジネスを支えてまいりました。確かな品質と誠実なサービスを軸に、時代の変化に対応しながら成長を続けています。
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              「安心で、頼れる」という理念のもと、すべての製品・サービスに全力を注いでいます。私たちはお客様の成功が、私たちの成功だと信じています。
            </p>
          </div>

          {/* Right: 代表メッセージ */}
          <div className="relative bg-white rounded-2xl p-6 md:p-8 border-l-4 border-brand-gold shadow-lg shadow-gray-100">
            {/* 大きな装飾引用符 */}
            <span className="absolute top-4 right-6 text-8xl text-brand-gold/10 font-serif leading-none select-none">
              "
            </span>
            <blockquote className="text-gray-900 text-base md:text-xl font-bold leading-relaxed mb-6 relative z-10">
              お客様の信頼があってこそ、<br className="md:hidden" />
              私たちは存在できる。
            </blockquote>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              その信念を胸に、社員一丸となって高みを目指し続けます。
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-gold/10 border border-brand-gold/40 flex items-center justify-center shrink-0">
                <span className="text-brand-gold font-black">代</span>
              </div>
              <div>
                <p className="text-gray-900 font-black text-lg">淺沼 天弘</p>
                <p className="text-brand-gold text-sm">代表取締役社長 / T.A株式会社</p>
              </div>
            </div>
          </div>
        </div>

        {/* 下段：3つの価値観カード */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* 背景の大きな番号 */}
              <span className="absolute bottom-4 right-4 text-7xl font-black text-gray-100 leading-none select-none group-hover:text-brand-gold/15 transition-colors">
                {v.num}
              </span>
              {/* ゴールドライン */}
              <div className="w-8 h-1 bg-brand-gold rounded mb-6" />
              <h4 className="text-gray-900 font-black text-xl mb-3 group-hover:text-brand-red transition-colors">
                {v.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
