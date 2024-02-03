import { BgImagery } from "@/components";
import { Hero, About, Projects, Contact } from "@/sections";

export default function Home() {
  return (
    <div className="relative">
      <BgImagery />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
