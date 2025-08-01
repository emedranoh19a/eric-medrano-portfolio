"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { iconMoon, iconSun } from "../imageIndex";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  //State:
  const { isDark, toggle } = useTheme();

  //Style:
  const iconContainerStyles = cn(
    "relative transition-colors w-[44px] aspect-square grid place-items-center rounded-[8px]",
    !isDark ? "bg-[var(--neutral-100)]" : "bg-[var(--neutral-700)]"
  );

  //Dataflow:
  const iconSrc = !isDark ? iconMoon : iconSun;
  return (
    <button className={iconContainerStyles} onClick={toggle}>
      <Image height={22} width={22} alt="moon icon" src={iconSrc} />
    </button>
  );
}
