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

    console.log('Sending to Web3Forms with key:', WEB3FORMS_ACCESS_KEY);

    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      message: message,
      subject: `New Contact from KLEXAI Landing - ${name}`,
    };

    console.log('Form data:', formData);

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Web3Forms response status:', web3formsResponse.status);
    const responseText = await web3formsResponse.text();
    console.log('Web3Forms response:', responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Web3Forms response:', responseText);
      return NextResponse.json(
        { error: 'Email service error. Please try again.' },
        { status: 500 }
      );
    }

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
