"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import {
  bgHeroSquiggle,
  iconScroll,
  illustrationHeroLeft,
  illustrationHeroMobile,
  illustrationHeroRight,
} from "../imageIndex";
import Logo from "./ui/Logo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col gap-16 sm:gap-30 pt-8 sm:pt-12 lg:pt-20"
    >
      <Navbar />
      <MobileFullBleed />
      <HeroContent />
    </section>
  );
}
function Navbar() {
  return (
    <div className="flex justify-center sm:justify-start">
      <Logo />
    </div>
  );
}
function MobileFullBleed() {
  return (
    <div className="sm:hidden relative w-screen left-1/2 -translate-x-[50vw] max-h-[230px]">
      <Image
        src={illustrationHeroMobile}
        alt="A lot of professions"
        className="object-contain scale-110"
        width={1000}
        height={1000}
        style={{ height: "auto", maxHeight: "230px" }}
      />
    </div>
  );
}
function LeftIllustration() {
  return (
    <div className="-z-10 hidden sm:block -translate-x-full left-[190px] lg:left-0  top-0 h-full aspect-square absolute">
      <div className="w-full h-full relative">
        <Image
          src={illustrationHeroLeft}
          className="object-contain"
          fill
          // style={{ width: "auto" }}
          alt="proffessions"
        />
      </div>
    </div>
  );
}
function RightIllustration() {
  return (
    <div className="-z-10 hidden sm:block  right-[190px] translate-x-full lg:right-0 top-0 h-full aspect-square absolute">
      <div className="w-full h-full relative">
        <Image
          src={illustrationHeroRight}
          className="object-contain"
          fill
          // style={{ width: "auto" }}
          alt="proffessions"
        />
      </div>
    </div>
  );
}
function HeroContent() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    " mb-6 text-neutral-0 mx-auto",
    bp === "base" || bp === "sm" ? "preset-1-mobile" : "preset-1"
  );
  return (
    <div className="text-center w-fit mx-auto relative max-w-[730px]">
      <div className="-z-10 inset-0 absolute">
        <div className="relative w-full h-full">
          <Image src={bgHeroSquiggle} className="object-contain" alt="" fill />
        </div>
      </div>
      <LeftIllustration />
      <RightIllustration />
      <h1 className={titleStyles}>
        Get paid for the work you <span className="text-cyan-400">love</span> to
        do.
      </h1>
      <p className="max-w-[540px]  mx-auto mb-8 sm:mb-16">
        The 9-5 grind is so last century. We believe in living life on your own
        terms. Whether you&apos;re looking to escape the rat race or set up a
        side hustle, we&apos;ve got you covered.
      </p>
      <div className="relative z-0 w-[26px] h-[42px] mx-auto">
        <div className="absolute z-10 inset-0" />
        <Image src={iconScroll} className="object-contain" fill alt="scroll" />
      </div>
    </div>
  );
}
