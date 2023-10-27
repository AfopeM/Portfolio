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
      className="brand-ease group h-[500px] w-80 rounded-2xl border-[1px] border-brand-dark-50 
        bg-brand-dark backdrop-blur-xl md:h-[600px] md:w-96 md:overflow-hidden"
    >
      {/* IMAGERY*/}
      <Link
        type="button"
        as={`/${name.replace(" ", "-")}`}
        href={`/${name.replace(" ", "-")}`}
        className="relative block h-[80%] w-full lg:h-full"
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
        className="brand-ease bg-brand-gradient // flex h-[20%] w-full flex-col 
        items-center justify-center rounded-b-xl uppercase lg:pointer-events-none 
        lg:absolute lg:bottom-0 lg:h-0 lg:translate-y-10 lg:group-hover:h-[15%] 
        lg:group-hover:translate-y-0"
      >
        <p className="text-sm font-bold tracking-wider text-brand-dark-80 lg:text-base">
          {type}
        </p>
        <h2 className="text-2xl font-bold text-brand-light">{name}</h2>
      </div>
    </article>
  );
}
