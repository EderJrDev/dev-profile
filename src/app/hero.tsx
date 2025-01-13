"use client";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import developer from "../../public/profile.webp";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const sendEmail = () => {
    window.location.href = "mailto:ederjuninho2003@gmail.com";
  };

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation loop
      const texts = ["Hello, I am", "Eder Jr", "Software Engineer"];
      const elements = textRef.current?.querySelectorAll(".text-animate");

      if (elements) {
        gsap.timeline({ repeat: -1 })
          .to(elements[0], { text: texts[0], duration: 1.5, ease: "power1.inOut" })
          .to(elements[1], { text: texts[1], duration: 1.5, ease: "power1.inOut", delay: 0.2 })
          .to(elements[2], { text: texts[2], duration: 1.5, ease: "power1.inOut", delay: 0.2 });
      }
    }, textRef);

    return () => ctx.revert(); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <section id="about" className="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 max-w-screen-xl">
          {/* Developer Image */}
          <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex-shrink-0">
            <Image
              width={600}
              height={600}
              priority
              alt="developer-photo"
              className="rounded-full shadow-md object-cover w-full h-full"
              src={developer}
            />
          </div>
          <div className="px-4 md:px-10 text-center lg:text-left">
            <div className="min-h-[200px]" ref={textRef}>
              <p className="hero-text text-lg md:text-xl py-2 text-gray-500 font-semibold text-animate"></p>
              <h1 className="hero-text font-bold py-3 text-4xl md:text-6xl lg:text-7xl text-animate"></h1>
              <p className="hero-text font-semibold text-gray-500 py-3 text-lg md:text-2xl lg:text-3xl text-animate"></p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 pt-5">
              <Link
                className="hero-button px-6 py-3 rounded-full border border-black bg-white hover:bg-black hover:text-white dark:border-white dark:bg-black dark:hover:bg-white dark:hover:text-black font-bold transition duration-300"
                href="https://1drv.ms/b/c/7e60d15d829738f7/Ear6oBGC5xdOg3T2ZXdbeaUBm2n_laopzLnjNXzbZpPx3w?e=NLNzdo"
                target="_blank"
              >
                Download CV
              </Link>
              <button
                type="button"
                onClick={sendEmail}
                className="hero-button px-6 py-3 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white font-bold transition duration-300"
              >
                Contact
              </button>
            </div>
            <div className="flex gap-5 pt-5 justify-center lg:justify-start">
              <Link
                href="https://www.linkedin.com/in/ederjuniordev/"
                target="_blank"
                className="social-icon p-3 rounded-full border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition duration-300"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://github.com/EderJrDev"
                target="_blank"
                className="social-icon p-3 rounded-full border border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition duration-300"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
