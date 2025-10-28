"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import clsx from "clsx";
import { useRef } from "react";
import { navigationLinks } from "../../data";

export default function Menu({ onClose }) {
  //State:
  const ref = useRef();
  useClickOutside(ref, onClose);
  //Style:
  const menuContainerStyles = clsx(
    "lg:hidden absolute w-full h-fit top-full left-0 translate-y-10",
    "flex flex-col gap-6",
    "text-blue-950 preset-4-bold text-center",
    "bg-white py-10 shadow-xl shadow-neutral-300/20 rounded-sm"
  );
  return (
    <ul className={menuContainerStyles} ref={ref}>
      {navigationLinks.map((navigationLink, i) => (
        <NavLink key={i} label={navigationLink} />
      ))}
    </ul>
  );
}

function NavLink({ label }) {
  return <li>{label}</li>;
}
