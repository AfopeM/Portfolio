"use client";
import Image from "next/image";

export default function Imagery() {
  return (
    <>
      {["main", "secondary", "tertiary", ""].map((item) => {
        return (
          <Image
            key={item}
            priority
            width={0}
            height={0}
            sizes="10vw"
            alt="statue"
            src="/statue.png"
            className={`${
              item === "main"
                ? "opacity-30 lg:right-0 lg:-translate-x-48 lg:rotate-[20deg] lg:opacity-50 xl:w-[450px]"
                : item === "secondary"
                ? "hidden rotate-[65deg] md:block md:opacity-0 lg:w-56 lg:-translate-y-1/4 lg:translate-x-1/3 lg:opacity-30"
                : item === "tertiary"
                ? "hidden md:block md:opacity-0 lg:w-36 lg:-translate-x-3/4 lg:translate-y-[150%] lg:-rotate-45 lg:opacity-30"
                : "left-0 hidden w-1/4 max-w-[200px] translate-x-2/4 rotate-2 md:block md:opacity-0 lg:translate-y-[90%] lg:rotate-[30deg] lg:opacity-30"
            } brand-ease fixed bottom-1/2 right-1/2 h-auto w-[400px] translate-x-1/2 translate-y-1/2 blur-xl`}
          />
        );
      })}
    </>
  );
}
