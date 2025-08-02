import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import Container from "../components/Container";
import Glow from "../components/Glow";
import Pattern from "../components/Pattern";
import Text from "../components/Text";
import { patternArrow } from "../imageIndex";

export default function Journey() {
  //Style:
  const cardStyles = clsx(
    "relative z-0 w-full bg-gradient-to-r from-[var(--light-salmon-100)] to-[var(--light-salmon-50)] overflow-hidden",
    "flex flex-col ",
    "py-16 px-4 gap-8",
    "sm:py-20 sm:px-8 sm:gap-12",
    "lg:py-20 lg:px-14 lg:gap-16",
    "rounded-2xl"
  );
  const stepsContainerStyles = clsx(
    "flex flex-col lg:flex-row",
    "gap-8 sm:gap-10 lg:gap-12"
  );
  const steps = [
    "Choose your membership tier",
    "Get your monthly book selection",
    "Join our discussion forums",
    "Attend exclusive meetups",
  ];
  return (
    <Container as="section" id="journey">
      <div className={cardStyles}>
        <Pattern className="-z-10 " />
        <Glow className="-z-10 top-0 right-0 translate-x-1/2 translate-y-1/2" />
        <Text
          as="h2"
          preset={2}
          className="lg:max-w-[512px] lg:text-center lg:mx-auto"
        >
          Your tech reading journey
        </Text>
        <div className={stepsContainerStyles}>
          {steps.map((step, i) => (
            <Step
              key={i}
              number={i + 1}
              content={step}
              hasArrow={i <= steps.length - 2}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

function Step({ number, hasArrow = true, content }) {
  return (
    <div className="relative flex flex-col gap-5 ">
      {hasArrow && <Arrow className="top-0 right-0 -rotate-9" />}
      <NumberBox number={number} />
      <Text preset={6}>{content}</Text>
    </div>
  );
}
function NumberBox({ number }) {
  const containerStyles = clsx(
    "aspect-square w-[32px] sm:w-[40px]",
    "grid place-items-center",
    "rounded border-2 border-[var(--neutral-900)]",
    "py-1"
  );
  return (
    <div className={containerStyles}>
      <Text preset={6} as="span" className="inline-block text-center">
        {number}
      </Text>
    </div>
  );
}
function Arrow({ className }) {
  const positionStyles = cn(
    "hidden lg:block absolute w-[76.74px] h-[20.52px]",
    className
  );
  return (
    <div className={positionStyles}>
      <div className="relative w-full h-full">
        <Image fill className="object-contain" src={patternArrow} />
      </div>
    </div>
  );
}
