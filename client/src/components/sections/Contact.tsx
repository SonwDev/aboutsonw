import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Mail, Github, Youtube, Linkedin } from "lucide-react";

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
        "V2dw6dYxEFM7mCIF1"      // Thay bằng public key
      );
      reset();
      alert("Đã gửi thành công!");
    } catch (error) {
      console.error("Lỗi gửi email:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  }
}

const ContactCard = () => {
  const contacts = [
    {
      label: "kazumiyarine@gmail.com",
      icon: Mail,
      href: "mailto:kazumiyarine@gmail.com",
    },
    {
      label: "Github",
      icon: Github,
      href: "https://github.com/SonwDev",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl border border-white/10 backdrop-blur-md bg-white/5">
      <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
      <ul className="space-y-4">
        {contacts.map(({ label, icon: Icon, href }, idx) => (
          <li key={idx}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-md border border-white/10 bg-white/5 text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:shadow-md hover:shadow-white/10"
            >
              <Icon
                size={18}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ContactCard };
