"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { handleScrollTo } from "@/utils";
import { usePathname } from "next/navigation";

//PATHS
const paths = ["skills", "projects", "contact", "resume"];
const projectPath = ["techstack", "features", "challenges", "contact"];

//NAV ANIMATION
const navVariant = {
  hidden: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      delay: 1.5,
    },
  },
};

export default function Nav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  //PROJECT PAGE NAVIGATION
  if (pathname !== "/") {
    return (
      <motion.nav
        variants={navVariant}
        initial="hidden"
        whileInView="show"
        className="brand-card fixed left-1/2 top-8 z-20 flex h-16 w-1/2 max-w-3xl
      items-center justify-between px-8"
      >
        {/* LOGO */}
        <Link
          href={"/"}
          as={"/"}
          className="text-2xl font-bold text-brand-light"
        >
          <span>A</span>
          <span className="text-brand-gradient -ml-1">M</span>
        </Link>

        {/* BURGER MENU */}
        <motion.button
          initial={{ rotate: 0 }}
          animate={{ rotate: openMenu ? 180 : 0 }}
          whileHover={{ scale: openMenu ? 0.9 : 1.1 }}
          transition={{
            scale: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            },
          }}
          className="group relative h-6 w-6"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? (
            <Image
              fill
              sizes="1vw"
              alt="menu close"
              src="/icon/icon-close.svg"
              className="brand-ease object-cover"
            />
          ) : (
            <Image
              fill
              sizes="1vw"
              alt="burger menu"
              src="/icon/icon-menu.svg"
              className="brand-ease object-cover"
            />
          )}
        </motion.button>

        {/* MOBILE MENU */}
        <motion.ul
          initial={{ y: -600 }}
          animate={{ y: openMenu ? 250 : -300, x: -30 }}
          transition={{ type: "spring", stiffness: 125, damping: 12 }}
          className="bg-brand-dark-dim absolute flex h-96 w-full flex-col items-center 
          overflow-hidden rounded-2xl text-center uppercase tracking-widest backdrop-blur-xl"
        >
          {projectPath.map((path) => {
            return (
              <li key={path} className="h-full">
                <button
                  type="button"
                  onClick={() => {
                    setOpenMenu(false);
                    handleScrollTo(path);
                  }}
                  className="brand-ease text-brand-light-dim group flex h-full w-full 
                  items-center justify-center gap-4 uppercase tracking-widest hover:scale-110 
                  hover:text-brand-light"
                >
                  {path}
                </button>
              </li>
            );
          })}
        </motion.ul>
      </motion.nav>
    );
  }

  //HOME PAGE NAVIGATION
  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      whileInView="show"
      className="brand-card text-brand-light-dim fixed left-1/2 top-8 z-20 
      flex h-16 w-1/2 max-w-3xl items-center justify-between px-8"
    >
      {/* LOGO */}
      <button
        type="button"
        aria-label="logo"
        onClick={() => handleScrollTo("hero")}
        className="text-2xl font-bold text-brand-light"
      >
        <span>A</span>
        <span className="text-brand-gradient -ml-1">M</span>
      </button>

      {/* BURGER MENU */}
      <motion.button
        initial={{ rotate: 0 }}
        animate={{ rotate: openMenu ? 180 : 0 }}
        whileHover={{ scale: openMenu ? 0.9 : 1.1 }}
        transition={{
          scale: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.5,
          },
        }}
        aria-label="menu button"
        type="button"
        className="group relative h-6 w-6"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {openMenu ? (
          <Image
            fill
            sizes="1vw"
            alt="menu close"
            src="/icon/icon-close.svg"
            className="brand-ease object-cover"
          />
        ) : (
          <Image
            fill
            sizes="1vw"
            alt="burger menu"
            src="/icon/icon-menu.svg"
            className="brand-ease object-cover"
          />
        )}
      </motion.button>

      {/* MOBILE MENU */}
      <motion.ul
        initial={{ y: -600 }}
        animate={{ y: openMenu ? 190 : -300, x: -30 }}
        transition={{ type: "spring", stiffness: 125, damping: 12 }}
        className="bg-brand-dark-dim absolute flex h-72 w-full flex-col items-center 
        rounded-2xl uppercase backdrop-blur-xl"
      >
        {paths.map((path) => {
          return (
            <li key={path} className="h-full">
              {path !== "resume" ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpenMenu(false);
                    handleScrollTo(path);
                  }}
                  className="brand-ease text-brand-light-dim flex h-full w-full items-center 
                  justify-center uppercase hover:scale-110 hover:text-brand-light"
                >
                  {path}
                </button>
              ) : (
                <Link
                  target="_blank"
                  onClick={() => setOpenMenu(false)}
                  className="brand-ease group flex h-full w-full items-center justify-center 
                  hover:scale-110 hover:text-brand-light"
                  as="https://docs.google.com/document/d/1u3gggggy02V5iOuDCjjfkNmoa__QEiRPTf2VX9ibH2U/edit?usp=sharing"
                  href="https://docs.google.com/document/d/1u3gggggy02V5iOuDCjjfkNmoa__QEiRPTf2VX9ibH2U/edit?usp=sharing"
                >
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
