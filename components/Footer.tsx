/* フッター：4カラム構成（ロゴ列 + ナビ3列）ダークフッター */

const footerLinks = [
  {
    heading: "サービス",
    links: [
      { label: "製品製造", href: "#services" },
      { label: "小売・卸販売", href: "#services" },
      { label: "OEM・ODM", href: "#services" },
      { label: "アフターサポート", href: "#services" },
    ],
  },
  {
    heading: "会社情報",
    links: [
      { label: "会社概要", href: "#about" },
      { label: "代表メッセージ", href: "#about" },
      { label: "料金プラン", href: "#pricing" },
      { label: "実績紹介", href: "#results" },
    ],
  },
  {
    heading: "お問い合わせ",
    links: [
      { label: "無料相談を申し込む", href: "#contact" },
      { label: "お見積り依頼", href: "#contact" },
      { label: "03-0000-0000", href: "tel:0300000000" },
      { label: "平日 9:00〜18:00", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-brand-gold/20">
      {/* 上部：4カラムグリッド */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 第1列：ロゴ＋キャッチコピー */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <p className="text-gold-gradient font-black text-2xl tracking-widest">
                T.A株式会社
              </p>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              安心で、頼れるを実現。
              <br />
              製造・小売業のプロフェッショナルとして、
              お客様のビジネスを支えます。
            </p>
            {/* ゴールドアクセントライン */}
            <div className="w-12 h-0.5 bg-brand-gold" />
          </div>

          {/* 第2〜4列：ナビリンク */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              {/* 列見出し */}
              <h4 className="text-white font-black text-sm tracking-[0.2em] uppercase mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-brand-gold transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 下部：コピーライトバー */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {year} T.A株式会社. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
