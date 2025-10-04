"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import { secondaryNav } from "../../data/data";
import { iconArrowDown } from "../../imageIndex";

export default function NavbarMenu({ label, hasChildren, from = "left" }) {
  //State:
  const [open, setOpen] = useState(false);
  return (
    <li className="h-full text-gray-500 preset-6 relative group">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex gap-2 items-center h-full cursor-pointer"
      >
        <span className="inline-block">{label}</span>
        {hasChildren && (
          <div className="w-2 h-[4px] relative shrink-0">
            <Image
              src={iconArrowDown}
              fill
              className="object-contain"
              alt="arrow"
            />
          </div>
        )}
        {hasChildren && open && (
          <DropdownMenu
            from={from}
            accesor={label}
            onClose={() => setOpen(false)}
          />
        )}
      </button>
    </li>
  );
}

function DropdownMenu({ from, accesor, onClose }) {
  const ref = useRef();
  useClickOutside(ref, onClose);

  const cardClasses = cn(
    "bg-white rounded-[10px] shadow-2xl shadow-black/20",
    "absolute top-full translate-y-2",
    from === "left" ? "left-0" : "right-0",
    "  w-fit h-fit preset-6 text-gray-500",
    "flex flex-col gap-4 p-6",
    ""
  );
  return (
    <ul className={cardClasses} ref={ref}>
      {secondaryNav[accesor].map((item, i) => (
        <DropdownMenuItem key={i} {...item} />
      ))}
    </ul>
  );
}

export function DropdownMenuItem({ label, icon }) {
  return (
    <li className="flex justify-start items-center gap-4 ">
      {icon && (
        <div className="aspect-square w-4 relative">
          <Image src={icon} alt="" className="object-contain" fill />
        </div>
      )}
      <span className="whitespace-nowrap">{label}</span>
    </li>
  );
}
