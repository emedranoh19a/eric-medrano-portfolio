"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import { bgPatternIntroMobile } from "../imageIndex";
import Button from "./ui/Button";
import Navbar from "./ui/Navbar";

export default function Hero() {
  return (
    <section className="relative z-0 text-center mx-auto flex flex-col gap-24 pt-14 pb-40">
      <Background />
      <Navbar />
      <Content />
    </section>
  );
}

function Background() {
  return (
    <div className="-z-10 rounded-bl-[80px] absolute top-0 left-1/2 h-full w-screen -translate-x-[50vw] bg-linear-to-br from-(--gradient-pink-start) to-(--gradient-pink-end)">
      <div className="w-full h-full relative z-0">
        <div className="absolute inset-0" />
        {/* <Image
          src={bgPatternIntroDesktop}
          fill
          className="object-cover hidden sm:block object-right"
          alt=""
        /> */}
        <Image
          src={bgPatternIntroMobile}
          fill
          className="object-cover lg:object-contain block"
          alt=""
        />
      </div>
    </div>
  );
}
function Content() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "sm:preset-1 mb-6",
    bp === "base" || bp === "sm" ? "preset-2" : "preset-1"
  );
  return (
    <div className="text-white">
      <h1 className={titleStyles}>A modern publishing platform</h1>
      <p className="preset-4 mb-10">
        Grow your audience and build your online brand
      </p>
      <div className="flex gap-4 justify-center">
        <Button text="Start for Free" variant={1} />
        <Button text="Learn more" variant={2} />
      </div>
    </div>
  );
}
