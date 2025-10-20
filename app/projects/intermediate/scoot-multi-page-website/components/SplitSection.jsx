import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import {
  patternLeftDownwardArrow,
  patternLefttUpwardArrow,
  patternRightArrow,
} from "../imageIndex";
import Button from "./Button";
import Subtitle from "./Subtitle";

export default function SplitSection({
  src,
  alt,
  reverse,
  title,
  children,
  withButton,
  pattern = 1,
  direction,
  buttonLabel = "Learn More",
}) {
  const contentStyles = cn(
    "h-fit max-w-[573px] lg:max-w-[445px]",
    "place-self-center",
    "text-center lg:text-left",
    reverse && "lg:order-1"
  );
  return (
    <div className="w-full grid mx-auto grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-55 h-fit mb-30">
      <Illustration
        src={src}
        alt={alt}
        reverse={reverse}
        pattern={pattern}
        direction={direction}
      />
      <div className={contentStyles}>
        <Subtitle text={title} className="mb-8 md:mb-10 lg:mb-6" />
        <p className="preset-body text-dim-grey mb-8 md:mb-10">{children}</p>
        {withButton && <Button text={buttonLabel} />}
      </div>
    </div>
  );
}
function Illustration({ src, alt, reverse, pattern, direction }) {
  const containerStyles = cn(
    "w-[311px] md:w-[445px] aspect-square relative shrink-0 mx-auto lg:mx-0",
    reverse && "lg:order-2"
  );
  const circleOrnamental = cn(
    "rounded-full absolute  w-full h-full bg-light-grey",
    reverse ? "left-full translate-x-16" : "right-full -translate-x-16"
  );

  return (
    <div className={containerStyles}>
      <div className={circleOrnamental} />
      <Image src={src} fill alt={alt} className="object-cover rounded-full" />
      <Arrow pattern={pattern} direction={direction} />
    </div>
  );
}

function Arrow({ pattern, direction = "bl" }) {
  //Direction: "bl" or "tl" or "br"
  const arrowOrnamental = clsx(
    "absolute z-10",
    pattern === 1 &&
      "w-[735px] h-[138px] md:h-[99px] lg:h-[138px] bottom-0 left-0 md:-left-[31px] md:bottom-10 lg:bottom-0",
    pattern === 2 &&
      "w-[735px] h-[138px] top-0 right-20 md:right-[260px] md:top-2",
    pattern === 3 &&
      "w-[725px] h-[138px] left-[130px] top-2 md:left-[255px] md:top-[85px]",
    pattern === 4 &&
      "w-[735px] h-[138px] left-0 bottom-10 md:h-25 md:-left-[31px] md:bottom-10 lg:h-[128px]",
    pattern === 5 &&
      "w-[735px] h-[138px] top-0 right-0 md:top-2 md:right-[260px]"
  );
  const arrowSrc =
    direction === "bl"
      ? patternLeftDownwardArrow
      : direction === "tl"
      ? patternLefttUpwardArrow
      : patternRightArrow;

  return (
    <div className={arrowOrnamental}>
      <div className="w-full h-full relative">
        <Image src={arrowSrc} alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
