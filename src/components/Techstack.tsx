"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMobileScreen } from "@/hooks/useMobileScreen";

interface TechStackProp {
  techstack: string[];
}

// TECHSTACK ANIMATION
const TechStackVariant = {
  initial: {
    x: "-50%",
    y: -55,
    scale: 0,
    opacity: 0,
  },
  hover: {
    scale: 1,
    opacity: 100,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};
export default function Techstack({ techstack }: TechStackProp) {
  const mobile = useMobileScreen();
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {techstack.map((tech) => {
        if (mobile)
          return (
            <li
              key={tech + "m"}
              className={`brand-card bg-brand-gradient-dimmer flex justify-center rounded-xl 
                px-4 py-2 text-sm font-bold uppercase text-brand-light`}
            >
              {tech}
            </li>
          );

        return (
          <motion.li
            key={tech}
            initial="initial"
            animate="initial"
            whileHover="hover"
            className={`group/Techstack bg-brand-gradient-dimmer relative flex 
              items-center gap-4 rounded-lg p-4`}
          >
            <Image
              width={0}
              height={0}
              sizes="10vw"
              src={`/techstack/${tech}.svg`}
              alt={`${tech}-icon`}
              className="brand-ease h-8 w-8 object-contain opacity-40     
                group-hover/Techstack:opacity-100"
            />
            <motion.span
              variants={TechStackVariant}
              className="bg-brand-gradient absolute left-1/2 top-0 min-w-max     
                rounded-lg px-4 py-2 text-sm font-bold uppercase text-brand-light
                after:absolute after:-bottom-1 after:left-1/2 after:block after:h-2 
                after:w-2 after:-translate-x-1/2 after:rotate-45 after:bg-purple-400  
                md:text-base"
            >
              {tech}
            </motion.span>
          </motion.li>
        );
      })}
    </ul>
  );
}
