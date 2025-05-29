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
        "your_service_id",     // Thay bằng ID thật
        "your_template_id",    // Thay bằng ID thật
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
      <h2 className="text-3xl font-bold text-center">Liên hệ với tôi</h2>

      <ul className="space-y-4 text-lg">
        <li className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Mail className="text-red-500" />
          <a
            href="mailto:kazumiyarine@gmail.com"
            className="text-blue-600 hover:underline"
          >
            kazumiyarine@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Github className="text-black" />
          <a
            href="https://github.com/SonwDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/SonwDev
          </a>
        </li>
        <li className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Youtube className="text-red-600" />
          <a
            href="https://www.youtube.com/@SonwDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            youtube.com/@SonwDev
          </a>
        </li>
      </ul>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4"
      >
        <h3 className="text-xl font-semibold">Gửi tin nhắn trực tiếp</h3>

        <input
          type="text"
          placeholder="Tên của bạn"
          {...register("name", { required: "Vui lòng nhập tên" })}
          className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email của bạn"
          {...register("email", {
            required: "Vui lòng nhập email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email không hợp lệ",
            },
          })}
          className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <textarea
          placeholder="Nội dung tin nhắn"
          rows={5}
          {...register("message", { required: "Vui lòng nhập nội dung" })}
          className="w-full p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Đang gửi..." : "Gửi"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 font-medium">✔️ Tin nhắn đã được gửi!</p>
        )}
      </form>
    </div>
  );
}
