"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { illustrationCharts } from "../../home-assets";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-0 mb-20 sm:mb-[112px] lg:mb-[140px] flex flex-col-reverse md:flex-row gap-12 sm:justify-between items-center"
    >
      <HeroContent />
      <HeroIllustration />
    </section>
  );
}

function HeroContent() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left ">
      <h1 className="preset-1 text-neutral-800 mb-6 text-balance">
        A simple solution to complex tasks is coming soon
      </h1>
      <p className="preset-4 text-neutral-500 mb-6 lg:mb-8 max-w-[470px]">
        Say goodbye to inefficient juggling of multiple apps, teams, and
        projects. Officelite is the new collaboration platform built with an
        intuitive interface to improve productivity.
      </p>
      <Button
        onClick={() => {
          router.push("/projects/beginner/officelite-coming-soon-site/sign-up");
        }}
      />
    </div>
  );
}
function HeroIllustration() {
  return (
    <div className="shrink-0 relative w-50 h-[224px] sm:w-[280px] sm:h-[313px] lg:w-[475px] lg:h-[531px]">
      <Image
        src={illustrationCharts}
        alt="Charts"
        fill
        className="object-contain"
      />
    </div>
  );
}
