"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="mb-800 relative grid grid-cols-1 lg:grid-cols-2">
      <HeroImage />
      <HeroContent />
    </section>
  );
}

function HeroImage() {
  return (
    <div className="lg:absolute bg-red-500 size-60 right-1/2 translate-x-[50vw]"></div>
  );
}

function HeroContent() {
  const bp = useBreakpoint();

  const titleStyles = clsx(
    "text-blue-950",
    bp === "base" ? "preset-1-mobile" : "preset-1"
  );
  const paragraphStyles = clsx(
    " text-blue-950/50",
    bp === "base" ? "preset-2-mobile-regular" : "preset-4"
  );
  return (
    <div className="text-center flex flex-col gap-6 max-w-[540px] lg:text-left mx-auto lg:ml-0">
      <h1 className={titleStyles}>A Simple Bookmark Manager</h1>
      <p className={paragraphStyles}>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="flex justify-between sm:justify-center lg:justify-start gap-4 preset-2-mobile-medium">
        <Button variant="primary" />
        <Button text="Get it on Firefox" />
      </div>
    </div>
  );
}
