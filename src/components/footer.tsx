"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const enviarEmail = () => {
    window.location.href = "mailto:ederjuninho2003@gmail.com";
  };
  return (
    <footer id="contact" className="text-center">
      <div className="lg:flex-row sm:flex-col justify-center items-center lg:pt-10  px-10 sm:px-20 lg:px-52 pb-20 lg:pb-48 mb-4">
        <div className="pb-32">
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500 ">
            Entre em contato comigo!
          </p>
          <div>
            <h1 className="font-bold text-4xl pt-3">Contato</h1>
          </div>
        </div>

        <div className="flex pt-3 text-center gap-5 justify-center">
          <Link
            href="https://www.linkedin.com/in/ederjuniordev/"
            target="_blank"
          >
            <div className="p-3 rounded-full border border-black hover:bg-black hover:text-white text-center justify-center">
              <Linkedin className="m-auto" size={36} />
            </div>
          </Link>
          <Link href="https://github.com/EderJrDev" target="_blank">
            <div className="p-3 rounded-full border border-black text-center justify-center  hover:bg-black hover:text-white ">
              <Github className=" m-auto" size={36} />
            </div>
          </Link>
          <button onClick={enviarEmail}>
            <div className="p-3 rounded-full border border-black text-center justify-center  hover:bg-black hover:text-white ">
              <Mail className=" m-auto" size={36} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
