"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { handleScrollTo } from "@/utils";
import { usePathname } from "next/navigation";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// PATHS
const paths = ["about", "projects", "contact", "resume"];
const projectPath = [
  "hero",
  "features",
  "challenges",
  "screenshots",
  "contact",
];

//   NAV ANIMATION
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
        className="brand-card fixed left-1/2 top-8 z-20 flex h-16 w-3/4 max-w-lg 
      items-center justify-between px-8"
      >
        {/* LOGO */}
        <Link href={"/"} as={"/"}>
          <Image
            width={0}
            height={0}
            alt="logo"
            src="/icon/logo.svg"
            className="brand-ease h-9 w-9 hover:scale-110"
          />
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
              className="brand-ease object-cover opacity-50 group-hover:opacity-100"
            />
          ) : (
            <Image
              fill
              sizes="1vw"
              alt="burger menu"
              src="/icon/icon-menu.svg"
              className="brand-ease object-cover opacity-50 group-hover:opacity-100"
            />
          )}
        </motion.button>

        {/* MOBILE MENU */}
        <motion.ul
          initial={{ y: -600 }}
          animate={{ y: openMenu ? 220 : -300, x: -30 }}
          transition={{ type: "spring", stiffness: 125, damping: 12 }}
          className="bg-brand-dark absolute grid h-80 w-full grid-rows-5 items-center 
        overflow-hidden rounded-2xl text-center uppercase tracking-widest"
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
                  className={`${
                    path === "contact"
                      ? "brand-ease bg-brand-gradient text-brand-light/90 hover:text-brand-light group flex h-full w-full items-center justify-center gap-2 text-lg font-bold uppercase tracking-widest hover:gap-4"
                      : "brand-ease hover:text-brand-light group flex h-full w-full items-center justify-center gap-4 uppercase tracking-widest hover:scale-110"
                  }`}
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

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      whileInView="show"
      className="brand-card fixed left-1/2 top-8 z-20 flex h-16 w-3/4 max-w-lg 
      items-center justify-between px-8"
    >
      {/* LOGO */}
      <button
        type="button"
        aria-label="logo"
        onClick={() => handleScrollTo("hero")}
      >
        <Image
          width={0}
          height={0}
          alt="logo"
          src="/icon/logo.svg"
          className="brand-ease h-9 w-9 hover:scale-110"
        />
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
            className="brand-ease object-cover opacity-50 group-hover:opacity-100"
          />
        ) : (
          <Image
            fill
            sizes="1vw"
            alt="burger menu"
            src="/icon/icon-menu.svg"
            className="brand-ease object-cover opacity-50 group-hover:opacity-100"
          />
        )}
      </motion.button>

      {/* MOBILE MENU */}
      <motion.ul
        initial={{ y: -600 }}
        animate={{ y: openMenu ? 190 : -300, x: -30 }}
        transition={{ type: "spring", stiffness: 125, damping: 12 }}
        className="bg-brand-dark absolute grid h-72 w-full grid-rows-4 items-center 
        overflow-hidden rounded-2xl text-center uppercase tracking-widest"
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
                  className="brand-ease hover:text-brand-light group flex h-full w-full
                  items-center justify-center gap-4 uppercase tracking-widest hover:scale-110"
                >
                  {path}
                </button>
              ) : (
                <Link
                  target="_blank"
                  as="/resume.pdf"
                  href="/resume.pdf"
                  onClick={() => setOpenMenu(false)}
                  className="brand-ease bg-brand-gradient text-brand-light/90 hover:text-brand-light 
                  group flex h-full w-full items-center justify-center gap-2 text-lg font-bold hover:gap-4"
                >
                  <p className="brand-ease group-hover:scale-125">{path}</p>
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="brand-ease w-4 group-hover:scale-125"
                  />
                </Link>
              )}
            </li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
