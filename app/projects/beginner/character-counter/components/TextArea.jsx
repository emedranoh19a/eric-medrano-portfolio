"use client";

import { cn } from "@/app/utils/utils";
import { useFormContext } from "react-hook-form";
import { useTheme } from "./ThemeProvider";

export default function TextArea({ ...otherProps }) {
  const { register } = useFormContext();
  const { isDark } = useTheme();
  /* Text Input Container */

  const styles = cn(
    "transition-colors text-[20px] font-normal leading-[140%] tracking-[-0.6px] p-5",
    "w-full min-h-[200px]",
    "bg-(--neutral-100) ring-2 ring-(--neutral-200) rounded-[12px]",
    "focus:outline-hidden focus:ring-2 focus:ring-(--purple-500) focus:shadow-[0px_0px_10px_#D3A0FA]",
    isDark &&
      "bg-(--neutral-800) ring-(--neutral-700) text-(--neutral-100) border-(--neutral-800)"
  );
  return (
    <textarea
      placeholder="Start typing here... (or paste your text)"
      className={styles}
      {...register("text")}
      {...otherProps}
    />
  );
}
