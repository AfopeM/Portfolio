import { Imagery } from "@/components";
import { Contact, Hero, About } from "@/sections";

export default function Home() {
  return (
    <>
      <main className="brand-px mb-32 space-y-12 overflow-hidden lg:space-y-0">
        <Imagery />
        <Hero />
        <About />
      </main>
      <Contact />
    </>
  );
}
