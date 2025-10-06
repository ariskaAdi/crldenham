export const generateEmailTemplates = (data: {
  name?: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = data;

  const text = `
New message from your company website:

Name: ${name || "N/A"}
Email: ${email}

Message:
${message}
  `;

  const html = `
  <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
    <h3>New message from your company website</h3>
    <p><strong>Name:</strong> ${name || "N/A"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  </div>
  `;

  return { text, html };
};
