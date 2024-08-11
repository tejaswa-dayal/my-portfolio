import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.SMTP_Email;
const pass = process.env.SMTP_Password;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: process.env.NODE_ENV !== "development",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: user,
      subject: `${name.trim().split(" ")[0]} message on portfolio.`,
      text: `From: ${name}
Email: ${email}
Message: ${message}
`,
    };

    const result = await transporter.sendMail(mailOptions);
    return NextResponse.json("Mail sent successfully.");
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to send message.", { status: 500 });
  }
}
