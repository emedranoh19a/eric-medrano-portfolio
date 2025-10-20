"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import Image from "next/image";
import { patternWhiteCircles } from "../imageIndex";

export default function PageBanner({
  title,
  mobileSrc,
  tabletSrc,
  desktopSrc,
}) {
  const bp = useBreakpoint();
  const src =
    bp === "base" || bp === "sm"
      ? mobileSrc
      : bp === "md"
      ? tabletSrc
      : desktopSrc;
  return (
    <header className="relative z-0 h-40 md:h-50 mb-18 md:mb-36 lg:mb-30">
      <div className="overflow-hidden absolute w-screen h-full left-1/2 top-0 -translate-x-[50vw]">
        <Image src={src} alt="" fill className="object-cover" priority={true} />
        <div className="hidden md:block z-10 absolute w-[234px] h-[63px] right-[calc(50%-30px)] top-1/2 -translate-y-1/2 translate-x-[50vw]">
          <div className="w-full h-full relative">
            <Image
              src={patternWhiteCircles}
              alt=""
              className="object-cover"
              priority={true}
              fill
            />
          </div>
        </div>
      </div>
      <h1 className="text-white text-center md:text-left preset-1 absolute top-1/2 -translate-y-1/2">
        {title}
      </h1>
    </header>
  );
}
