"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const imageRef = useRef<HTMLElement[]>([]);
  const imageContainerRef = useRef();

  const images = [
    { src: "/restaurante.webp", alt: "Restaurant", link: "https://restaurantedadulci.com.br/" },
    { src: "/casal.webp", alt: "Casal", link: "https://eder-sthe-o5ro6ulb2-eder-juniors-projects.vercel.app/" },
    { src: "/wedding.webp", alt: "Wedding", link: "https://eder-sthe-wedding.vercel.app/" },
    { src: "/site.webp", alt: "Ecommerce", link: "https://loja-virtual-rose.vercel.app/" },
    { src: "/auto-mecanica.webp", alt: "Auto Mecanica", link: "https://auto-mechanic-silva.vercel.app/" },
    { src: "/ecomanager.webp", alt: "Ecomanager", link: "https://frontend-hackathon-2023-komeeoq4m-eder-juniors-projects.vercel.app/" },
    { src: "/site-roberto-barros.webp", alt: "Music", link: "https://robertobarrosofc.com.br/" },
  ];

  useEffect(() => {
    const imageContainer = imageContainerRef.current;

    if (imageContainer) {
      gsap.to(imageRef.current, {
        xPercent: -100 * (images.length - 1), // Move todos os cartões horizontalmente
        ease: "none",
        scrollTrigger: {
          trigger: imageContainer,
          scrub: 1,
          end: `+=${(imageContainer as HTMLElement).offsetWidth}`,
          pin: true,
        },
      });
    }

    return () => {
      for (const st of ScrollTrigger.getAll()) {
        st.kill();
      }
    };
  }, [images.length]);

  return (
    <main id="projects" className=" w-full overflow-x-hidden">
      <section className="min-h-screen flex justify-center items-center">
        <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500">
          Discover my{" "}
          <span className="font-bold text-4xl text-black dark:text-white">
            Projects
          </span>
        </p>
      </section>
      <section className="min-h-screen flex items-center" ref={imageContainerRef}>
        <div className="flex space-x-10 px-10 w-[300vw]">
          {images.map((image, index) => (
            <div
              key={`${image}`}
              ref={(el) => {
                if (imageRef.current) {
                  imageRef.current[index] = el as HTMLElement;
                }
              }}
              className="w-[60vw] height-full flex justify-center items-center shrink-0"
            >
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl overflow-hidden border-2 border-black dark:border-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={2000}
                  height={2000}
                  className="rounded-lg object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
