"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useDarkMode } from "./DarkThemeProvider";

export default function DarkModeToggle() {
  //State:
  const { isDark, onToggle } = useDarkMode();
  const imageSrc = `/projects/beginner/browser-extensions-manager-ui-main/icon-${
    !isDark ? "moon" : "sun"
  }.svg`;

  const buttonStyles = cn(
    "w-[50px] aspect-square",
    "grid place-items-center",
    "bg-[var(--neutral-100)] rounded-2xl",
    "no-sr",
    isDark && "bg-[var(--neutral-700)]"
  );
  return (
    <button className={buttonStyles} onClick={onToggle}>
      <Image width={22} height={22} src={imageSrc} alt="Dark mode toggle" />
    </button>
  );
}
