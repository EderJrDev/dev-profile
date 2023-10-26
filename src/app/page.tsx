import About from "./about";
import Navbar from "./app-sidebar";
import Hero from "./hero";

export default function Home() {
  return (
    <main className="text-center justify-center">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
