import Link from "next/link";
import { handleScrollTo } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type BrandBtnProp = {
  path: string;
  type: string;
  content: string;
};

export default function BrandBtn({ type, path, content }: BrandBtnProp) {
  if (type === "link") {
    return (
      <Link
        as={path}
        href={path}
        target="_blank"
        className="text-brand-dark-dim group relative font-light"
      >
        {content}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="brand-ease ml-2 rotate-[-35deg] text-xs group-hover:rotate-90"
        />
        <span
          className="bg-brand-gradient brand-ease absolute -bottom-[2px] 
          left-0 block h-[1px] w-1/2 group-hover:w-full"
        />
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={content}
      onClick={() => {
        handleScrollTo(path);
      }}
      className="text-brand-dark-dim group relative font-light"
    >
      {content}
      <FontAwesomeIcon
        icon={faArrowRight}
        className="brand-ease ml-2 rotate-[-35deg] text-xs group-hover:rotate-90"
      />
      <div
        className="bg-brand-gradient brand-ease absolute -bottom-[2px] 
        left-0 h-[1px] w-1/2 group-hover:w-full"
      />
    </button>
  );
}
