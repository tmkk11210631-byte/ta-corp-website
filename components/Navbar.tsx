"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "会社概要" },
  { href: "#services", label: "サービス" },
  { href: "#pricing", label: "料金" },
  { href: "#results", label: "実績" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <a href="#" className="text-2xl font-black tracking-widest text-gold-gradient">
          T.A株式会社
        </a>

        {/* デスクトップリンク */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2 bg-brand-red text-white text-sm font-bold rounded hover:bg-red-700 transition-colors"
            >
              無料相談
            </a>
          </li>
        </ul>

        {/* モバイルハンバーガー */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      </nav>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-gray-700 hover:text-brand-red font-medium py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block text-center px-5 py-2 bg-brand-red text-white text-sm font-bold rounded"
                onClick={() => setMenuOpen(false)}
              >
                無料相談
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
