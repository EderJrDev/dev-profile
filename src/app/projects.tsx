"use client";
import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

import restaurant from "../../public/restaurant.webp";
import ecomanager from "../../public/ecomanager.png";
import { ArrowRightCircle } from "lucide-react";
// import Footer from "./footer";

export default function Projects() {
  return (
    <div className="h-screen ">
      {/* <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center z-10">
        <p className="text-white text-2xl">Scroll down</p>
        <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500 ">
          Explore meus conhecimentos
        </p>
        <div>
          <h1 className="font-bold text-4xl pt-3">Experiência</h1>
        </div>
      </div> */}

      <div className="h-screen overflow-y-scroll">
        <Parallax pages={5} style={{ height: "100vh" }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className="flex items-center justify-center"
          >
            <div className="d-flex">
              <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500 ">
                Conheça meus{" "}
                <span className="font-bold text-4xl text-black">Projetos</span>
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            className="flex items-center justify-start px-32"
          >
            <div className=" text-black border border-black text-xl h-40 w-1/4 flex items-center justify-center rounded-3xl ml-10">
              <p className="me-2">Conheça meus Projetos</p>
              <ArrowRightCircle />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={1.5}
            className="flex items-center justify-end px-32"
          >
            <div className="p-3 mr-10 text-center flex gap-3 m-auto justify-center h-96 w-1/2 border border-black rounded-3xl overflow-hidden">
              <Image
                width={500}
                height={500}
                alt="restaurant"
                className="rounded-lg object-cover"
                src={restaurant}
              />
              <div className="m-auto">
                <p className="text-gray-500 text-2xl mb-2">
                  Restaurante da Dulci
                </p>
                <p>
                  Landing Page com uma interface elegante e intuitiva, permite
                  que os usuários explorem o cardápio diversificado do
                  restaurante.
                </p>
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
                width={500}
                height={500}
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
    </div>
  );
}
