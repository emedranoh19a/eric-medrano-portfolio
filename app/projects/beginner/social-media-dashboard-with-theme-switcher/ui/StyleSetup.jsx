"use client";
import clsx from "clsx";
import { useDarkMode } from "./components/DarkTheme";
import { inter } from "./fonts";
import "./theme.css";

export default function StyleSetup({ children }) {
  const { isDark } = useDarkMode();
  const mainClassName = clsx(
    inter.className,
    "px-6 pt-9 pb-[71px]",
    "w-full relative z-0 min-h-screen",
    "antialiased transition-colors",
    isDark ? "bg-gray-950" : "bg-white"
  );
  return (
    <div className={mainClassName}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
