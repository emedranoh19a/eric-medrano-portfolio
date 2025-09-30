"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useState } from "react";
import { iconHamburger, logo } from "../imageIndex";
const links = ["Products", "Features", "Pricing"];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((s) => !s);
  }
  return (
    <div className="flex justify-between  mb-16 lg:mb-32">
      <Logo />
      <DropdownIcon isOpen={isOpen} onToggle={toggle} />
      <NavbarLinks />
    </div>
  );
}

function Logo() {
  return (
    <div className="relative w-[23.36px] h-[23.82px] lg:w-[31.15px] lg:h-[31.76px]">
      <Image src={logo} alt="logo" fill className="object-contain" />
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="w-6 h-4 relative lg:hidden">
      <Image src={iconHamburger} alt="menu" fill className="object-contain" />
    </div>
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

function NavbarLink({ text }) {
  const textStyles = cn(
    "preset-4-bold text-blue-950",
    "cursor-pointer hover:underline",
    text === "Login" && "opacity-50"
  );
  return <li className={textStyles}>{text}</li>;
}
