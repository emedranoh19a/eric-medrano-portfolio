"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { navigationLinks } from "../../data";
import { hamburger } from "../../imageIndex";
import Button from "../Button";
import Logo from "./Logo";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="sticky top-0 z-50">
      <div className="relative z-0 flex justify-between py-[22px]">
        <div className="bg-white -z-10 absolute h-full w-screen left-1/2 -translate-x-[50vw] top-0" />
        <HamburgerButton setIsOpen={setIsOpen} />
        <div className="flex flex-row gap-[58px]">
          <Logo className="place-self-center shrink-0" />
          <NavigationLinks />
        </div>
        <Button text="Get Scooting" className="hidden md:block" />
        {/* This div for centering the logo on flexbox */}
        <div className="md:hidden w-[38px] sm:w-[54px]" />
      </div>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
function HamburgerButton({ setIsOpen }) {
  return (
    <button
      className="w-4 h-5 relative md:hidden cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <Image src={hamburger} alt="menu" fill className="object-contain" />
    </button>
  );
}
//about, location and careers

function NavigationLinks() {
  return (
    <ul className="hidden  text-dim-grey ml:[58px] gap-8 items-center md:flex justify-between font-space-mono text-[15px] font-bold leading-[25px] tracking-none">
      {navigationLinks.map((navigationLink, i) => (
        <li className="cursor-pointer" key={i}>
          <Link href={navigationLink.link}> {navigationLink.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function Sidebar({ isOpen, setIsOpen }) {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));
  const sidebarStyles = cn(
    "md:hidden absolute top-0 h-screen left-1/2  -z-10 bg-[#333a44] w-fit transition",
    isOpen ? "-translate-x-[50vw]" : "-translate-x-[calc(100%+50vw)]"
  );
  return (
    <div ref={ref} className={sidebarStyles}>
      {/* padding at the top is the Navbar height (approximated value) AND 64 of normal padding */}
      <div className="flex flex-col justify-between h-full pt-36 pb-6 px-8">
        <ul className="flex flex-col gap-6 font-space-mono text-[18px] text-light-grey font-bold leading-[25px] tracking-none">
          {navigationLinks.map((navigationLink, i) => (
            <li key={i}>
              <Link href={navigationLink.link} onClick={() => setIsOpen(false)}>
                {" "}
                {navigationLink.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          text="Get Scooting"
          className="whitespace-nowrap"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}
