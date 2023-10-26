"use client";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { Contact } from "@/sections";
import { motion } from "framer-motion";
import type { ProjectProp } from "@/utils/model";
import { Card, Imagery, CardTitle, Techstack, CardContent } from "@/components";

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
  const { data: projects } = useSWR("projects", fetcher);

  if (projects) {
    const project = projects.find(
      (project) => project.name === params.projectId.replaceAll("-", " "),
    ) as ProjectProp;
    return (
      <div className="relative min-h-screen">
        {/* IMAGERY */}
        <Imagery />

        {/* HERO */}
        <motion.header
          id="hero"
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
            },
          }}
          className="brand-px relative flex h-screen w-full flex-col 
          items-center justify-center gap-y-4 xl:items-start"
        >
          {/* TITLE  */}
          <div className="z-10 -mt-8 text-center uppercase xl:text-start">
            <span
              className="text-brand-gradient text-lg font-bold tracking-widest 
              md:text-xl"
            >
              {project.type}
            </span>
            <h1 className="text-brand-light text-5xl font-bold md:text-8xl">
              {project.name}
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p
            className="max-w-2xl text-center text-xl font-light normal-case
            tracking-wider xl:text-start"
          >
            {project.desc}
          </p>

          {/* ROLES */}
          <p
            className="text-brand-gradient space-x-2 pb-8 text-xl font-bold 
            uppercase md:pb-12"
          >
            {`Role${project.roles.length > 1 ? "s" : ""}: `}
            {project.roles.map((role, i) => {
              return (
                <span
                  key={role}
                  className="text-brand-light font-light capitalize tracking-wider opacity-60"
                >
                  {role}
                  {i < project.roles.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>

          {/* TECHSTACK */}
          <Techstack techstack={project.techstack} />
        </motion.header>

        {/* PROJECT CONTENT */}
        <main className="brand-px text-center md:text-start">
          {/* FEATURES */}
          <section
            id="features"
            className="flex min-h-screen flex-col justify-center gap-8"
          >
            <div className="mt-20" />
            {/* SECTION HEADER */}
            <Card fadeInDirection="left">
              <CardTitle
                title="features"
                alignment="md:justify-start"
                style="text-2xl md:text-start"
              />
              <CardContent style="md:text-start">
                Here are features that I have implemented in this website.
              </CardContent>
            </Card>

            {/* CONTENT */}
            <div>
              <ul
                className="grid w-full grid-cols-1 overflow-hidden 
                rounded-xl lg:grid-cols-2 xl:grid-cols-3"
              >
                {project.features.map((feature, i) => {
                  return (
                    <li
                      key={feature.title}
                      className={`${
                        i % 2 === 0
                          ? "bg-brand-gradient-dimmer"
                          : "bg-brand-gradient-dim text-brand-dark"
                      } ${
                        project.features.length % 3 !== 0 &&
                        i === project.features.length - 1
                          ? "xl:col-span-full"
                          : ""
                      } brand-ease group relative grid h-60 grid-cols-1 content-center gap-4 
                      overflow-hidden px-8 text-center backdrop-blur-2xl lg:h-72 xl:gap-0 xl:hover:gap-4`}
                    >
                      <h3
                        className="brand-ease text-brand-light h-full text-2xl font-bold uppercase 
                        xl:mt-20 xl:group-hover:mt-0"
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="brand-ease text-lg font-light tracking-wider xl:bottom-0 
                        xl:translate-y-56 xl:group-hover:translate-y-0"
                      >
                        {feature.content}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          {/* CHALLENGES */}
          <section
            id="challenges"
            className="flex min-h-screen flex-col justify-center gap-8"
          >
            <div className="mt-20" />
            {/* SECTION HEADER */}
            <Card fadeInDirection="right">
              <CardTitle
                title="challenges"
                alignment="md:justify-start"
                style="text-2xl md:text-start"
              />
              <CardContent style="md:text-start">
                Here I discuss aspect of the project I struggled with and my
                creative solutions to those problems.
              </CardContent>
            </Card>

            {/* CONTENT */}
            <div
              className="flex flex-wrap justify-center gap-8 text-center 
              xl:text-start"
            >
              {project.challenges.map((challenge) => {
                return (
                  <article
                    key={challenge.challenge}
                    className="bg-brand-gradient-dimmer flex max-w-lg flex-col justify-center 
                    gap-4 rounded-xl px-8 py-10 tracking-wider backdrop-blur-2xl"
                  >
                    <h3 className="text-brand-light text-2xl font-bold capitalize">
                      {challenge.challenge}
                    </h3>
                    <p className="text-xl font-light leading-normal">
                      {challenge.solution}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* SCREENSHOTS */}
          <section
            id="screenshots"
            className="flex min-h-screen flex-col justify-center gap-8"
          >
            <div className="mt-20" />
            {/* SECTION HEADER */}
            <Card fadeInDirection="left">
              <CardTitle
                title="screenshots"
                alignment="md:justify-start"
                style="text-2xl md:text-start"
              />
              <CardContent style="md:text-start">
                Mobile screenshots of all the pages currently on the website.
              </CardContent>
            </Card>

            {/* CONTENT */}
            <div className="flex w-full flex-wrap justify-center gap-8">
              {project.screenshots.map((img) => {
                return (
                  <Image
                    key={img}
                    src={img}
                    width={0}
                    height={0}
                    sizes="90vw"
                    className=" h-auto w-60 object-contain"
                    alt={`${project.name} coverimage`}
                  />
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
          className="bg-brand-gradient-dim text-brand-light fixed bottom-8 left-1/2 z-30 mx-auto flex
          h-24 w-4/5 items-center justify-around rounded-xl backdrop-blur-xl 
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
                    link.name === "github" ? "w-9" : "w-7"
                  } brand-ease relative h-auto`}
                />
              </Link>
            );
          })}
        </motion.aside>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* HERO */}
      <header
        className="relative flex h-screen w-full flex-col items-center 
        justify-center gap-y-4 px-8 md:px-32 lg:items-start lg:px-64"
      >
        {/* TITLE  */}
        <div className="flex w-full flex-col items-center gap-4 lg:items-start">
          <div className="bg-brand-dark h-12 w-3/5 max-w-lg animate-pulse rounded-lg md:h-14" />
          <div className="bg-brand-dark h-16 w-full max-w-3xl animate-pulse rounded-lg md:h-32" />
        </div>

        {/* DESCRIPTION */}
        <div className="flex w-full flex-col items-center gap-2 pb-8 md:items-start">
          <div className="bg-brand-dark h-4 w-full max-w-2xl animate-pulse rounded" />
          <div className="bg-brand-dark h-4 w-full max-w-2xl animate-pulse rounded" />
          <div className="bg-brand-dark h-4 w-3/4 max-w-xl animate-pulse rounded" />
        </div>

        {/* TECHSTACK */}
        <div className="flex w-full justify-center gap-8 md:justify-start">
          {[1, 2, 3].map((item) => {
            return (
              <div
                key={item}
                className="bg-brand-dark h-10 w-24 animate-pulse rounded md:h-20 md:w-20"
              />
            );
          })}
        </div>
      </header>

      {/* LINKS */}
      <aside
        className="bg-brand-gradient text-brand-light fixed bottom-8 left-1/2 z-30 mx-auto
        flex h-24 w-4/5 -translate-x-1/2 animate-pulse items-center justify-around rounded-xl 
        md:w-1/2 lg:w-1/3"
      />
    </div>
  );
}
