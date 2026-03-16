import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// next/font でフォントを最適化読み込み（@import 不要）
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "T.A株式会社 | 安心で、頼れるを実現",
  description: "T.A株式会社は製造・小売業として、高品質な製品とサービスをお届けします。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
