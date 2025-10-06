import { sendEmailService } from "@/services/mail.service";
import { useMutation } from "@tanstack/react-query";

export const useSendMail = () => {
  return useMutation({
    mutationFn: ({
      name,
      email,
      subject,
      message,
    }: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => sendEmailService(name, email, subject, message),
  });
};
