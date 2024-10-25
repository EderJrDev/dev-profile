import Image from "next/image";
import { Award } from "lucide-react";

import dev from "../../public/programmer.webp";

const About = () => {
  return (
    <section id="about" className="text-center">
      <div className="lg:flex-row sm:flex-col justify-center items-center lg:pt-10  px-10 sm:px-20 lg:px-52 pb-20 lg:pb-48 mb-4">
        <div className="pb-32">
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500 ">
            Me conheça um pouco mais
          </p>
          <div>
            <h1 className="font-bold text-4xl pt-3">Sobre Mim</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Primeiro Card */}
          <div className="p-10 text-center border rounded-3xl flex flex-col items-center justify-center min-h-[200px]">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-10 w-10" />
            </div>
            <p className="font-semibold text-xl">Experiência</p>
            <p className="text-gray-400 pt-2">
              2+ anos Desenvolvimento Frontend/Mobile
            </p>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center">
            <Image
              width={600}
              height={600}
              priority
              alt="dev-image"
              className="rounded-3xl"
              src={dev}
            />
          </div>

          {/* Segundo Card */}
          <div className="p-10 text-center border rounded-3xl flex flex-col items-center justify-center min-h-[200px]">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-10 w-10" />
            </div>
            <p className="font-semibold text-xl">Educação</p>
            <p className="text-gray-400 pt-2">
              6º Semestre Engenharia de Software Uni-FACEF
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-8 text-start">
          <p className="italic font-medium text-gray-500 leading-relaxed">
            Sou um jovem estudante apaixonado por{" "}
            <span className="font-semibold">tecnologia</span>,
            especialmente pelo mundo fascinante do desenvolvimento Frontend.
            <br />
            <br />
            Para mim, transformar linhas de código em interfaces visualmente
            encantadoras é mais do que um trabalho, é uma{" "}
            <span className="font-semibold">paixão</span> que me
            move diariamente. Minha personalidade extrovertida e sonhadora me
            leva a encontrar alegria não apenas na criação, mas também na
            conexão com os outros.
            <br />
            <br />
            Acredito que a tecnologia não é apenas sobre códigos, mas também
            sobre <span className="font-semibold">pessoas</span>.
            Minha ambição suprema é me tornar um{" "}
            <span className="font-semibold">
              Tech Lead Frontend
            </span>
            .
            <br />
            <br />
            Quero não apenas aprimorar minhas habilidades, mas também continuar
            compartilhando meu{" "}
            <span className="font-semibold">conhecimento</span>,
            inspirando outros a explorar o vasto universo do desenvolvimento
            tecnológico. Enxergo um futuro onde minhas contribuições não apenas
            moldam belas interfaces, mas também capacitam e educam uma
            comunidade inteira, criando um mundo digital{" "}
            <span className="font-semibold">colaborativo</span> e
            brilhante para todos nós.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
