"use client";
import clsx from "clsx";
import { useDarkMode } from "./DarkTheme";

export default function Navbar() {
  const { isDark, setIsDark } = useDarkMode();
  const titleStyles = clsx("preset-4", isDark ? "text-white" : "text-gray-950");
  const subtitleStyles = clsx(
    "preset-5",
    isDark ? "text-gray-400" : "text-gray-650"
  );
  const toggleStyles = clsx(
    "w-5 aspect-square rounded-full bg-navy-50 absolute  top-1/2 -translate-y-1/2 transition transition-all",
    !isDark ? "left-[3px]" : "right-[3px]"
  );
  const toggleBackgroundStyles = clsx(
    "ml-4 cursor-pointer w-[50px] h-6 relative p-[3px] rounded-full",
    isDark
      ? "bg-gradient-to-tr from-(--gradient-green-start) to-(--gradient-green-end)"
      : "bg-gray-400"
  );
  return (
    <nav className="flex flex-col gap-6 mb-8">
      <div>
        <h1 className={titleStyles}>Social Media Dashboard</h1>
        <p className={subtitleStyles}>Total Followers: 23,004</p>
      </div>
      <hr className="text-gray-600" />
      <div>
        <span className={subtitleStyles}>Dark mode</span>
        <button
          htmlFor="theme-switcher"
          className={toggleBackgroundStyles}
          onClick={() => setIsDark((prev) => !prev)}
        >
          <div className={toggleStyles} />
        </button>
      </div>
    </nav>
  );
}
