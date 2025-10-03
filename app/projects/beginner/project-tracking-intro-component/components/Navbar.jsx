"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { iconClose, iconHamburger, logo } from "../imageIndex";
const links = ["Products", "Features", "Pricing"];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((s) => !s);
  }
  return (
    <div className="relative flex justify-between  mb-16 lg:mb-32">
      <Logo />
      <DropdownIcon isOpen={isOpen} onToggle={toggle} />
      <NavbarLinks />
      {isOpen && (
        <AnimatePresence mode="wait">
          <Menu onClickOutside={() => setIsOpen(false)} />
        </AnimatePresence>
      )}
    </div>
  );
}
function Menu({ onClickOutside }) {
  const ref = useRef();
  useClickOutside(ref, onClickOutside);
  const listStyles = clsx(
    "lg:hidden w-full h-fit flex flex-col gap-6",
    "bg-white py-6 px-10 rounded-[3px]",
    "absolute z-10 left-0 top-full translate-y-10",
    "items-center shadow-lg"
  );
  return (
    <motion.ul
      className={listStyles}
      initial={{ height: 0 }}
      animate={{ height: "fit-content" }}
      exit={{ height: 0 }}
      ref={ref}
    >
      {links.map((link, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 + 0.15 }}
        >
          <NavbarLink text={link} key={i} className="preset-3 w-fit" />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ delay: 0.15 }}
        className="w-full"
      >
        <hr className="bg-blue-950 opacity-15 h-px block w-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4 * 0.15 + 0.15 }}
      >
        <NavbarLink text="Login" className="preset-3 w-fit" />
      </motion.div>
    </motion.ul>
  );
}
function Logo() {
  return (
    <div className="relative w-[23.36px] h-[23.82px] lg:w-[31.15px] lg:h-[31.76px]">
      <Image src={logo} alt="logo" fill className="object-contain" />
    </div>
  );
}

function DropdownIcon({ isOpen, onToggle }) {
  return (
    <buttons
      className="cursor-pointer w-6 h-4 relative lg:hidden"
      onClick={onToggle}
    >
      <Image
        src={!isOpen ? iconHamburger : iconClose}
        alt={!isOpen ? "menu" : "close"}
        fill
        className="object-contain"
      />
    </buttons>
  );
}

function NavbarLinks() {
  return (
    <ul className="hidden lg:flex w-fit gap-10 items-center">
      {links.map((link, i) => (
        <NavbarLink key={i} text={link} />
      ))}
      <div className="opacity-15 bg-blue-950 w-[6px] aspect-square rounded-full" />
      <NavbarLink text="Login" />
    </ul>
  );
}

function NavbarLink({ text, className }) {
  const textStyles = clsx(
    "preset-4-bold text-blue-950 uppercase",
    "cursor-pointer hover:underline",
    text === "Login" && "opacity-50",
    className
  );
  return <li className={textStyles}>{text}</li>;
}
