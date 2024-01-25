import About from "./about";
import Hero from "./hero";
import Projects from "./projects";
import Navbar from "./app-sidebar";
import Experience from "./experience";

export default function Home() {
  return (
    <main className="text-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
