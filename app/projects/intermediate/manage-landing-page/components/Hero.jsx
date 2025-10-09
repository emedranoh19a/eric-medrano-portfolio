"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import { illustrationIntro } from "../imageIndex";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <header
      id="hero"
      className="-z-10 flex flex-col items-center lg:flex-row-reverse gap-6 sm:gap-12 lg:justify-between mb-28 sm:mb-25 lg:mb-33"
    >
      <HeroIllustration />
      <HeroContent />
    </header>
  );
}

function HeroContent() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "mb-6 lg:mb-4",
    bp === "base" || bp === "sm" || bp === "md" ? "preset-2" : "preset-1"
  );
  return (
    <div className="text-blue-950 lg:max-w-[445px] text-center lg:text-left">
      <h1 className={titleStyles}>
        Bring everyone together to build better products.
      </h1>
      <p className="preset-4-regular opacity-50 mb-8 sm:mb-6 lg:mb-10 max-w-[500px]">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <Button label="Get Started" />
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-[318px] h-[286px] sm:w-[540px] sm:h-[485px]">
      <Image
        src={illustrationIntro}
        fill
        className="objecty-contain"
        alt="charts"
      />
    </div>
  );
}
