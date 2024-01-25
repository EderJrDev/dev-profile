"use client";

import Button from "@/components/button";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //   <h2 className="text-4xl sm:text-6xl md:text-9xl text-center text-gray-800">
  //   LIGHT MODE
  // </h2>
  // <h2 className="text-4xl sm:text-6xl md:text-9xl text-center text-white">
  //   DARK MODE
  // </h2>

  return (
    <nav>
      <div className="max-w-screen-xl text-black pt-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center">
          <span className="self-center text-4xl whitespace-nowrap">
            Eder Jr
          </span>
        </Link>
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-black text-3xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 md:p-0">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 md:p-0">
                Experiencia
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 md:p-0">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 md:p-0">
                Contato
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 md:p-0">
                Dark Mode
              </Link>
            </li>
            <li>
              <Button />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
