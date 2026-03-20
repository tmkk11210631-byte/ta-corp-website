/* ヒーローセクション：ライトテーマ版 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 背景の薄いグリッドパターン（清潔感・誠実さの演出） */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* 装飾円 */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-gold/5 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-brand-red/5 pointer-events-none" />

      {/* 左側の赤アクセントバー */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-brand-red via-brand-red/60 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-10 md:px-20 py-32 text-center">
        {/* プレヘッディング */}
        <p className="text-brand-red text-sm font-bold tracking-[0.3em] uppercase mb-10">
          T.A株式会社 — 製造・小売業
        </p>

        {/* メインキャッチコピー */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[1.1] mb-8">
          <span className="text-gray-900">安心で、</span>
          <br />
          <span className="text-gold-gradient">頼れるを実現</span>
        </h1>

        {/* サブキャッチコピー */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-brand-gold/60 shrink-0 hidden sm:block" />
          <p className="text-gray-700 text-sm sm:text-xl md:text-2xl font-bold tracking-wide">
            製造・小売のプロフェッショナルが、あなたのそばに。
          </p>
          <div className="h-px w-8 bg-brand-gold/60 shrink-0 hidden sm:block" />
        </div>

        {/* 説明文 */}
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed md:leading-loose">
          高品質な製品と誠実なサービスで、お客様のビジネスを力強くサポートします。T.A株式会社が、あなたの「信頼できるパートナー」になります。
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-10 py-4 bg-brand-red text-white font-bold text-lg rounded hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5"
          >
            無料相談を申し込む
          </a>
          <a
            href="#services"
            className="px-10 py-4 border-2 border-gray-800 text-gray-800 font-bold text-lg rounded hover:bg-gray-800 hover:text-white transition-all duration-200"
          >
            サービスを見る
          </a>
        </div>

        {/* 実績数値 */}
        <div className="mt-24 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "20+", label: "年の実績" },
            { value: "500+", label: "取引企業" },
            { value: "99%", label: "顧客満足度" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-brand-gold">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
