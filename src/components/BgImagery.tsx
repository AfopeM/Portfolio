"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function BgImagery() {
  const path = usePathname();
  return (
    <div className="absolute z-[5] h-full w-full overflow-hidden opacity-10">
      {/* 1 */}
      <Image
        priority
        width={450}
        height={450}
        sizes="50vw"
        alt={`bg image`}
        src="/abstract_1.png"
        className="brand-ease absolute -translate-x-24 translate-y-8 rotate-45
        xl:translate-x-8"
      />

      {/* 2 */}
      <Image
        priority
        width={450}
        height={450}
        sizes="50vw"
        alt={`bg image`}
        src="/abstract_2.png"
        className="brand-ease absolute right-0 translate-x-48 translate-y-[500px] 
        rotate-90 xl:-translate-x-8"
      />

      {/* 3 */}
      <Image
        priority
        width={450}
        height={450}
        sizes="50vw"
        alt={`bg image`}
        src="/abstract_2.png"
        className={`${
          path === "/" ? "translate-y-[1550px]" : "translate-y-[1950px]"
        } brand-ease absolute -translate-x-36 xl:translate-x-8 `}
      />

      {/* 4 */}
      <Image
        priority
        width={450}
        height={450}
        sizes="50vw"
        alt={`bg image`}
        src="/abstract_1.png"
        className={`${
          path === "/" ? "translate-y-[2500px]" : "translate-y-[3000px]"
        } brand-ease absolute right-0 translate-x-36 xl:-translate-x-8`}
      />
    </div>
  );
}
