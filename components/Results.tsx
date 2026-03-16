/* 実績セクション：ライトテーマ版 */
const results = [
  {
    id: "01",
    client: "株式会社サンプル製造",
    industry: "自動車部品製造",
    title: "部品調達コストを30%削減",
    desc: "海外調達ネットワークを活用し、従来の国内仕入れから最適化した調達体制に切り替え。品質を維持しながら大幅なコスト削減を実現しました。",
    metrics: [
      { label: "コスト削減", value: "30%" },
      { label: "納期短縮", value: "2週間" },
    ],
  },
  {
    id: "02",
    client: "△△小売チェーン",
    industry: "生活用品小売",
    title: "PB商品ラインナップを3ヶ月で立ち上げ",
    desc: "OEM製造から物流・店頭納品まで一括で担当。短期間でのPBブランド立ち上げを全面サポートし、初年度から黒字化を達成しました。",
    metrics: [
      { label: "立ち上げ期間", value: "3ヶ月" },
      { label: "初年度黒字化", value: "達成" },
    ],
  },
  {
    id: "03",
    client: "〇〇商事株式会社",
    industry: "輸出入・商社",
    title: "在庫回転率を2倍に改善",
    desc: "SCM最適化コンサルティングと倉庫管理システムの導入により、滞留在庫を解消。キャッシュフロー改善と顧客への供給安定を同時に達成。",
    metrics: [
      { label: "在庫回転率", value: "×2" },
      { label: "欠品率", value: "0.3%以下" },
    ],
  },
];

export default function Results() {
  return (
    <section id="results" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-0.5 bg-brand-gold" />
          <p className="text-brand-gold text-sm font-bold tracking-[0.3em] uppercase">Results</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          実績紹介
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl">
          T.A株式会社がお客様にもたらした、具体的な成果をご紹介します。
        </p>

        {/* 実績カード */}
        <div className="space-y-6">
          {results.map((r) => (
            <div
              key={r.id}
              className="border border-gray-100 rounded-lg p-8 bg-white shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 grid md:grid-cols-4 gap-6 items-start"
            >
              {/* 番号・業種 */}
              <div className="md:col-span-1">
                <div className="text-6xl font-black text-brand-gold/20 leading-none">{r.id}</div>
                <p className="text-brand-red text-xs font-bold tracking-widest mt-2 uppercase">
                  {r.industry}
                </p>
                <p className="text-gray-400 text-sm mt-1">{r.client}</p>
              </div>

              {/* 本文 */}
              <div className="md:col-span-2">
                <h3 className="text-gray-900 font-black text-xl mb-3">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>

              {/* 数値 */}
              <div className="md:col-span-1 flex md:flex-col gap-4 md:gap-6">
                {r.metrics.map((m) => (
                  <div key={m.label} className="text-center md:text-right">
                    <p className="text-3xl font-black text-brand-gold">{m.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
