"use client";
import { cn } from "@/app/utils/utils";
import { useDarkMode } from "./DarkThemeProvider";
import Text from "./Text";

export default function Button({ text, active = false, className, onClick }) {
  //State:
  const { isDark } = useDarkMode();
  //Style:
  const buttonStyles = cn(
    "relative border rounded-full focus:outline-none",
    "px-5 pt-2 pb-2.5 transition-colors",
    //default
    "text-[var(--neutral-900)] bg-[var(--neutral-0)] border-[var(--neutral-200)] hover:bg-[var(--neutral-0)] hover:opacity-70",
    "focus:ring-2 focus:ring-[var(--red-500)] focus:ring-offset-2 focus:border-transparent focus:ring-offset-transparent",
    isDark &&
      "hover:opacity-100 text-[var(--neutral-0)] bg-[var(--neutral-700)] border-[var(--neutral-600)]",
    isDark && "hover:bg-[var(--neutral-600)]",
    isDark &&
      "focus:ring-[var(--red-400)] focus:ring-offset-[var(--neutral-900)]",
    active &&
      " hover:opacity-100 text-[var(--neutral-0)] bg-[var(--red-700)] border-transparent",
    active &&
      "hover:text-[var(--neutral-0)] hover:bg-[var(--red-500)] hover:border-transparent",
    active &&
      "focus:ring-offset-[var(--neutral-0)] focus:ring-[var(--red-400)] focus:bg-[var(--red-700)] focus:text-[var(--neutral-0)]",
    active &&
      isDark &&
      "text-[var(--neutral-900)] bg-[var(--red-400)] hover:opacity-100",
    active && isDark && "text-[var(--neutral-900)] hover:bg-[var(--red-500)]",
    active &&
      isDark &&
      "focus:text-[var(--neutral-900)] focus:bg-[var(--red-400)] focus:ring-offset-[var(--neutral-900)] focus:ring-[var(--red-400)]",
    className
  );
  return (
    <Text as="button" className={buttonStyles} preset={3} onClick={onClick}>
      {text}
    </Text>
  );
}
