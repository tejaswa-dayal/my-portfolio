
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
            to: email,
            subject: "Thank You for Reaching Out!",
            text: `Hi ${name.trim().split(' ')[0]},

Thank you for getting in touch through my portfolio! I appreciate your interest and will get back to you shortly.

In the meantime, if you have any further details or questions, feel free to reply to this email.

Looking forward to connecting with you!

Best regards,
Tejaswa Dayal`,
          };
          
          const result = await transporter.sendMail(mailOptions);
          return NextResponse.json("Mail sent successfully.");
          
    } catch (error) {
      return new NextResponse("Failed to send message.", { status: 500 })
    }
  }