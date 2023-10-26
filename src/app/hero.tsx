import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-center">
      <div className="flex flex-col lg:flex-row justify-center items-center rounded-full lg:pt-20 pt-20 mb-4">
        <Image
          width={300}
          height={300}
          alt="dev-image"
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/101297883?v=4"
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
            <button className=" p-3 me-3 rounded-full border border-black bg-[#e2e8f0] hover:bg-black hover:text-[#e2e8f0] font-bold flex-1">
              Download CV
            </button>
            <button className="p-3 me-3 rounded-full border text-[#e2e8f0] border-black bg-black hover:bg-[#e2e8f0] hover:text-black font-bold flex-1">
              Contato
            </button>
          </div>

          <div className="flex pt-3 text-center gap-5 justify-center">
            <div className="p-3 rounded-full border border-black hover:bg-black hover:text-[#e2e8f0] text-center justify-center">
              <Linkedin className=" m-auto fill-white" />
            </div>
            <div className="p-3 rounded-full border border-black text-center justify-center  hover:bg-black hover:text-[#e2e8f0] ">
              <Github className=" m-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
