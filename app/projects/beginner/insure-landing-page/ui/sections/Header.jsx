"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import {
  bgPatternIntroLeftDesktop,
  bgPatternIntroLeftMobile,
  bgPatternIntroRightDesktop,
  bgPatternIntroRightMobile,
  imgIntroDesktop,
  imgIntroMobile,
} from "../../imageIndex";
import Button from "../components/Button";

export default function Header() {
  return (
    <header className="mb-[140px] sm:mb-[120px] md:mb-[150px] lg:pt-[105px] relative mx-auto z-0 flex flex-col md:flex-row-reverse lg:items-start items-center justify-between gap-[93px] sm:gap-[89px] lg:gap-8">
      <Background />
      <MobileImage />
      <DesktopImage />
      <HeaderContent />
    </header>
  );
}
function MobileImage() {
  return (
    <div className="lg:hidden relative h-[452px] w-screen bg-red-500">
      <Image
        src={imgIntroMobile}
        alt="People hand by hand"
        fill
        className="object-cover"
      />
      <div className="absolute md:hidden w-[163px] h-[169px] top-full left-0">
        <Image
          className="object-fill"
          src={bgPatternIntroLeftMobile}
          alt=""
          fill
        />
      </div>
    </div>
  );
}
function DesktopImage() {
  return (
    <div className="z-10 relative hidden lg:block w-[540px] lg:h-[650px] shrink-0">
      <Image
        src={imgIntroDesktop}
        alt="People hand by hand"
        fill
        className="object-cover"
      />
    </div>
  );
}

function HeaderContent() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "text-white mb-4 sm:mb-6 lg:mb-4 lg:mt-16",
    bp === "base" || bp === "sm" || bp === "md" ? "preset-3" : "preset-1"
  );
  return (
    <div className="relative text-center md:text-left max-w-[540px] pb-[93px] sm:pb-[90px] lg:pb-0">
      <MobileOrnamentals />
      <div className="hidden lg:block h-px w-[150px] absolute top-0 left-0 bg-white" />
      <h1 className={titleStyles}>Humanizing you insurance.</h1>
      <p className="preset-7 text-white mb-8 lg:mb-6">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that&apos;s right for
        you. Ensure you and your loved ones are protected.
      </p>
      <Button variant="outline" />
    </div>
  );
}
function MobileOrnamentals() {
  return <></>;
}
function Background() {
  return (
    <>
      <div className="-z-10 absolute top-0 left-1/2 -translate-x-[50vw] w-screen h-full lg:h-[80%] bg-blue-950" />
      <div className="md:hidden -z-10 absolute w-[143px] h-[334px] top-full right-1/2 translate-x-[50vw] -translate-y-1/2">
        <Image
          className="object-fill"
          src={bgPatternIntroRightMobile}
          alt=""
          fill
        />
      </div>
      <div className="absolute hidden md:block w-[433px] h-[511px] top-0 right-1/2 translate-x-[50vw] ">
        <Image
          className="object-fill"
          src={bgPatternIntroRightDesktop}
          alt=""
          fill
        />
      </div>
      <div className="hidden md:block absolute -bottom-30 left-1/2 -translate-x-[50vw] w-[193px] h-[503px]">
        <Image
          src={bgPatternIntroLeftDesktop}
          alt=""
          className="object-fill"
          fill
        />
      </div>
    </>
  );
}
