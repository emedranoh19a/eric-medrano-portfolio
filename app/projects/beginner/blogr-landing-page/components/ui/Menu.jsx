"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import Image from "next/image";
import { useRef, useState } from "react";
import { menus } from "../../data";
import { iconArrowDark } from "../../imageIndex";
import Button from "./Button";

export default function Menu({ onClose }) {
  const ref = useRef();
  useClickOutside(ref, onClose);
  return (
    <div
      ref={ref}
      className="lg:hidden absolute bg-white h-fit w-full top-full translate-y-10 px-6 py-8 rounded-[5px]"
    >
      <ul>
        {menus.map((menu, i) => (
          <SubMenu key={i} {...menu} />
        ))}
        <hr className="text-gray-100 my-6" />
      </ul>
      <div className="flex flex-col sm:flex-row w-fit mx-auto">
        <button className="cursor-pointer preset-6-bold text-blue-900 p-4">
          Login
        </button>
        <Button
          text="Sign Up"
          className="bg-linear-to-br from-(--gradient-pink-start) to-(--gradient-pink-end) text-white"
        />
      </div>
    </div>
  );
}

function SubMenu({ label, submenus }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        className="mb-4 flex justify-center items-center gap-4 cursor-pointer mx-auto"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="preset-6-bold text-blue-900">{label}</span>
        <span className="w-4 h-2 inline-block relative shrink-0">
          {submenus && (
            <Image
              src={iconArrowDark}
              alt="down arrow"
              fill
              className="object-contain"
            />
          )}
        </span>
      </button>
      {submenus && open && (
        <ul className="bg-gray-100 py-5 text-blue-900/75 preset-6-regular rounded-[5px]">
          {submenus.map((submenu, i) => (
            <li key={i} className="mb-2">
              {submenu}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
