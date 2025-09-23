"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { moon, sun } from "../imageIndex";
import { useDarkMode } from "./DarkThemeProvider";

export default function DarkModeToggle() {
  //State:
  const { isDark, onToggle } = useDarkMode();
  const imageSrc = !isDark ? moon : sun;
  const buttonStyles = cn(
    "w-[50px] aspect-square cursor-pointer",
    "grid place-items-center",
    "bg-(--neutral-100) rounded-2xl",
    "no-sr",
    isDark && "bg-(--neutral-700)"
  );
  return (
    <button className={buttonStyles} onClick={onToggle}>
      <Image width={22} height={22} src={imageSrc} alt="Dark mode toggle" />
    </button>
  );
}
