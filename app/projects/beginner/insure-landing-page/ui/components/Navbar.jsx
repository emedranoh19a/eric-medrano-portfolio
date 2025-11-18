"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import {
  bgPatternMobileNav,
  bgPatternTabletNav,
  iconHamburguer,
} from "../../imageIndex";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky z-0 top-0 z-10 flex py-5 justify-between items-center">
      <div className="bg-white absolute -z-10 h-full w-screen left-1/2 -translate-x-[50vw]" />{" "}
      <Logo />
      <DesktopNavbar />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}

function DesktopNavbar() {
  return (
    <div className="hidden lg:flex gap-6 w-fit">
      <ul className="preset-8 text-gray-700 flex gap-6 items-center">
        <li className="cursor-pointer hover:text-gray-950 transition-colors">
          How we work
        </li>
        <li className="cursor-pointer hover:text-gray-950 transition-colors">
          Blog
        </li>
        <li className="cursor-pointer hover:text-gray-950 transition-colors">
          Account
        </li>
      </ul>
      <Button variant="filled" />
    </div>
  );
}

function MobileMenu({ menuOpen, setMenuOpen }) {
  const menuContainerStyles = clsx(
    "absolute w-screen h-screen pt-20",
    "transition duration-500 ease-out",
    "bg-gray-950 top-0 left-1/2  -z-20",
    menuOpen ? "-translate-x-[50vw]" : "translate-x-[100vw]"
  );
  return (
    <>
      <button
        className="lg:hidden bg-red-500 size-8 cursor-pointer relative"
        onClick={() => setMenuOpen((s) => !s)}
      >
        <Image
          src={iconHamburguer}
          fill
          className="object-contain"
          alt="menu"
        />
      </button>
      <div className={menuContainerStyles}>
        <div className="relative w-full h-full  pt-16">
          <ul className="mx-auto flex flex-col gap-6 text-center uppercase preset-6 text-white">
            <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              How we Work
            </li>
            <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Blog
            </li>
            <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Account
            </li>
            <li>
              <Button variant="outline" onClick={() => setMenuOpen(false)} />
            </li>
          </ul>
          <MenuOrnamentals />
        </div>
      </div>
    </>
  );
}

function MenuOrnamentals() {
  return (
    <div className="absolute w-full h-[220px] bottom-0 left-0">
      <Image
        src={bgPatternMobileNav}
        alt=""
        className="object-fill sm:hidden"
        fill
      />
      <Image
        src={bgPatternTabletNav}
        alt=""
        className="object-fill hidden sm:block"
        fill
      />
    </div>
  );
}
