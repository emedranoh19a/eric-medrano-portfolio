"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { navItems, secondaryNav } from "../../data/data";
import { iconArrowDown, iconCloseMenu } from "../../imageIndex";
import { DropdownMenuItem } from "./NavbarMenu";
export default function Drawer({ onClose }) {
  const screenContainer = clsx("lg:hidden ", "");
  const drawerContainer = clsx(
    "bg-white h-screen w-[240px] sm:w-[283px] px-[22px] pt-6",
    "flex flex-col gap-8",
    "fixed right-0 top-0"
  );
  const ref = useRef();
  useClickOutside(ref, onClose);

  return (
    <div className={screenContainer}>
      <motion.div
        className="absolute inset-0 bg-gray-950/75 top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", stiffness: 300, damping: 30 }}
        className={drawerContainer}
        ref={ref}
      >
        {/* close icon */}
        <button
          className="w-6 aspect-square relative self-end cursor-pointer"
          onClick={onClose}
        >
          <Image
            src={iconCloseMenu}
            className="object-contain"
            fill
            alt="close menu"
          />
        </button>
        {/*  links*/}
        <ul className="capitalize preset-5-medium text-gray-500 flex flex-col gap-4">
          {navItems.map((navItem, i) => (
            <SubMenu key={i} {...navItem} />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

function SubMenu({ label, hasChildren }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex flex-col gap-4 cursor-pointer">
        <button
          onClick={() => setOpen((s) => !s)}
          className="flex flex-row gap-4 items-center cursor-pointer capitalize"
        >
          <span>{label}</span>
          {hasChildren && (
            <>
              <div className="w-2 h-[4px] relative">
                <Image
                  src={iconArrowDown}
                  fill
                  className="object-contain"
                  alt="arrow"
                />
              </div>
            </>
          )}
        </button>
        {hasChildren && open && (
          <ul className="flex flex-col gap-4 ml-4">
            {hasChildren &&
              secondaryNav[label].map((secondaryItem, i) => (
                <DropdownMenuItem
                  label={secondaryItem.label}
                  icon={secondaryItem.icon}
                  key={i}
                />
              ))}
          </ul>
        )}
      </div>
    </li>
  );
}
