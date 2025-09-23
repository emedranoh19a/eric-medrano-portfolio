"use client";
import { cn } from "@/app/utils/utils";
import { useDarkMode } from "./DarkThemeProvider";
import Text from "./Text";

export default function Button({ text, active = false, className, onClick }) {
  //State:
  const { isDark } = useDarkMode();
  //Style:
  const buttonStyles = cn(
    "relative border rounded-full focus:outline-hidden cursor-pointer",
    "px-5 pt-2 pb-2.5 transition-colors",
    //default
    "text-(--neutral-900) bg-(--neutral-0) border-(--neutral-200) hover:bg-(--neutral-0) hover:opacity-70",
    "focus:ring-2 focus:ring-(--red-500) focus:ring-offset-2 focus:border-transparent focus:ring-offset-transparent",
    isDark &&
      "hover:opacity-100 text-(--neutral-0) bg-(--neutral-700) border-(--neutral-600)",
    isDark && "hover:bg-(--neutral-600)",
    isDark && "focus:ring-(--red-400) focus:ring-offset-(--neutral-900)",
    active &&
      " hover:opacity-100 text-(--neutral-0) bg-(--red-700) border-transparent",
    active &&
      "hover:text-(--neutral-0) hover:bg-(--red-500) hover:border-transparent",
    active &&
      "focus:ring-offset-(--neutral-0) focus:ring-(--red-400) focus:bg-(--red-700) focus:text-(--neutral-0)",
    active && isDark && "text-(--neutral-900) bg-(--red-400) hover:opacity-100",
    active && isDark && "text-(--neutral-900) hover:bg-(--red-500)",
    active &&
      isDark &&
      "focus:text-(--neutral-900) focus:bg-(--red-400) focus:ring-offset-(--neutral-900) focus:ring-(--red-400)",
    className
  );
  return (
    <Text as="button" className={buttonStyles} preset={3} onClick={onClick}>
      {text}
    </Text>
  );
}
