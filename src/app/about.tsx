import Image from "next/image";
import { Award } from "lucide-react";

import dev from "../../public/coder.jpg";

const About = () => {
  return (
    <section className="text-center">
      <div className="lg:flex-row sm:flex-col justify-center items-center lg:pt-10  px-10 sm:px-20 lg:px-52 pb-20 lg:pb-48 mb-4">
        <div className="pb-32">
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500 ">
            Me conheça um pouco mais
          </p>
          <div>
            <h1 className="font-bold text-4xl pt-3">Sobre Mim</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 m-auto gap-4">
          <div>
            <Image
              width={200}
              height={200}
              alt="dev-image"
              className="rounded-3xl"
              layout="responsive"
              src={dev}
            />
          </div>

          <div className="md:col-span-1 p-10 text-center m-auto justify-center border border-black rounded-3xl">
            <div className="flex items-center justify-center mb-2">
              <Award className="h-10 w-10" />
            </div>
            <p className="font-semibold text-xl">Experiência</p>
            <p className="text-gray-400 pt-1">
              1+ ano Desenvolvimento Frontend/Mobile
            </p>
          </div>

          <div className="md:col-span-1 p-10 text-center m-auto justify-center border border-black rounded-3xl">
            <div className="flex items-center justify-center mb-2">
              <Award className="h-10 w-10" />
            </div>
            <p className="font-semibold text-xl">Educação</p>
            <p className="text-gray-400 pt-1">
              4º Semestre Engenharia de Software Uni-FACEF
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-full mt-8 text-center">
          <p className="italic font-medium text-gray-500">
            Sou um jovem estudante apaixonado por{" "}
            <span className="font-semibold">tecnologia</span>, especialmente
            pelo mundo fascinante do desenvolvimento Frontend. Para mim,
            transformar linhas de código em interfaces visualmente encantadoras
            é mais do que um trabalho; é uma paixão que me move diariamente.
            Minha personalidade extrovertida e sonhadora me leva a encontrar
            alegria não apenas na criação, mas também na conexão com os outros.
            Acredito que a tecnologia não é apenas sobre códigos, mas também
            <span className="font-semibold"> sobre </span> pessoas. Minha
            ambição suprema é me tornar um Teach Lead Frontend. Quero não apenas
            aprimorar minhas habilidades, mas também compartilhar meu
            <span className="font-semibold"> conhecimento </span> , inspirando
            outros a explorar o vasto universo do desenvolvimento tecnológico.
            Enxergo um futuro onde minhas contribuições não apenas moldam belas
            interfaces, mas também capacitam e educam uma comunidade inteira,
            criando um mundo digital mais{" "}
            <span className="font-semibold"> colaborativo </span> e brilhante
            para todos nós.
          </p>
        </div>

        <div className="grid grid-cols-1 pt-5"></div>
      </div>
    </section>
  );
};

export default About;
