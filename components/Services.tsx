/* サービスセクション：ライトテーマ版 */
const services = [
  {
    icon: "🏭",
    title: "製品製造",
    desc: "最先端の設備と熟練の技術者が、高品質な製品を安定的に製造します。小ロット・大ロットどちらにも対応。",
    tags: ["品質管理", "小ロット対応", "カスタム製造"],
  },
  {
    icon: "🛒",
    title: "小売・卸販売",
    desc: "全国の販売網を通じて、製品を迅速かつ確実にお届けします。法人・個人どちらにも柔軟に対応。",
    tags: ["全国配送", "法人対応", "ロット販売"],
  },
  {
    icon: "🔧",
    title: "アフターサポート",
    desc: "購入後もお客様に安心いただけるよう、専任チームが迅速なアフターサービスを提供します。",
    tags: ["24h対応", "修理・交換", "定期点検"],
  },
  {
    icon: "📦",
    title: "OEM・ODM",
    desc: "お客様のブランドで製品を供給するOEM、企画段階から参加するODMにも対応しています。",
    tags: ["OEM", "ODM", "ブランド対応"],
  },
  {
    icon: "🌐",
    title: "海外調達",
    desc: "グローバルネットワークを活かし、高品質な素材・部品を競争力のある価格で調達します。",
    tags: ["輸出入", "コスト削減", "グローバル対応"],
  },
  {
    icon: "📊",
    title: "在庫・物流管理",
    desc: "最適な在庫水準の維持と効率的な物流管理で、コスト削減とリードタイム短縮を実現します。",
    tags: ["SCM", "在庫最適化", "物流効率化"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-0.5 bg-brand-gold" />
          <p className="text-brand-gold text-sm font-bold tracking-[0.3em] uppercase">Services</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          サービス・製品紹介
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl">
          T.A株式会社が提供する幅広いサービスで、お客様のあらゆるニーズにお応えします。
        </p>

        {/* カードグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group border border-gray-100 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-gray-900 font-bold text-xl mb-3 group-hover:text-brand-red transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded border border-brand-gold/40 text-brand-gold/80 bg-brand-gold/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
