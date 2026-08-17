import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, subject, message, website } = body;

    // Honeypot field for basic spam protection.
    // Real visitors will never see or complete this field.
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Adam Keogh Portfolio <website@adamkeogh.com>",

      to: [
        "gkeogh@gmail.com",
        "adamgkeogh@icloud.com",
      ],

      replyTo: email,

      subject: `Adam Keogh Portfolio: ${subject}`,

      text: `
New message from Adam Keogh's portfolio website

Name: ${name}
Email: ${email}
Company / Organisation: ${company || "Not provided"}

Subject: ${subject}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}