import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { firstName, email, message, subject } = req.body;
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["sbaamohe@gmail.com"],
      subject,
      react: EmailTemplate({ firstName, message, email, subject }),
    });

    if (error) {
      return res.status(400).json(error);
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
};
