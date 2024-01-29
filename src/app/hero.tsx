"use client";
import Link from "next/link";
import Image from "next/image";

import { Linkedin, Github } from "lucide-react";

import developer from "../../public/profile.png";

const Hero = () => {
  const enviarEmail = () => {
    window.location.href = "mailto:ederjuninho2003@gmail.com";
  };

  const baixarCV = () => {
    // Lógica para baixar o arquivo PDF (substitua 'caminho/do/arquivo.pdf' pelo caminho real do seu arquivo)
    const urlDoArquivoPDF = "../../public/Programador.pdf";
    window.open(urlDoArquivoPDF, "_blank");
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center rounded-full my-2 mx-auto">
        <Image
          width={400}
          height={400}
          priority
          alt="dev-image"
          className="rounded-full"
          src={developer}
        />
        <div className="px-10">
          <p className="text-l py-2 text-gray-500 font-semibold">
            Olá eu sou o
          </p>
          <h1 className="font-bold py-3 text-4xl">Eder Jr</h1>
          <p className="font-semibold text-gray-500 py-3 text-3xl">
            Desenvolvedor Frontend
          </p>
          <div className="flex">
            <Link href="/caminho/do/arquivo.pdf" passHref legacyBehavior>
              <div className="p-3 me-3 rounded-full border border-black bg-white hover:bg-black hover:text-white dark:text-black dark:hover:bg-black dark:hover:text-white font-bold flex-1">
                Download CV
              </div>
            </Link>
            <button
              onClick={enviarEmail}
              className="p-3 me-3 rounded-full border text-white border-black bg-black hover:bg-white hover:text-black font-bold flex-1"
            >
              Contato
            </button>
          </div>

          <div className="flex pt-3 text-center gap-5 justify-center">
            <div className="p-3 rounded-full border border-black hover:bg-black hover:text-white text-center justify-center">
              <Link
                href="https://www.linkedin.com/in/ederjuniordev/"
                target="_blank"
              >
                {" "}
                <Linkedin className=" m-auto fill-white" />
              </Link>
            </div>
            <div className="p-3 rounded-full border border-black text-center justify-center  hover:bg-black hover:text-white ">
              <Link href="  https://github.com/EderJrDev" target="_blank">
                {" "}
                <Github className=" m-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
