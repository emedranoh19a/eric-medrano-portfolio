"use client";

import { cn } from "@/app/utils/utils";
import BgNoise from "./BgNoise";
import { useTheme } from "./ThemeProvider";

export default function StyleSetup({ children }) {
  //State:
  const { isDark } = useTheme();
  //Style:
  const mainStyles = cn(
    "w-full min-h-screen relative z-0 transition-colors duration-700 bg-white",
    isDark && "bg-neutral-900"
  );
  const containerStyles = cn(
    "container mx-auto flex flex-col gap-10",
    "pt-4 px-4 pb-8",
    "",
    "",
    ""
  );
  return (
    <main
      className={mainStyles}
      style={{
        "--neutral-0": "#FFFFFF",
        "--neutral-100": "#F2F2F7",
        "--neutral-200": "#E4E4EF",
        "--neutral-600": "#404254",
        "--neutral-700": "#2A2B37",
        "--neutral-800": "#21222C",
        "--neutral-900": "#12131A",
        "--purple-400": "#D3A0FA",
        "--purple-500": "#C27CF8",
        "--yellow-500": "#FF9F00",
        "--orange-500": "#FE8159",
        "--orange-800": "#DA3701",
      }}
    >
      <BgNoise />

      <div className={containerStyles}>{children}</div>
    </main>
  );
}
