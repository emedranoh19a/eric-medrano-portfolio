"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { navigationLinks } from "../../data";
import { iconHamburger } from "../../imageIndex";
import Button from "./Button";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className=" relative z-10 flex justify-between items-center mb-14 sm:mb-16 lg:mb-30">
      <Logo />
      <Links />
      <MobileNavigation />
      <Button label="Get Started" className="hidden lg:block" />
    </nav>
  );
}
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburguerContainer = clsx(
    "lg:hidden relative cursor-pointer",
    "w-[20.5px] aspect-square shrink-0 "
  );
  return (
    <>
      <button
        className={hamburguerContainer}
        onClick={() => setIsOpen((s) => !s)}
      >
        <Image src={iconHamburger} className="object-contain" alt="menu" fill />
      </button>
      {isOpen && <Menu onClose={() => setIsOpen(false)} />}
    </>
  );
}
function Links() {
  return (
    <ul className="hidden lg:flex flex-row gap-8 text-blue-950 preset-5-medium">
      {navigationLinks.map((navigationLink, i) => (
        <li key={i} className="hover:opacity-50 cursor-pointer">
          {navigationLink}
        </li>
      ))}
    </ul>
  );
}
