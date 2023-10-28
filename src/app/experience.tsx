import { BadgeCheck } from "lucide-react";

const Experience = () => {
  return (
    <section className="text-center">
      <div className="lg:flex-row sm:flex-col justify-center items-center lg:pt-10  px-10 sm:px-20 lg:px-52 pb-20 lg:pb-48 mb-4">
        <div className="pb-32">
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500 ">
            Explore meus conhecimentos
          </p>
          <div>
            <h1 className="font-bold text-4xl pt-3">Experiência</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 text-center m-auto justify-center border border-black rounded-3xl w-full">
            <p className=" text-gray-500 text-2xl mb-2">
              Desenvolvimento Frontend
            </p>
            <div className="flex flex-col text-center justify-around gap-3 md:flex-row">
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Html</p>
                <p className="text-gray-400 pt-1">Experiência</p>
              </div>
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">CSS</p>
                <p className="text-gray-400 pt-1">Experiência</p>
              </div>
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Next</p>
                <p className="text-gray-400 pt-1">Intermediário</p>
              </div>
            </div>
            <div className="flex flex-col text-center justify-around gap-3 md:flex-row">
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Tailwind</p>
                <p className="text-gray-400 pt-1">Experiência</p>
              </div>
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Figma</p>
                <p className="text-gray-400 pt-1">Intermediário</p>
              </div>
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Bootstrap</p>
                <p className="text-gray-400 pt-1">Experiência</p>
              </div>
            </div>
          </div>

          <div className="p-3 text-center m-auto justify-center border border-black rounded-3xl w-full">
            <p className=" text-gray-500 text-2xl mb-2">Tecnologias</p>
            <div className="flex flex-col text-center justify-around gap-3 md:flex-row w-full">
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Node.js</p>
                <p className="text-gray-400 pt-1">Básico</p>
              </div>

              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Git</p>
                <p className="text-gray-400 pt-1">Experiência</p>
              </div>

              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">JavaScript</p>
                <p className="text-gray-400 pt-1">Experiência</p>
              </div>
            </div>
            <div className="flex flex-col text-center justify-around gap-3 md:flex-row">
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Php</p>
                <p className="text-gray-400 pt-1">Básico</p>
              </div>
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">TypeScript</p>
                <p className="text-gray-400 pt-1">Intermediário</p>
              </div>
              <div className="text-center justify-center mb-2">
                <div className="flex items-center justify-center mb-2">
                  <BadgeCheck className="h-10 w-10" />
                </div>
                <p className="font-semibold text-xl">Github</p>
                <p className="text-gray-400 pt-1">Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
