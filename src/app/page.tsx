import { Imagery } from "@/components";
import { Hero, About, Projects, Contact } from "@/sections";

export default function Home() {
  return (
    <>
      <main className="brand-px mb-32">
        <Imagery />
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
