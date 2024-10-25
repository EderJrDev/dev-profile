"use client";
import * as React from "react";
import { useState, useLayoutEffect } from "react";
import Image from "next/image";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import restaurant from "../../public/restaurante.webp";
import ecomanager from "../../public/ecomanager.webp";
import music from "../../public/site-roberto-barros.webp";

export default function Projects() {
  const [isElementVisible, setIsElementVisible] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsElementVisible(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div id="projects" className="min-h-screen flex flex-col">
        <Parallax pages={3.0} horizontal={true} style={{ width: "100vw" }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="flex items-center justify-center"
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

          {/* Adicionando a dica de arraste */}
          <ParallaxLayer
            offset={0}
            speed={0.8}
            className="flex items-center justify-center"
          >
            <div className="absolute bottom-10 text-gray-500 text-sm md:text-base">
              <p>Arraste para o lado 👉</p>
            </div>
          </ParallaxLayer>

          {/* Imagens maiores com offsets ajustados */}
          <ParallaxLayer
            offset={0.8}
            speed={0.8}
            className="flex items-center justify-center"
          >
            <a
              href="https://frontend-hackathon-2023-komeeoq4m-eder-juniors-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lg:flex-row border border-black dark:border-white rounded-3xl w-full sm:w-auto p-5 relative overflow-hidden">
                <div className="md:flex relative">
                  <Image
                    width={1000}
                    height={1000}
                    alt="ecomanager"
                    className="rounded-lg object-cover w-full h-full"
                    src={ecomanager}
                  />
                </div>
              </div>
            </a>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.0}
            speed={0.8}
            className="flex items-center justify-center"
          >
            <a
              href="https://restaurantedadulci.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lg:flex-row border border-black dark:border-white rounded-3xl w-full sm:w-auto p-5 relative overflow-hidden">
                <div className="md:flex relative">
                  <Image
                    width={1000}
                    height={1000}
                    alt="restaurant"
                    className="rounded-lg object-cover w-full h-full"
                    src={restaurant}
                  />
                </div>
              </div>
            </a>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.9}
            speed={0.8}
            className="flex items-center justify-center"
          >
            <a
              href="https://robertobarrosofc.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lg:flex-row border border-black dark:border-white rounded-3xl w-full sm:w-auto p-5 relative overflow-hidden">
                <div className="md:flex relative">
                  <Image
                    width={1000}
                    height={1000}
                    alt="music"
                    className="rounded-lg object-cover w-full h-full"
                    src={music}
                  />
                </div>
              </div>
            </a>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
