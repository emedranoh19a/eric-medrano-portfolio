"use client";
import { cn } from "@/app/utils/utils";
import { Noto_Sans } from "next/font/google";
import { useDarkMode } from "./DarkThemeProvider";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function StylesSetup({ children }) {
  const { isDark } = useDarkMode();
  const setupStyles = cn(
    `w-full min-h-screen transition-colors ease-in ${notoSans.className}`,
    "bg-linear-to-b from-(--light-gradient-top) to-(--light-gradient-bottom)",
    isDark &&
      "bg-linear-to-b from-(--dark-gradient-top) to-(--dark-gradient-bottom)",
    isDark && "bg-black"
  );
  return (
    <div
      className={setupStyles}
      style={{
        //neutral
        "--neutral-900": "#091540",
        "--neutral-800": "#202535",
        "--neutral-700": "#2F364B",
        "--neutral-600": "#535868",
        "--neutral-300": "#C6C6C6",
        "--neutral-200": "#D6E3F5",
        "--neutral-100": "#EEEEEE",
        "--neutral-0": "#FBFDFE",
        //red
        "--red-400": "#F25C54",
        "--red-500": "#DE4840",
        "--red-700": "#C7231A",
        //gradients
        "--light-gradient-top": "#EBF2FC",
        "--light-gradient-bottom": "#EEFBF9",
        "--dark-gradient-top": "#04091B",
        "--dark-gradient-bottom": "#091540",
      }}
    >
      {children}
    </div>
  );
}
