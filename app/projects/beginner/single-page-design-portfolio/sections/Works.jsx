"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Arrow from "../components/Arrow";

export default function Works() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "antialiased text-[var(--neutral-900)]",
    bp === "base" || bp === "sm" ? "preset-1-mobile" : "preset-2"
  );
  return (
    <section id="works" className="flex flex-col gap-10 smgap-12">
      <h2 className={titleStyles}>Works</h2>
      <WorksArea />
    </section>
  );
}

function WorksArea() {
  return (
    <>
      <div>works area</div>
      <div className="w-full flex justify-center gap-4">
        <Arrow left />
        <Arrow />
      </div>
    </>
  );
}
