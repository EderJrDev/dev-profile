"use client";
import * as React from "react";
import { useState, useEffect } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

import restaurant from "../../public/restaurante.png";
import ecomanager from "../../public/ecomanager.png";
import { ArrowRightCircle } from "lucide-react";
import Footer from "./footer";
// import Footer from "./footer";

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

  const handleCardClick = () => {
    // Redirecionar para a URL externa quando o card é clicado
    window.open("https://restaurantedadulci.com.br/", "_blank"); // _blank abre em uma nova aba
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Parallax pages={3.2} style={{ height: "100vh" }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="flex items-center justify-center "
          >
            <div className="d-flex">
              <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500">
                Conheça meus{" "}
                <span className="font-bold text-4xl text-black">Projetos</span>
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            className="flex items-center justify-start px-32 "
          >
            {isElementVisible && (
              <div className=" text-black border border-black text-xl h-40 w-1/4 flex items-center justify-center rounded-3xl ml-10">
                <p className="me-2">Conheça meus Projetos</p>
                <ArrowRightCircle />
              </div>
            )}
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={1.5}
            className="flex items-center justify-end px-32"
          >
            <div
              className="lg:flex-row border border-black rounded-3xl md:max-w-2xl h-auto w-full sm:w-auto p-5 relative overflow-hidden"
              onClick={handleCardClick}
              style={{ cursor: "pointer" }}
            >
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
            offset={2.5}
            speed={1.5}
            className="flex items-center justify-end px-32"
          >
            <div className="p-3 mr-10 text-center flex gap-3 m-auto justify-center h-96 w-1/2 border border-black rounded-3xl overflow-hidden">
              <Image
                alt="restaurant"
                className="rounded-lg object-cover"
                src={ecomanager}
              />
              <div className="m-auto">
                <p className="text-gray-500 text-2xl mb-2">EcoManager</p>
                <p>
                  Sistema de gestão para empresa sustentáveis criando durante o
                  evento do Hackathon 2023 proporcionando pela Uni-FACEF.
                </p>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <Footer />
    </>
  );
}
