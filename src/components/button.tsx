"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

const Button = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="relative rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100 text-black dark:text-white px-8 py-2 text-2xl"
    >
      {theme === "dark" ? <MoonStar /> : <Sun />}
    </button>
  );
};

export default Button;
