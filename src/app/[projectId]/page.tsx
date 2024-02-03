"use client";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Contact } from "@/sections";
import { motion } from "framer-motion";
import type { ProjectProp } from "@/utils/model";
import { Techstack, SectionTitle, BgImagery } from "@/components";

async function fetcher() {
  const res = await fetch(`/data/projects.json`);
  const { projects } = (await res.json()) as { projects: ProjectProp[] };
  return projects;
}

export default function Projects({
  params,
}: {
  params: { projectId: String };
}) {
  const [feature, setFeature] = useState(0);
  const { data: projects } = useSWR("projects", fetcher);

  if (projects) {
    const project = projects.find(
      (project) => project.name === params.projectId.replaceAll("-", " "),
    ) as ProjectProp;
    return (
      <div className="relative">
        <BgImagery />
        <div className="relative z-20">
          {/* HERO */}
          <header
            id="hero"
            className="brand-px flex h-[950px] w-full flex-col items-center 
          justify-center gap-y-4"
          >
            {/* TITLE  */}
            <div className="text-center uppercase">
              <span
                className="text-brand-gradient font-normal tracking-widest 
              md:text-xl"
              >
                {project.type}
              </span>
              <h1 className="brand-ease text-5xl font-bold md:text-7xl">
                {project.name}
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p
              className="brand-ease text-brand-dark-dim max-w-2xl text-center text-lg 
            font-light lg:text-2xl"
            >
              {project.desc}
            </p>

            {/* ROLES */}
            <p className="space-x-2 py-8 text-xl font-bold uppercase">
              <span className="text-brand-gradient">{`Role${
                project.roles.length > 1 ? "s" : ""
              }: `}</span>
              {project.roles.map((role, i) => {
                return (
                  <span
                    key={role}
                    className="text-brand-dark-dim font-light capitalize tracking-wider"
                  >
                    {role}
                    {i < project.roles.length - 1 ? "," : ""}
                  </span>
                );
              })}
            </p>
          </header>

          {/* PROJECT CONTENT */}
          <main>
            {/* TECHSTACK & IMAGE */}
            <section
              id="techstack"
              className="brand-px flex flex-col items-center gap-8 bg-brand-dark 
              py-32"
            >
              {/* SECTION HEADER */}
              <SectionTitle
                title="Techstack"
                content="Built using these tools"
                contentExtra="text-brand-light-dim"
              />
              {/* CONTENT */}
              <Techstack
                techstack={project.techstack}
                extra="text-brand-light max-w-4xl"
              />
              <div className="relative h-[500px] w-full max-w-4xl">
                <Image
                  fill
                  sizes="80vw"
                  width={0}
                  height={0}
                  src={project.displayimage}
                  className="object-contain"
                  alt={`${project.name} cover image`}
                />
              </div>
            </section>

            {/* FEATURES */}
            <section
              id="features"
              className="brand-px flex h-[950px] flex-col items-center justify-center gap-8 py-32"
            >
              {/* SECTION HEADER */}
              <SectionTitle
                title="Features"
                content="Here are features that I have implemented in this website."
              />
              {/* CONTENT */}
              <div className="flex h-3/4 flex-col items-center justify-center gap-4">
                {project.features.map((feat, i) => {
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-label="e"
                      onClick={() => setFeature(i)}
                      className={`${
                        feature === i
                          ? "h-40 gap-y-2 px-6 md:h-40 md:px-8 lg:h-32"
                          : "h-0 py-8"
                      } bg-brand-gradient-dim-x brand-ease group flex w-full max-w-2xl 
                    flex-col justify-center overflow-hidden rounded-2xl  text-center`}
                    >
                      <h2 className="font-bold uppercase tracking-wider">
                        {feat.title}
                      </h2>
                      <p
                        className={`${
                          feature === i
                            ? "h-16 translate-y-0 md:h-12"
                            : "h-0 translate-y-8"
                        } brand-ease`}
                      >
                        {feat.content}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* CHALLENGES */}
            <section
              id="challenges"
              className="brand-px -mt-24 flex flex-col items-center gap-8 py-32"
            >
              {/* SECTION HEADER */}
              <SectionTitle
                title="Challenges"
                content="Here I discuss aspect of the project I struggled with and my
              creative solutions to those problems."
              />

              {/* CONTENT */}
              <div
                className="flex max-w-4xl flex-wrap justify-center gap-20 
              text-center md:text-start"
              >
                {project.challenges.map((challenge, i) => {
                  return (
                    <article
                      key={challenge.challenge}
                      className="flex flex-col justify-center gap-4 tracking-wider"
                    >
                      <h3 className="text-2xl font-bold capitalize text-brand-dark">
                        <span className="text-brand-gradient">{i + 1}. </span>
                        {challenge.challenge}
                      </h3>
                      <p className="text-lg font-light leading-normal">
                        {challenge.solution}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          </main>

          {/* CONTACT */}
          <Contact />

          {/* LINKS */}
          <motion.aside
            viewport={{ once: true }}
            initial={{ scale: 0, opacity: 0, translateX: "-50%" }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.5,
              },
            }}
            className="bg-brand-gradient-dim fixed bottom-8 left-1/2 z-30 mx-auto flex h-20
          w-4/5 items-center justify-around rounded-xl text-brand-light backdrop-blur-xl 
          md:w-1/2 lg:w-1/3"
          >
            {project.links.map((link) => {
              return (
                <Link href={link.path} as={link.path} key={link.name}>
                  <Image
                    priority
                    width={0}
                    height={0}
                    sizes="10vw"
                    alt={`${link.name} icon`}
                    src={`/icon/icon-${link.name}.svg`}
                    className={`${
                      link.name === "github" ? "w-8" : "w-6"
                    } brand-ease relative h-auto`}
                  />
                </Link>
              );
            })}
          </motion.aside>
        </div>
      </div>
    );
  }

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center 
      gap-8 bg-brand-dark"
    >
      <div className="brand-ease text-6xl font-bold text-brand-light lg:text-8xl">
        <span>A</span>
        <span className="  text-brand-gradient -ml-2 lg:-ml-3">M</span>
      </div>
      <div className="h-[2px] w-2/3 overflow-hidden rounded">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: "100%",
            transition: {
              duration: 2.5,
            },
          }}
          className="bg-brand-gradient h-2"
        />
      </div>
    </section>
  );
}
