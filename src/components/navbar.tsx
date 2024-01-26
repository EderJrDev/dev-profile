"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Adicionando um estado para verificar se o código está rodando do lado do cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ativando o estado isClient quando o componente é montado no lado do cliente
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setIsOpen(false);
    }
  };

  return (
    <nav>
      <div className="max-w-screen-xl text-black dark:text-white pt-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <span className="self-center text-4xl whitespace-nowrap">
            Eder Jr
          </span>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-black dark:text-white text-3xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <div
                className="block py-2 pl-3 pr-4 md:p-0"
                onClick={() => scrollToSection("about")}
              >
                Sobre
              </div>
            </li>
            <li>
              <div
                className="block py-2 pl-3 pr-4 md:p-0"
                onClick={() => scrollToSection("experience")}
              >
                Experiência
              </div>
            </li>
            <li>
              <div
                className="block py-2 pl-3 pr-4 md:p-0"
                onClick={() => scrollToSection("projects")}
              >
                Projetos
              </div>
            </li>
            <li>
              <div
                className="block py-2 pl-3 pr-4 md:p-0"
                onClick={() => scrollToSection("contact")}
              >
                Contato
              </div>
            </li>

            {isClient && (
              <li>
                <Button />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
