"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "next-themes";
import Navbar from "@/components/navbar";

const Presentation = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const titles = ["Engineer", "Programmer", "Developer"];
    const changingText = document.querySelector(".changing-text");

    if (changingText) {
      const tl = gsap.timeline({ repeat: -1, defaults: { duration: 0.8 } }); // Loop

      for (const title of titles) {
        tl.to(changingText, {
          opacity: 0,
          onComplete: () => {
            changingText.textContent = title;
          },
        })
          .to(changingText, { opacity: 1 })
          .to(changingText, { delay: 1 });
      }
    }
  }, []);

  const { theme } = useTheme();

  useEffect(() => {
    if (videoRef.current) {
      const videoSrc =
        theme === "dark"
          ? "https://videos.pexels.com/video-files/9665238/9665238-uhd_4096_2160_25fps.mp4"
          : "https://videos.pexels.com/video-files/29460385/12681525_2560_1440_30fps.mp4";

      videoRef.current.src = videoSrc; // Atualiza o src
      videoRef.current.load(); // Recarrega o vídeo
    }
  }, [theme]);

  return (
    <section
      ref={introRef}
      className="intro-container h-screen flex justify-center items-center text-white text-center relative overflow-hidden bg-black"
    >
      <Navbar />
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          type="video/mp4"
        />
      </video>

      {/* Responsive Text */}
      <h1 className="text-black dark:text-white intro-text font-extrabold glow-title z-10 flex flex-col items-center">
        <span className="text-giant text-[4.0rem] md:text-[5rem] lg:text-[10rem] xl:text-[12rem] leading-none">
          Software
        </span>
        <span className="changing-text text-giant text-[4.0rem] md:text-[4rem] lg:text-[8rem] xl:text-[10rem]">
          Engineer
        </span>
      </h1>
    </section>
  );
};

export default Presentation;
