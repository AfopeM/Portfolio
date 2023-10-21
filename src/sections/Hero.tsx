"use client";
import { Typing } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { handleScrollTo } from "@/utils";
import { useMobileScreen } from "@/hooks/useMobileScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const mobile = useMobileScreen();
  return (
    <motion.section
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
      className="text-brand-light relative flex h-screen flex-col justify-center"
    >
      {/* INTRODUCTION */}
      <div className="relative space-y-12 text-center uppercase lg:text-start">
        {/* TITLE  */}
        <h2
          className="brand-ease mx-auto w-[350px] text-[2.5rem] font-bold leading-none 
          sm:w-[400px] sm:text-[2.8rem] md:w-[505px] md:text-6xl lg:mx-0 lg:w-[800px] 
          lg:text-7xl"
        >
          Visual storytelling through code and
          <Typing title="design" />
        </h2>

        {/* BUTTON */}
        {mobile ? (
          <motion.button
            type="button"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.8)}
            onClick={() => handleScrollTo("projects")}
            className="bg-brand-gradient mx-auto flex w-44 items-center justify-around 
              rounded-xl px-4 py-3 uppercase tracking-wider"
          >
            View Projects
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="rotate-[90deg] text-lg"
            />
          </motion.button>
        ) : (
          <motion.button
            type="button"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            variants={fadeIn("up", 0.8)}
            onClick={() => handleScrollTo("projects")}
            className="bg-brand-dark group mx-auto flex w-44 items-center justify-around
            overflow-hidden rounded-xl px-4 py-3 backdrop-blur-xl lg:mx-0"
          >
            <div
              className="bg-brand-gradient brand-ease absolute bottom-0 h-full w-full
              group-hover:h-full md:h-0"
            />
            <p className="relative uppercase tracking-wider">View Projects</p>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="brand-ease relative rotate-[90deg] text-lg group-hover:rotate-[90deg]
              md:rotate-0"
            />
          </motion.button>
        )}
      </div>
    </motion.section>
  );
}
