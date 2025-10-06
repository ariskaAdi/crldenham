import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const sendEmailService = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<void> => {
  const response = await axios.post(`${BASE_URL}/mail/send`, {
    name,
    email,
    subject,
    message,
  });
  console.log(response.data);
  return response.data;
};
