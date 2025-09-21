"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { cn } from "@/app/utils/utils";

export default function Content() {
  const bp = useBreakpoint();

  const titleStyles = cn(
    "antialiased mb-5 mx-auto text-center text-[var(--neutral-900)] sm:max-w-[538px] lg:max-w-none",
    bp === "base" || bp === "sm" ? "preset-1-mobile" : "preset-1"
  );
  return (
    <div>
      <h1 className={titleStyles}> Design solutions made easy</h1>
      <p className="preset-4 text-[var(--neutral-400)] antialiased text-pretty text-center mx-auto max-w-[569px]">
        With over ten years of experience in various design disciplines,
        I&apos;m your one-stop shop for your design needs.
      </p>
    </div>
  );
}
