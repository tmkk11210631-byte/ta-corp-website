import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, company, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
  }

  // NOTE: 本番環境では環境変数 SMTP_HOST, SMTP_USER, SMTP_PASS を設定してください
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"T.A株式会社 お問い合わせ" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
    replyTo: email,
    subject: `【お問い合わせ】${name} 様より`,
    text: `
お名前: ${name}
会社名: ${company || "未記入"}
メール: ${email}

【お問い合わせ内容】
${message}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("メール送信エラー:", err);
    return NextResponse.json({ error: "メール送信に失敗しました" }, { status: 500 });
  }
}
