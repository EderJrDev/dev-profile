import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

import me from "../../public/code.jpg";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center rounded-full my-2 mx-auto">
        <Image
          width={400}
          height={400}
          alt="dev-image"
          className="rounded-full"
          src={me}
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
            <button className=" p-3 me-3 rounded-full border border-black bg-white hover:bg-black hover:text-white font-bold flex-1">
              Download CV
            </button>
            <button className="p-3 me-3 rounded-full border text-white border-black bg-black hover:bg-white hover:text-black font-bold flex-1">
              Contato
            </button>
          </div>

          <div className="flex pt-3 text-center gap-5 justify-center">
            <div className="p-3 rounded-full border border-black hover:bg-black hover:text-white text-center justify-center">
              <Linkedin className=" m-auto fill-white" />
            </div>
            <div className="p-3 rounded-full border border-black text-center justify-center  hover:bg-black hover:text-white ">
              <Github className=" m-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
