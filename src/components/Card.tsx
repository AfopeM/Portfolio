"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface CardProp {
  style?: string;
  fadeInDirection: string;
  children: React.ReactNode;
}

export function Card({ style, children, fadeInDirection }: CardProp) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn(fadeInDirection, 0.5)}
      className={`brand-card w-full max-w-2xl space-y-6 overflow-hidden text-center 
        tracking-wider lg:text-start ${style}`}
    >
      {children}
    </motion.div>
  );
}

{
  /* TITLE */
}
interface CardTitleProp {
  title: string;
  emoji?: string;
  alignment?: string;
  style?: string;
}

export function CardTitle({ emoji, title, style, alignment }: CardTitleProp) {
  return (
    <div
      className={`bg-brand-gradient-dim text-brand-light flex items-center justify-center 
        gap-2 rounded-t-2xl px-8 py-5 lg:px-10 ${alignment}`}
    >
      <h3 className={`font-bold uppercase ${style}`}>{title}</h3>
      {emoji ? <span className="rotate-12 text-2xl">{emoji}</span> : null}
    </div>
  );
}

{
  /* CONTENT */
}
interface CardContentProp {
  style?: string;
  children: React.ReactNode;
}

export function CardContent({ children, style }: CardContentProp) {
  return (
    <div
      className={`space-y-2 px-8 pb-8 text-xl font-light tracking-wider 
        lg:px-10 ${style}`}
    >
      {children}
    </div>
  );
}
