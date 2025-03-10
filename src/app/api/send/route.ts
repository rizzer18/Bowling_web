import { transport } from "@/components/modemailer/nodemailer";
import { MailSend } from "@/interfaces/mailSend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data: MailSend = await req.json();

    if (
      !data.date ||
      !data.email ||
      !data.fullname ||
      !data.souhlas ||
      !data.osob ||
      !data.telefon ||
      !data.tema
    ) {
      return NextResponse.json({ message: "Bad reqest" }, { status: 400 });
    }
    await transport.sendMail({
      from: "romanroskanuk74@gmail.com",
      to: "romanroskanuk74@gmail.com",
      subject: `${data.tema}`,
      text: "this is the test string",
      html: `<h1>${data.tema}</h1>
      <p>${data.telefon}</p>
      <p>${data.email}</p>
      <p>${data.osob}</p>
      <p>${data.souhlas}</p>
      <p>${data.date}</p>`,
    });
    return NextResponse.json({ message: "operation seccses!", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
