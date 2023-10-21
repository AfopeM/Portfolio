"use client";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardSnippetProp {
  name: string;
  coverimage: string;
  type: string;
}

export default function ProjectCards({
  name,
  type,
  coverimage,
}: ProjectCardSnippetProp) {
  return (
    <article
      className="brand-ease border-brand-dark-50 bg-brand-dark group h-[500px] w-80 overflow-hidden 
        rounded-2xl border-[1px] backdrop-blur-xl md:h-[600px] md:w-96"
    >
      {/* IMAGERY*/}
      <Link
        type="button"
        className="relative h-full w-full"
        href={`/${name.replace(" ", "-")}`}
      >
        <Image
          fill
          width={0}
          height={0}
          sizes="70vw"
          src={coverimage}
          alt={`${name} cover image`}
          className="brand-ease object-cover object-top opacity-75 lg:opacity-100 
            lg:hover:scale-105 lg:hover:opacity-75"
        />
      </Link>

      {/* TITLE */}
      <div
        className="brand-ease bg-brand-gradient pointer-events-none absolute bottom-0 flex 
          h-[17%] w-full flex-col items-center justify-center uppercase lg:h-0 lg:translate-y-10
          lg:group-hover:h-[15%] lg:group-hover:translate-y-0"
      >
        <p className="text-brand-dark-80 text-sm font-bold tracking-wider lg:text-base">
          {type}
        </p>
        <h2 className="text-brand-light text-2xl font-bold">{name}</h2>
      </div>
    </article>
  );
}
