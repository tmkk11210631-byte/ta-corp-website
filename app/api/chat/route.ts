/* チャットボット API：Claude API を使ったストリーミング応答 */
import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/* T.A株式会社のシステムプロンプト */
const SYSTEM_PROMPT = `あなたはT.A株式会社のウェブサイト専任AIアシスタントです。
丁寧で親切な対応を心がけ、お客様のご質問にお答えします。

【会社情報】
- 社名: T.A株式会社
- 事業内容: 製品製造・小売・卸販売・OEM/ODM・アフターサポート
- 所在地: 東京都〇〇区〇〇 1-2-3
- 電話番号: 03-0000-0000
- メール: info@ta-corp.co.jp
- 営業時間: 平日 9:00〜18:00

【料金プラン】
- ライトプラン: ¥50,000/月〜（中小企業・スタートアップ向け）
- スタンダードプラン: ¥100,000/月〜（成長企業向け、最もご好評）
- プレミアムプラン: 要お見積り（大企業・カスタム案件向け）

【対応方針】
- 会社やサービスに関するご質問には詳しくお答えください
- 詳しい相談・お見積りはお問い合わせフォーム（ページ下部の「お問い合わせ」）への誘導を推奨してください
- 回答は簡潔に、2〜4文程度にまとめてください
- 日本語で自然な敬語を使ってください`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    /* メッセージが空の場合はエラー */
    if (!messages || messages.length === 0) {
      return new Response("メッセージが空です", { status: 400 });
    }

    /* Claude API ストリームを先に作成してエラーを早期検出 */
    const messageStream = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages,
      stream: true,
    });

    /* ストリーミングレスポンスの設定 */
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of messageStream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (streamError) {
          console.error("ストリーム読み取りエラー:", streamError);
          controller.error(streamError);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Chat API エラー:", errMsg);
    return new Response(
      "エラーが発生しました。しばらくしてから再度お試しください。",
      { status: 500 }
    );
  }
}
