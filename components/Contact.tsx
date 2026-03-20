/* お問い合わせセクション：ライトテーマ版 */
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-0.5 bg-brand-red" />
          <p className="text-brand-red text-sm font-bold tracking-[0.3em] uppercase">Contact</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          お問い合わせ
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl">
          ご質問・お見積りのご依頼はこちらからお気軽にどうぞ。通常1〜2営業日以内にご返信いたします。
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* 連絡先情報 */}
          <div className="md:col-span-2 space-y-8">
            {[
              { icon: "📍", label: "所在地", value: "東京都〇〇区〇〇 1-2-3" },
              { icon: "📞", label: "電話番号", value: "03-0000-0000" },
              { icon: "✉️", label: "メール", value: "info@ta-corp.co.jp" },
              { icon: "🕐", label: "営業時間", value: "平日 9:00〜18:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* フォーム */}
          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="border border-brand-gold/30 rounded-lg p-8 text-center bg-white shadow-sm">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-gray-900 font-black text-xl mb-2">送信完了</h3>
                <p className="text-gray-500">
                  お問い合わせありがとうございます。
                  <br />
                  1〜2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* お名前 */}
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">
                    お名前 <span className="text-brand-red">*</span>
                  </label>
                  <input
                    {...register("name", { required: "お名前を入力してください" })}
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors shadow-sm"
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="text-brand-red text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* 会社名 */}
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">会社名</label>
                  <input
                    {...register("company")}
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors shadow-sm"
                    placeholder="株式会社〇〇"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">
                    メールアドレス <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "メールアドレスを入力してください",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "正しいメールアドレスを入力してください",
                      },
                    })}
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors shadow-sm"
                    placeholder="taro@example.com"
                  />
                  {errors.email && (
                    <p className="text-brand-red text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2">
                    お問い合わせ内容 <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    {...register("message", { required: "お問い合わせ内容を入力してください" })}
                    rows={5}
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-gold transition-colors resize-none shadow-sm"
                    placeholder="ご質問・ご要望をお気軽にどうぞ"
                  />
                  {errors.message && (
                    <p className="text-brand-red text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-brand-red text-sm">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-brand-red text-white font-black text-lg rounded hover:bg-red-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-red-100"
                >
                  {status === "sending" ? "送信中..." : "送信する"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
