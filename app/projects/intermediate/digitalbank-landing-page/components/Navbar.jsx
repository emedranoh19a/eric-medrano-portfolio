"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import Image from "next/image";
import { useRef, useState } from "react";
import { iconClose, iconHamburger } from "../imageIndex";
import Button from "./Button";
import Logo from "./Logo";
const links = ["Home", "About", "Contact", "Blog", "Careers"];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed w-full top-0 z-20 flex flex-col items-center gap-6">
        <MainBar setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </div>
      {isOpen && (
        <div className="lg:hidden absolute inset-0 bg-linear-to-b from-(--gradient-gray-start) to-transparent opacity-70 z-10"></div>
      )}
      {/* <div className="bg-red-500  z-10 absolute inset-0"></div> */}
    </>
  );
}
function Menu({ setIsOpen }) {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));
  return (
    <div className="lg:hidden px-6 sm:px-20 h-fit w-full">
      <ul
        ref={ref}
        className="bg-white rounded-lg w-full h-fit py-8 gap-4 flex flex-col items-center"
      >
        {links.map((link, i) => (
          <li key={i} className="">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
function MainBar({ setIsOpen, isOpen }) {
  return (
    <div className="bg-white flex justify-between w-full items-center px-6 sm:px-10 lg:px-[162px] py-6 lg:py-0">
      <Logo />
      <Links />
      <div className="hidden lg:block">
        <Button />
      </div>
      <button
        className="w-6 h-[11px] relative block lg:hidden cursor-pointer"
        onClick={() => setIsOpen((s) => !s)}
      >
        <Image
          src={isOpen ? iconClose : iconHamburger}
          alt="menu"
          fill
          className="object-contain"
          priority={true}
        />
      </button>
    </div>
  );
}
function Links() {
  return (
    <ul className="hidden lg:flex gap-8 preset-7-regular text-gray-600 items-center h-full">
      {links.map((link, i) => (
        <li
          key={i}
          className="group border-b-2 transition-colors border-transparent hover:border-green-400 h-20 w-14 relative cursor-pointer hover:underline decoration-green-400 transition-colors"
        >
          <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            {link}
          </span>
        </li>
      ))}
    </ul>
  );
}
