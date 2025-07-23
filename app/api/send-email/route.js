// app/api/send-email/route.js or route.ts (for TS)

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { phone } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Electrovese" <charanjeet@electrovese.in>`,
      to: 'rakeshkelectrovese@gmail.com',
      subject: 'New Lead from Website',
      text: `Phone number: ${phone}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email send failed:', error);
    return new Response(JSON.stringify({ success: false, error: 'Email failed to send' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
