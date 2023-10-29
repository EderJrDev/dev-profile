import About from "./about";
import Navbar from "./app-sidebar";
import Experience from "./experience";
// import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="text-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Footer /> */}
    </main>
  );
}
