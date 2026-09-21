import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, projectType, details } = body;

    // Basic Validation (Backend Level Check)
    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone are required.' },
        { status: 400 }
      );
    }

    // Yahan aap data ko Database (MongoDB, PostgreSQL) me save kar sakti hain
    // Ya email service (Resend, Nodemailer) ke zariye apne email par bhej sakti hain
    console.log('Backend received estimation request:', {
      fullName,
      phone,
      email,
      projectType,
      details,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Estimate request submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error, please try again later.' },
      { status: 500 }
    );
  }
}