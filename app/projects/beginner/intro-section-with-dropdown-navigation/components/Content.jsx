"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Button from "./ui/Button";
import Logos from "./ui/Logos";

export default function Content() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    bp === "base" || bp === "sm" ? "preset-3" : "preset-2",
    "text-gray-950"
  );
  const paragraphStyles = clsx(
    "text-gray-500 max-w-[552px] lg:max-w-[445px]",
    bp === "base" || bp === "sm" ? "preset-5-medium" : "preset-4-medium"
  );
  return (
    <div className="flex flex-col items-center lg:self-end lg:items-start gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">
      <h1 className={titleStyles}>Make remote work</h1>
      <p className={paragraphStyles}>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <Button text="Learn more" size="lg" />
      <Logos />
    </div>
  );
}
