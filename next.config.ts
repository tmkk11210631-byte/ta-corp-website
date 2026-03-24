import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Unsplash など外部画像を next/image で使用するためのドメイン設定 */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
