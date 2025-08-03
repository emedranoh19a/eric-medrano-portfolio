"use client";
import { sidebarLinks } from "@/app/data";
import { cn } from "@/app/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cloneElement, useState } from "react";

const sharedStyles = cn(
  "fixed   aspect-square rounded-full",
  "w-[5em] lg:w-[7em]",
  //   "scale-[60%] sm:scale-[75%] lg:scale-100",
  "top-[1rem] right-[1rem]",
  "sm:top-[2.5rem] sm:right-[2.5rem]",
  "lg:top-[6rem] lg:right-[6rem]"
);
//     &__background {

//         @include respond(tab-port) {
//             top: 4.5rem;
//             right: 4.5rem;
//         }

//         @include respond(phone) {
//             top: 3.5rem;
//             right: 3.5rem;
//         }
//     }
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const sectionStyles = cn("relative z-50");
  const navContainerStyles = cn(
    "relative z-30 h-screen fixed top-0 left-0 w-screen overflow-y-scroll px-10"
  );
  return (
    <div className={sectionStyles}>
      <NavigationButton open={open} setOpen={() => setOpen((s) => !s)} />
      <Background open={open} />
      <AnimatePresence mode="wait">
        {open && (
          <nav className={navContainerStyles}>
            <ul className="flex flex-col gap-4 sm:gap-4 lg:gap-4 w-fit px-10 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center ">
              {sidebarLinks.map((item, i) => (
                <NavigationItem key={i} index={i} setOpen={setOpen} {...item} />
              ))}
            </ul>
          </nav>
        )}
      </AnimatePresence>
    </div>
  );
}
function Background({ open }) {
  const backgroundStyles = cn(
    sharedStyles,
    "z-10 bg-white/50 backdrop-blur-[0.2px] rounded-full transition duration-[1s] ease-in-out",
    open && "scale-[80]"
  );

  return <div className={backgroundStyles}>&nbsp;</div>;
}

function NavigationItem({ href, label, icon, setOpen, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.5 }}
      className="relative group font-normal"
    >
      <Link
        href={href}
        className="text-4xl sm:text-4xl lg:text-6xl  flex gap-10 justify-start items-center"
        onClick={() => setOpen(false)}
      >
        <div className="opacity-0 translate-x-40 group-hover:translate-x-20 group-hover:opacity-30 transition absolute inset-0  translate-y-4 ">
          <div className="relative w-full h-full">
            <Image
              fill
              className="object-contain"
              src="/portfolioAssets/ornamentals/brush.png"
            />
          </div>
        </div>
        <span className="scale-[0.8] text-5xl min-w-14 sm:min-w-16 sm:text-6xl lg:min-w-20 lg:text-8xl aspect-square group-hover:scale-[1.5] group-hover:-rotate-12 transition">
          {cloneElement(icon, {
            className: "fill-slate-700 group-hover:fill-slate-950",
          })}
        </span>{" "}
        <span className="transition text-slate-700 group-hover:text-slate-950 group-hover:translate-x-6 font-bold tracking-wide ">
          {label}
        </span>
      </Link>
    </motion.li>
  );
}

function NavigationButton({ open, setOpen }) {
  const buttonStyles = cn(
    sharedStyles,
    "z-50 relative group grid place-items-center fixed",
    "shadow-2xl",
    "bg-white/70 backdrop-blur-sm",
    "text-center cursor-pointer"
  );

  const sharedIconStyles = cn(
    "relative",
    "w-[60%] h-1.5 rounded-full",
    "inline-block relative transition"
  );
  const topLineStyles = cn(
    sharedIconStyles,
    "absolute inline-block inset-0",
    "w-full left-0 bg-slate-600",
    "transition ease-out",
    "-translate-y-4 group-hover:-translate-y-3",
    open &&
      "rotate-[135deg] top-1/2 -translate-y-1/2 group-hover:-translate-y-1/2"
  );
  const middleLineStyles = cn(
    sharedIconStyles,
    "w-full bg-slate-600",
    open && "opacity-0"
  );
  const bottomLineStyles = cn(
    sharedIconStyles,
    "absolute inline-block inset-0",
    "w-full left-0 bg-slate-600",
    "transition ease-out",
    "translate-y-4 group-hover:translate-y-3",
    open &&
      "rotate-[-135deg] top-1/2 -translate-y-1/2 group-hover:-translate-y-1/2"
  );
  const iconStyles = cn(sharedIconStyles);

  return (
    <button for="navi-toggle" className={buttonStyles} onClick={setOpen}>
      <div className={iconStyles}>
        <span className={topLineStyles}>&nbsp;</span>
        <span className={middleLineStyles}>&nbsp;</span>
        <span className={bottomLineStyles}>&nbsp;</span>
      </div>
    </button>
  );
}
