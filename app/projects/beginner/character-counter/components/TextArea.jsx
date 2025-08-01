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
    "bg-[var(--neutral-100)] ring-2 ring-[var(--neutral-200)] rounded-[12px]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--purple-500)] focus:shadow-[0px_0px_10px_#D3A0FA]",
    isDark &&
      "bg-[var(--neutral-800)] ring-[var(--neutral-700)] text-[var(--neutral-100)] border-[var(--neutral-800)]"
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
