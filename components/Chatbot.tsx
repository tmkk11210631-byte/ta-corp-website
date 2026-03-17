/* チャットボット：右下フローティングウィジェット */
"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  /* チャットウィンドウの開閉状態 */
  const [isOpen, setIsOpen] = useState(false);
  /* メッセージ履歴 */
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "こんにちは！T.A株式会社のAIアシスタントです。サービスや料金など、何でもお気軽にご質問ください。",
    },
  ]);
  /* 入力テキスト */
  const [input, setInput] = useState("");
  /* 送信中フラグ */
  const [isLoading, setIsLoading] = useState(false);
  /* メッセージ末尾への自動スクロール用 */
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* 新しいメッセージが追加されたら末尾にスクロール */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* メッセージ送信処理 */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    /* アシスタントのプレースホルダーを追加してストリーミング中に更新 */
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "" },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          /* API に送るのはシステムプロンプト以外の会話履歴 */
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("APIエラー");
      }

      /* ストリーミングでテキストを受信し、最後のメッセージを更新 */
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: accumulated,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "申し訳ございません。エラーが発生しました。しばらくしてから再度お試しください。",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* チャットウィンドウ */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* ヘッダー */}
          <div className="bg-brand-red px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* アバターアイコン */}
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-black">
                T
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  T.A株式会社 AIアシスタント
                </p>
                <p className="text-red-100 text-xs">
                  {isLoading ? "入力中..." : "オンライン"}
                </p>
              </div>
            </div>
            {/* 閉じるボタン */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="チャットを閉じる"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* メッセージ一覧 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ height: "360px" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-brand-red text-white rounded-br-sm"
                      : "bg-white text-gray-700 rounded-bl-sm shadow-sm border border-gray-100"
                  }`}
                >
                  {/* ストリーミング中の空メッセージにはローディングアニメーション */}
                  {msg.content === "" && msg.role === "assistant" ? (
                    <span className="flex gap-1 items-center py-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    </span>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* 入力フォーム */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-100"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="メッセージを入力..."
              disabled={isLoading}
              className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-brand-red transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-9 h-9 bg-brand-red text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              aria-label="送信"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* フローティングボタン */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-gray-700 hover:bg-gray-800 rotate-0"
            : "bg-brand-red hover:bg-red-700"
        }`}
        aria-label={isOpen ? "チャットを閉じる" : "チャットを開く"}
      >
        {isOpen ? (
          /* 閉じるアイコン */
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* チャットアイコン */
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </>
  );
}
