import About from "./about";
import Hero from "./hero";
import Projects from "./projects";
import Experience from "./experience";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="text-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
