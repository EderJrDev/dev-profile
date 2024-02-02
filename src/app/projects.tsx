"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import { ArrowRightCircle } from "lucide-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import music from "../../public/music.webp";
import ecomanager from "../../public/ecomanager.webp";
import restaurant from "../../public/restaurant.webp";

export default function Projects() {
  const [isElementVisible, setIsElementVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsElementVisible(window.innerWidth >= 768); // Define a visibilidade com base na largura da tela
    };

    handleResize(); // Chama a função para definir o estado inicial com base na largura da tela
    window.addEventListener("resize", handleResize); // Adiciona um ouvinte de evento de redimensionamento

    return () => {
      window.removeEventListener("resize", handleResize); // Remove o ouvinte de evento ao desmontar o componente
    };
  }, []); // O segundo argumento vazio assegura que o useEffect só seja executado uma vez (equivalente a componentDidMount)

  return (
    <>
      <div id="projects" className="min-h-screen flex flex-col">
        <Parallax pages={4.0} style={{ height: "100vh" }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="flex items-center justify-center "
          >
            <div className="d-flex">
              <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500">
                Conheça meus{" "}
                <span className="font-bold text-4xl text-black dark:text-white">
                  Projetos
                </span>
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            className="flex items-center justify-start px-32 "
          >
            {isElementVisible && (
              <div className=" text-black border border-black dark:text-white dark:border-white text-xl h-40 w-1/4 flex items-center justify-center rounded-3xl ml-10">
                <p className="me-2">Conheça meus Projetos</p>
                <ArrowRightCircle />
              </div>
            )}
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.0}
            speed={1.0}
            className="flex items-center justify-end px-32"
          >
            <div className="lg:flex-row border border-black dark:border-white rounded-3xl md:max-w-3xl h-auto w-full sm:w-auto p-5 relative overflow-hidden">
              <div className="md:flex relative">
                <Image
                  width={900}
                  height={900}
                  alt="restaurant"
                  className="rounded-lg object-cover w-full md:min-h-64 sm:min-h-96"
                  src={restaurant}
                />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.0}
            speed={1.0}
            className="flex items-center justify-end px-32"
          >
            <div
              className="lg:flex-row border border-black dark:border-white rounded-3xl md:max-w-3xl h-auto w-full sm:w-auto p-5 relative overflow-hidden"
              style={{ cursor: "pointer" }}
            >
              <div className="md:flex relative">
                <Image
                  width={900}
                  height={900}
                  alt="ecomanager"
                  className="rounded-lg object-cover w-full md:min-h-64 sm:min-h-96"
                  src={ecomanager}
                />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.0}
            speed={1.0}
            className="flex items-center justify-end px-32"
          >
            <div
              className="lg:flex-row border border-black dark:border-white rounded-3xl md:max-w-3xl h-auto w-full sm:w-auto p-5 relative overflow-hidden"
              style={{ cursor: "pointer" }}
            >
              <div className="md:flex relative">
                <Image
                  width={900}
                  height={900}
                  alt="music"
                  className="rounded-lg object-cover w-full md:min-h-64 sm:min-h-96"
                  src={music}
                />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
