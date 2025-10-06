import { z } from "zod";

export const sendMailSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type MailResponse = z.infer<typeof sendMailSchema>;
