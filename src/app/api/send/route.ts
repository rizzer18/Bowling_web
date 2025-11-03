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
      to: "endzevych@icloud.com",
      subject: `${data.tema}`,
      text: "this is the test string",
      html: `
  <h1>${data.tema}</h1>
  <ul style="list-style: none; padding: 0; font-family: Arial, sans-serif;">
    <li><strong>Повне ім'я:</strong> ${data.fullname}</li>
    <li><strong>Телефон:</strong> ${data.telefon}</li>
    <li><strong>Email:</strong> ${data.email}</li>
    <li><strong>Кількість особ:</strong> ${data.osob}</li>
    <li><strong>Погодження GDPR:</strong> ${data.souhlas}</li>
    <li><strong>Дата резервіції:</strong> ${data.date}</li>
    ${
      data.Poznamka
        ? `<li><strong>Примітка:</strong> ${data.Poznamka}</li>`
        : ""
    }
  </ul>
`,
    });
    return NextResponse.json({ message: "operation seccses!", status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
