"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Presentation from "./presentation";
import Hero from "./hero";
import Footer from "@/components/footer";
import Projects from "./projects";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(introRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      gsap.to(".intro-text", {
        y: -100,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".dev-image", {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* <Navbar /> */}
      <div ref={introRef}>
        <Presentation />
      </div>
      <div ref={heroRef}>
        <Hero />
      </div>
      <Projects />
      <Footer />
    </main>
  );
};

export default Main;
