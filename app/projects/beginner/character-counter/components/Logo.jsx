"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Logo() {
  //State:
  const { isDark } = useTheme();
  //Dataflow:
  const logoSrc = isDark
    ? "/projects/beginner/character-counter/logo-dark-theme.svg"
    : "/projects/beginner/character-counter/logo-light-theme.svg";
  return (
    <div className="w-[246px] h-10 relative">
      <Image alt="Logo" fill className="object-contain" src={logoSrc} />
    </div>
  );
}
