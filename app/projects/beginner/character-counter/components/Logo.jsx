"use client";

import Image from "next/image";
import { logoDarkTheme, logoLightTheme } from "../imageIndex";
import { useTheme } from "./ThemeProvider";

export default function Logo() {
  //State:
  const { isDark } = useTheme();
  //Dataflow:
  const logoSrc = isDark ? logoDarkTheme : logoLightTheme;
  return (
    <div className="w-[246px] h-10 relative">
      <Image alt="Logo" fill className="object-contain" src={logoSrc} />
    </div>
  );
}
