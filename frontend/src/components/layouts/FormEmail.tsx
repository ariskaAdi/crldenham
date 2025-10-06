"use client";

import { useSendMail } from "@/hooks/useMail";
import { sendMailSchema } from "@/lib/validation/mail";
import { MailResponse } from "@/types/mail.types";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const FormEmail = () => {
  const { mutate: sendEmail, isPending, isError } = useSendMail();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<MailResponse>({
    resolver: zodResolver(sendMailSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: MailResponse) => {
    sendEmail(data, {
      onSuccess: () => {
        reset();
        toast.success("Message sent successfully");
      },
    });
  };
  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          placeholder="Full Name"
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500 ">{errors.name.message}</p>
        )}
        <input
          id="email"
          placeholder="Email Address"
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500 ">{errors.email.message}</p>
        )}
        <input
          id="subject"
          placeholder="Subject"
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-sm text-red-500 ">{errors.subject.message}</p>
        )}
        <textarea
          id="message"
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500 ">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors cursor-pointer"
          disabled={isPending}>
          <span>{isPending ? "Sending..." : "Send"}</span>
        </button>
      </form>
    </div>
  );
};

export default FormEmail;
