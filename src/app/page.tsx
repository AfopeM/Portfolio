import { Contact, Hero } from "@/sections";
import { Imagery } from "@/components";

export default function Home() {
  return (
    <>
      <main className="brand-px mb-32 space-y-12 overflow-hidden lg:space-y-0">
        <Imagery />
        <Hero />
      </main>
      <Contact />
    </>
  );
}
