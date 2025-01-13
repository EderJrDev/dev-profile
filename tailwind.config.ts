import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#000000",
          slateNew: "#F0F0F0",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        giant: ["10rem", { lineHeight: "1" }],
      },
      fontFamily: {
        // inter: ["Inter", "sans-serif"],
        sans: ["var(--font-family-main)"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
