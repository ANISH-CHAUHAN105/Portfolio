import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // Replace with a verified domain email
      to: "canish005@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Resend Response:", response); // Debugging

    return NextResponse.json(
      { success: "Message sent successfully!", response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
