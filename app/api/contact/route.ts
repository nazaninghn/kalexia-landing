import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Option 1: Send to Telegram Bot
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const telegramMessage = `
🔔 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
💬 Message:
${message}

---
Sent from KALEXIA Landing Page
      `.trim();

      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'HTML',
          }),
        }
      );

      if (!telegramResponse.ok) {
        console.error('Telegram API error:', await telegramResponse.text());
      }
    }

    // Option 2: Send via Resend (if configured)
    // Uncomment and configure if you want to use Resend
    /*
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

    if (RESEND_API_KEY && RECIPIENT_EMAIL) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'KALEXIA <noreply@yourdomain.com>',
          to: [RECIPIENT_EMAIL],
          subject: `New Contact: ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error('Resend API error:', await resendResponse.text());
      }
    }
    */

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
