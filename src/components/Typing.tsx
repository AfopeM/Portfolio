"use client";
import { motion } from "framer-motion";

interface TypingProp {
  title: string;
}

const containerVariant = {
  initial: { opacity: 0 },
  animate: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

const textVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export default function Typing({ title }: TypingProp) {
  return (
    <motion.p
      variants={containerVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="text-brand-gradient font-shrik uppercase"
      aria-hidden
    >
      {Array.from(title).map((letter, i) => (
        <motion.span variants={textVariant} key={i}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}
