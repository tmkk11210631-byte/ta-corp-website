/* ヒーローセクション：分割レイアウト（左テキスト / 右スライドショー） */
"use client";

import { useState, useEffect } from "react";

/* スライドショー用画像リスト */
const slides = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop",
    label: "製品製造",
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&auto=format&fit=crop",
    label: "製造現場",
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop",
    label: "在庫・物流",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&auto=format&fit=crop",
    label: "お客様との商談",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  /* 5秒ごとに自動切り替え */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* 左側の赤アクセントバー */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-brand-red via-brand-red/60 to-transparent z-10" />

      {/* 薄いグリッドパターン（左半分のみ） */}
      <div
        className="absolute inset-0 opacity-[0.04] md:w-1/2"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 装飾円 */}
      <div className="absolute -top-20 left-20 w-64 h-64 rounded-full bg-brand-red/5 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-0 md:min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

          {/* 左：テキストコンテンツ */}
          <div className="text-center md:text-left">
            {/* プレヘッディング */}
            <p className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-8 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-brand-red" />
              T.A株式会社 — 製造・小売業
            </p>

            {/* メインキャッチコピー */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] mb-6">
              <span className="text-gray-900">安心で、</span>
              <br />
              <span className="text-gold-gradient">頼れるを実現</span>
            </h1>

            {/* サブキャッチコピー */}
            <p className="text-gray-600 text-base md:text-lg font-medium mb-6 leading-relaxed">
              製造・小売のプロフェッショナルが、あなたのそばに。
            </p>

            {/* 説明文 */}
            <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
              高品質な製品と誠実なサービスで、お客様のビジネスを力強くサポートします。T.A株式会社が、あなたの「信頼できるパートナー」になります。
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-14">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold text-base rounded hover:bg-red-700 transition-all duration-200 shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5 text-center"
              >
                無料相談を申し込む
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 border-2 border-gray-800 text-gray-800 font-bold text-base rounded hover:bg-gray-800 hover:text-white transition-all duration-200 text-center"
              >
                サービスを見る
              </a>
            </div>

            {/* 実績数値 */}
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto md:mx-0 pt-8 border-t border-gray-100">
              {[
                { value: "20+", label: "年の実績" },
                { value: "500+", label: "取引企業" },
                { value: "99%", label: "顧客満足度" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-black text-brand-red">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右：スライドショー */}
          <div className="relative h-72 md:h-screen max-h-[700px] rounded-2xl md:rounded-none overflow-hidden bg-gray-200">

            {/* スライド画像（フェードイン/アウト） */}
            {slides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                  backgroundImage: `url('${slide.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: i === current ? 1 : 0,
                }}
              />
            ))}

            {/* 左側に白からのグラデーションオーバーレイ（PC のみ） */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block z-10" />
            {/* 下部に暗いオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

            {/* 現在のスライドラベル */}
            <div className="absolute top-6 right-6 z-20">
              <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded">
                {slides[current].label}
              </span>
            </div>

            {/* ドットインジケーター */}
            <div className="absolute bottom-20 right-6 flex flex-col gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "h-6 bg-white" : "h-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* 画像上のバッジ */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
              <p className="text-xs text-gray-500 mb-0.5">創業</p>
              <p className="text-xl font-black text-gray-900">1995年</p>
              <p className="text-xs text-brand-red font-bold">30年の信頼と実績</p>
            </div>
          </div>

        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hidden md:flex">
        <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
