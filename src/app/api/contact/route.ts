import { NextRequest } from "next/server";
import { mailOptions, transporter } from "@/utils/nodemailer";

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "PORTFOLIO EMAIL: " + subject,
      text: message + " sender: " + email,
    });
    return new Response(JSON.stringify(email), { status: 200 });
  } catch (error) {
    const err = `Error:${error}`;
    console.log(err);
    return new Response(JSON.stringify(err), { status: 500 });
  }
}
