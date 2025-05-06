"use client";
import Image from "next/image";
import { useDarkMode } from "./DarkThemeProvider";

export default function Logo() {
  const { isDark } = useDarkMode();
  return (
    <div className="relative w-44 h-10">
      <Image
        alt="Extensions Logo"
        fill
        className="object-contain"
        src={`/projects/beginner/browser-extensions-manager-ui-main/logo${
          isDark ? "-dark" : ""
        }.svg`}
      />
    </div>
  );
}
