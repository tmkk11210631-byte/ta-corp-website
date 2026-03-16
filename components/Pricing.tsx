/* 料金プランセクション：ライトテーマ版 */
const plans = [
  {
    name: "ライト",
    price: "要お見積り",
    priceNote: "小ロット向け",
    features: [
      "最小ロット 100個〜",
      "標準品ラインナップから選択",
      "納期：通常3〜4週間",
      "メールサポート",
      "品質保証書付き",
    ],
    cta: "お問い合わせ",
    highlight: false,
  },
  {
    name: "スタンダード",
    price: "要お見積り",
    priceNote: "中ロット・最人気",
    features: [
      "最小ロット 500個〜",
      "カスタム仕様対応",
      "納期：通常2〜3週間",
      "電話・メールサポート",
      "品質保証書付き",
      "専任担当者アサイン",
    ],
    cta: "お問い合わせ",
    highlight: true,
  },
  {
    name: "プレミアム",
    price: "要お見積り",
    priceNote: "大ロット・OEM対応",
    features: [
      "ロット数・仕様 完全カスタム",
      "OEM / ODM 対応",
      "優先納期対応",
      "24時間サポート",
      "品質保証書付き",
      "専任担当者アサイン",
      "在庫管理・物流代行",
    ],
    cta: "お問い合わせ",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-0.5 bg-brand-red" />
          <p className="text-brand-red text-sm font-bold tracking-[0.3em] uppercase">Pricing</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          料金プラン
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl">
          発注規模・ご要望に合わせたプランをご用意しています。詳細はお気軽にご相談ください。
        </p>

        {/* プランカード */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-8 flex flex-col bg-white ${
                plan.highlight
                  ? "border-2 border-brand-gold shadow-xl shadow-brand-gold/10"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {/* 人気バッジ */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 gold-gradient text-white text-xs font-black rounded-full shadow">
                    最人気
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-black mb-1 ${
                    plan.highlight ? "text-brand-gold" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm">{plan.priceNote}</p>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-black text-gray-900">{plan.price}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded font-bold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "gold-gradient text-white hover:opacity-90 shadow-md"
                    : "border border-gray-200 text-gray-700 hover:border-brand-gold hover:text-brand-gold"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          ※ 価格は発注数・仕様・納期により異なります。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
