import { Resend } from 'resend';
import EmailTemplate from '@/app/components/email-template';
const resend = new Resend(process.env.RESEND_API_KEY);
// console.log(resend, process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: any, res: any) {
  const  body = await req.json();
  console.log("body", body);
  const {name, email, subject, message} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Thank You for Contacting Me",
      react: EmailTemplate({name, subject, message}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
