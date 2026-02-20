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

    // Send via Web3Forms
    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error('Web3Forms Access Key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        message: message,
        subject: `New Contact from KLEXAI Landing - ${name}`,
        from_name: 'KLEXAI Landing Page',
      }),
    });

    const result = await web3formsResponse.json();

    if (!web3formsResponse.ok || !result.success) {
      console.error('Web3Forms API error:', result);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

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
