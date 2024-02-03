"use client";
import data from "../../public/data/projects.json";
import { ProjectCards, SectionTitle } from "@/components";

export default function Projects() {
  const { projects } = data;
  return (
    <section id="projects" className="brand-px space-y-12 py-32">
      {/* PROJECT HEADER & TAGLINE */}
      <SectionTitle
        title="Explore my Project"
        content="Visual storytelling through code and design"
      />

      {/* PROJECT CARDS */}
      <section className="grid grid-cols-1 gap-y-24">
        {projects.map((project) => {
          return <ProjectCards key={project.name} {...project} />;
        })}
      </section>
    </section>
  );
}
