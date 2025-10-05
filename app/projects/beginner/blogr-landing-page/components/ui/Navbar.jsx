"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { menus } from "../../data";
import { iconArrowLight, iconClose, iconHamburger } from "../../imageIndex";
import Button from "./Button";
import Logo from "./Logo";
import MobileMenu from "./Menu";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center relative"
      id="blogr-landing-page"
    >
      <div className="flex gap-16 h-full items-center">
        <Logo />
        <DesktopMenus menus={menus} />
      </div>
      <div className="hidden lg:flex gap-8">
        <Button
          text="Login"
          className="bg-transparent text-white px-0 hover:bg-transparent hover:underline"
        />
        <Button text="Sign Up" />
      </div>
      <HamburguerMenu />
    </nav>
  );
}

function HamburguerMenu() {
  const [target, setTarget] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTarget(document.getElementById("blogr-landing-page"));
  }, []);
  return (
    <>
      <button
        className="lg:hidden w-8 h-[18px] relative cursor-pointer"
        onClick={() => setIsOpen((s) => !s)}
      >
        <Image
          src={!isOpen ? iconHamburger : iconClose}
          alt="Menu Icon"
          fill
          className="object-contain"
        />
      </button>
      {target &&
        isOpen &&
        createPortal(<MobileMenu onClose={() => setIsOpen(false)} />, target)}
    </>
  );
}

function DesktopMenus({ menus }) {
  return (
    <ul className="hidden lg:flex gap-8 h-full">
      {menus.map((menu, i) => {
        return <Menu key={i} {...menu} />;
      })}
    </ul>
  );
}

function Menu({ label, submenus }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="h-full inline-block">
      <button
        className="h-full flex gap-2 items-center cursor-pointer relative"
        onClick={() => setIsOpen((s) => !s)}
      >
        <span className="preset-6-bold text-white">{label}</span>
        {submenus && (
          <span className="relative w-fit h-full shrink-0">
            <Image
              src={iconArrowLight}
              alt="arrow"
              height={10}
              width={10}
              style={{ width: "auto" }}
              className="object-contain"
            />
          </span>
        )}
        {submenus && isOpen && (
          <SubMenus submenus={submenus} setIsOpen={setIsOpen} />
        )}
      </button>
    </li>
  );
}

function SubMenus({ submenus, setIsOpen }) {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));
  return (
    <ul
      ref={ref}
      className="absolute cursor-normal w-40 h-fit top-full translate-y-6 -translate-x-6 p-6 bg-white rounded-[5px] text-left"
    >
      {submenus.map((submenu, i) => (
        <li
          key={i}
          className="preset-6-regular hover:font-bold text-purple-950"
        >
          {submenu}
        </li>
      ))}
    </ul>
  );
}
