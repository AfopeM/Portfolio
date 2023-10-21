"use client";
import Link from "next/link";
import data from "../../public/data/techstack.json";
import { Card, CardTitle, Techstack, CardContent } from "@/components";

export default function About() {
  const { techstack } = data;
  return (
    <section id="about" className="relative space-y-16 pt-32 lg:h-screen">
      {/* ABOUT ME */}
      <Card fadeInDirection="left">
        <CardTitle
          emoji="✋"
          style="text-2xl"
          title="Hey there"
          alignment="lg:justify-start"
        />
        <CardContent>
          <p>
            I&apos;m Tobi a Frontend Developer with a passion for building
            visually appealing and Responsive websites with interactive content
            and animation.
          </p>
          <p>
            Check out my{" "}
            <Link
              target="_blank"
              href="/resume.pdf"
              as={`/resume.pdf`}
              className="text-brand-light group relative font-normal uppercase 
                tracking-widest"
            >
              Resume
              <span
                className="bg-brand-gradient brand-ease absolute -bottom-1 left-0 
                block h-0.5 w-1/2 bg-gradient-to-tr group-hover:w-full"
              />
            </Link>
          </p>
        </CardContent>
      </Card>

      {/* SKILLS */}
      <Card fadeInDirection="right" style="mx-auto max-w-5xl">
        <CardTitle
          emoji="💻"
          title="What am good at"
          alignment="lg:justify-center"
          style="text-xl lg:text-2xl text-center"
        />
        <CardContent>
          <Techstack techstack={techstack} />
        </CardContent>
      </Card>
    </section>
  );
}
