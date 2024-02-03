"use client";
import { BrandBtn } from "@/components";

export default function Hero() {
  return (
    <section
      id="hero"
      className="brand-px flex h-[950px] flex-col items-center justify-center 
      text-center"
    >
      {/* INTRODUCTION */}
      <p className="text-brand-dim">
        I&apos;m{" "}
        <span className="font-bold text-brand-dark">Afope Matilukuro</span>
      </p>
      {/* TITLE  */}
      <h1
        className="text-brand-gradient brand-ease text-5xl font-bold capitalize 
        md:text-7xl"
      >
        front-end <br />
        web developer
      </h1>
      <p className="brand-ease max-w-2xl pt-4 text-lg lg:pt-8 lg:text-3xl">
        I build visually appealing responsive websites with interactive content
        and animation. Creating a fusion of design and functionality.
      </p>

      {/* BUTTON */}
      <div className="flex w-full justify-around pt-12">
        <BrandBtn content={"View Projects"} type={"button"} path={"projects"} />
        <BrandBtn
          type={"link"}
          content={"View Resume"}
          path={
            "https://docs.google.com/document/d/1u3gggggy02V5iOuDCjjfkNmoa__QEiRPTf2VX9ibH2U/edit?usp=sharing"
          }
        />
      </div>
    </section>
  );
}
