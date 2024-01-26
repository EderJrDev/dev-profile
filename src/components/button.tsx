"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

const Button = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="relative rounded-full dark:bg-gray-50 hover:bg-black hover:text-white dark:hover:bg-gray-300 transition-all duration-100 text-black dark:text-gray-800 px-8 py-2 text-2xl"
    >
      {/* <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
      {theme === "dark" ? <MoonStar /> : <Sun />}
      {/* </span> */}
      {/* Toggle Mode */}
    </button>
  );
};

export default Button;
