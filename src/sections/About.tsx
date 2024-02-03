"use client";
import data from "../../public/data/techstack.json";
import { Techstack, SectionTitle } from "@/components";

export default function About() {
  const { techstack } = data;
  return (
    <section
      id="skills"
      className="brand-px flex flex-col items-center  space-y-12 bg-brand-dark 
      py-32"
    >
      {/* SKILLS */}
      <SectionTitle
        title="My Skills"
        contentExtra="text-brand-light-dim"
        content="Tools and technologies that am experienced and proficient in."
      />

      {/* TOOLS */}
      <Techstack techstack={techstack} extra="text-brand-light max-w-4xl" />
    </section>
  );
}
