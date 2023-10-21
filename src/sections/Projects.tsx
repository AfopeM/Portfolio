"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import data from "../../public/data/projects.json";
import { Card, CardTitle, CardContent, ProjectCards } from "@/components";

export default function Projects() {
  const { projects } = data;
  return (
    <section id="projects" className="relative space-y-16 pt-32">
      {/* PROJECT HEADER & TAGLINE */}
      <Card fadeInDirection="left">
        <CardTitle
          title="ExpLore my Projects"
          alignment="md:justify-start"
          style="text-2xl md:text-start"
        />
        <CardContent style="md:text-start">
          Embark on a visual voyage that fuses both design & functionality.
        </CardContent>
      </Card>

      {/* PROJECT CARDS */}
      <motion.section
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-12"
      >
        {projects.map((project) => {
          return <ProjectCards key={project.name} {...project} />;
        })}
      </motion.section>
    </section>
  );
}
