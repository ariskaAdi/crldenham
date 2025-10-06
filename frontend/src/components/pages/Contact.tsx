import React from "react";
// import SocialMedia from "./SocialMedia";
import { Mail, Phone } from "lucide-react";
import FormEmail from "../layouts/FormEmail";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mx-auto px-4 md:px-6 py-12 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-10">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
              / Let&apos;s Connect /
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-black uppercase">
              Ready to bring your ideas to life?
            </h1>
            <p className="text-gray-600 text-base">
              Whether you&apos;re starting a new project, need a developer on
              your team, or just want to say hello — I&apos;m always open to
              meaningful collaborations. Reach out and let&apos;s talk.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-base text-gray-700">
            {/* Call */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Phone</h3>
              <div className="space-y-1">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+62 831-3507-8376</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Email</h3>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>ariskaadiprasetyo@gmail.com</span>
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Find me on
              </h3>
              {/* <SocialMedia /> */}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-black mb-4">
              Send a message
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Fill out the form below and I’ll get back to you as soon as
              possible.
            </p>
            {/* Form Inputs */}
            <FormEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
