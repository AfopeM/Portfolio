"use client";
import Link from "next/link";
import Image from "next/image";
import { BrandBtn } from "@/components";

interface ProjectCardSnippetProp {
  desc: string;
  name: string;
  type: string;
  coverimage: string;
  links: { name: string; path: string }[];
}

export default function ProjectCards({
  name,
  desc,
  type,
  links,
  coverimage,
}: ProjectCardSnippetProp) {
  return (
    <article
      className="mx-auto flex w-full max-w-[700px] flex-col items-center gap-8
      text-center lg:text-start"
    >
      {/* IMAGERY*/}
      <Link
        type="button"
        as={`/${name.replace(" ", "-")}`}
        href={`/${name.replace(" ", "-")}`}
        className="relative block h-96 w-full overflow-hidden rounded-2xl
        bg-brand-dark"
      >
        <Image
          fill
          sizes="100vw"
          src={coverimage}
          alt={`${name} cover image`}
          className="brand-ease object-cover lg:hover:scale-105"
        />
      </Link>
      {/* DESC */}
      <div>
        <h2 className="space-x-4 font-bold uppercase">
          <span className="text-brand-dark-dim text-3xl ">{name}</span>
          <span className="text-brand-gradient text-xs tracking-wider lg:text-base">
            {type}
          </span>
        </h2>
        <p>{desc}</p>
        <div className="mt-8 flex justify-around lg:justify-start lg:gap-12">
          <BrandBtn type="link" content="Live Site" path={links[1].path} />
          <BrandBtn
            type="link"
            content="View More"
            path={`/${name.replace(" ", "-")}`}
          />
        </div>
      </div>
    </article>
  );
}
