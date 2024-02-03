import React from "react";

type SectionTitleProp = {
  title: string;
  contentExtra?: string;
  content: string;
};

export default function SectionTitle({
  title,
  content,
  contentExtra,
}: SectionTitleProp) {
  return (
    <div
      className="text-brand-dim relative flex w-full flex-col gap-2 py-4
      text-center font-normal lg:flex-row lg:items-end lg:justify-between"
    >
      <span
        className="bg-brand-gradient absolute left-0 top-0 block h-[1px] 
        w-full opacity-25"
      />
      <h1
        className="text-brand-gradient text-3xl font-bold capitalize md:text-4xl 
        lg:max-w-md lg:text-start xl:text-5xl"
      >
        {title}
      </h1>

      <p className={`lg:w-96 lg:text-end ${contentExtra}`}>{content}</p>
      <span
        className="bg-brand-gradient absolute bottom-0 left-0 block h-[1px] 
        w-full opacity-25"
      />
    </div>
  );
}
