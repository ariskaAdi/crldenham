import { Response } from "express";
import AppError from "../../errors/AppError";
import { MailResponse } from "../../types/mail";
import { transport } from "../../config/nodemailer";
import { generateEmailTemplates } from "../../utils/emailTemplate";

export const sendEmailService = async (data: MailResponse) => {
  const { name, email, subject, message } = data;
  if (!name || !email || !subject || !message) {
    throw new AppError("Email, subject, and message are required", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new AppError("Invalid email format", 400);
  }

  const { text, html } = generateEmailTemplates({
    name,
    email,
    subject,
    message,
  });

  await transport.sendMail({
    from: `"Website Contact" <${process.env.MAILER_SENDER}>`,
    to: process.env.MAILER_SENDER,
    replyTo: email,
    subject,
    text,
    html,
  });
};
