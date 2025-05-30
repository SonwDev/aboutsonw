import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Mail, Github, Youtube } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_dikbg7y",     // Thay bằng ID thật
        "template_k2fs5vn",    // Thay bằng ID thật
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        "your_public_key"      // Thay bằng public key
      );
      reset();
      alert("Đã gửi thành công!");
    } catch (error) {
      console.error("Lỗi gửi email:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };

  return (
  <div className="p-6 md:p-10 max-w-3xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">Get in touch</h2>

      <ul className="space-y-4 text-lg">
        <li>
          <a
            href="mailto:kazumiyarine@gmail.com"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-transform duration-200 hover:scale-[1.02] group"
          >
            <Mail className="text-red-500 group-hover:animate-pulse" />
            <span className="text-blue-600 group-hover:underline">
              kazumiyarine@gmail.com
            </span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/SonwDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-transform duration-200 hover:scale-[1.02] group"
          >
            <Github className="text-black group-hover:text-gray-800" />
            <span className="text-blue-600 group-hover:underline">
              github.com/SonwDev
            </span>
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/@SonwDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-transform duration-200 hover:scale-[1.02] group"
          >
            <Youtube className="text-red-600 group-hover:text-red-500" />
            <span className="text-blue-600 group-hover:underline">
              youtube.com/@SonwDev
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}