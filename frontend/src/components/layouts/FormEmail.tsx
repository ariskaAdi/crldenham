import React from "react";

const FormEmail = () => {
  return (
    <div>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
          <span>Send Message</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2">
            <path
              d="M1.16699 7H12.8337"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 1.16699L12.8333 7.00033L7 12.8337"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default FormEmail;
