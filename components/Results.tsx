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
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&q=80&auto=format&fit=crop",
    imageAlt: "自動車部品製造",
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
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80&auto=format&fit=crop",
    imageAlt: "小売店舗",
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
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80&auto=format&fit=crop",
    imageAlt: "物流倉庫",
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
        <div className="space-y-8">
          {results.map((r) => (
            <div
              key={r.id}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 items-stretch">
                {/* 左：業種イメージ写真 */}
                <div
                  className="relative h-48 md:h-auto md:col-span-1 bg-gray-300"
                  style={{
                    backgroundImage: `url('${r.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* オーバーレイ＋業種ラベル */}
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <p className="text-white/70 text-xs font-bold tracking-widest uppercase">
                      {r.industry}
                    </p>
                    <p className="text-white text-sm font-bold mt-0.5">{r.client}</p>
                  </div>
                  {/* 番号バッジ */}
                  <div className="absolute top-4 left-4 text-4xl font-black text-white/20 leading-none">
                    {r.id}
                  </div>
                </div>

                {/* 右：テキスト＋数値 */}
                <div className="md:col-span-4 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  {/* 本文 */}
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-black text-xl mb-3">{r.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>

                  {/* 数値 */}
                  <div className="flex md:flex-col gap-6 md:gap-6 shrink-0 md:text-right">
                    {r.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-3xl font-black text-brand-red">{m.value}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
