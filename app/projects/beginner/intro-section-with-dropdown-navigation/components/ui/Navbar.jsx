"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navItems } from "../../data/data";
import { iconMenu } from "../../imageIndex";
import Button from "./Button";
import Drawer from "./Drawer";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className="flex justify-between relative mb-6 sm:mb-8 lg:mb-[75px]">
      <div className="w-fit flex gap-16 items-center">
        <Logo />
        <Links />
      </div>
      <div className="hidden lg:flex gap-10 items-center ">
        <Button
          text="Login"
          variant="secondary"
          size="sm"
          className="border-none px-0 py-0"
        />
        <Button text="Register" variant="secondary" size="sm" />
      </div>
      <MobileNavigation />
    </nav>
  );
}

function Links() {
  return (
    <ul className="hidden h-full lg:flex justify-start gap-10 capitalize">
      {navItems.map((navItem, i) => (
        <NavbarMenu key={i} {...navItem} />
      ))}
    </ul>
  );
}

function MobileNavigation() {
  // Ensure DOM is ready before accessing `document`
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState(null);
  useEffect(() => {
    setPortalTarget(
      document.getElementById("intro-section-with-dropdown-navigation")
    );
  }, []);
  return (
    <>
      <button
        className="lg:hidden w-8 h-[18px] relative cursor-pointer "
        onClick={() => setDrawerOpen(true)}
      >
        <Image src={iconMenu} alt="menu" className="object-contain" fill />
      </button>
      {portalTarget &&
        drawerOpen &&
        createPortal(
          <Drawer onClose={() => setDrawerOpen(false)} />,
          portalTarget
        )}
    </>
  );
}
