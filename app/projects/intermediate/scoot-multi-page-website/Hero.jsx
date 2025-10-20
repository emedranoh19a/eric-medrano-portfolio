import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import Button from "./components/Button";
import {
  homeHeroDesktop,
  homeHeroMobile,
  homeHeroTablet,
  patternLine,
  patternRightArrow,
} from "./imageIndex";

export default function Hero() {
  const sectionClasses = clsx(
    "relative z-0",
    "px-8 pt-[104px] pb-45",
    "text-white text-center lg:text-left",
    "mb-30 lg:mb-40 mx-auto"
  );
  return (
    <section className={sectionClasses}>
      <HeroBackground />
      <div className="flex flex-col items-center lg:items-start max-w-[573px] mx-auto lg:ml-0">
        <h1 className="preset-3 mb-[11px] md:mb-6 lg:max-w-[500px] ">
          Scooter sharing made simple
        </h1>
        <div className="w-fit inline-block relative">
          <Arrow className="hidden absolute lg:block w-[447px] h-[138px] left-full top-[50px] translate-x-10" />
          <div className="hidden lg:block h-[15px] w-[202px] absolute top-0 right-full translate-x-2 top-[50px] ">
            <div className="h-full w-full relative">
              <Image src={patternLine} alt="" className="object-contain" fill />
            </div>
          </div>
          <p className="relative preset-body mb-[34px] md:mb-8 lg:max-w-[405px] lg:ml-[95px]">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you&apos;re away!
          </p>
        </div>
        <Button text="Get Scootin" className="lg:ml-[95px]" />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="absolute -z-10 top-0 left-1/2 -translate-x-[50vw] h-full w-screen">
      <div className="relative z-0 w-full h-full">
        <div className="absolute inset-0 z-10" />
        <Arrow className="lg:hidden bottom-[35px] -left-[312px] md:-left-[127px]" />
        <Image
          src={homeHeroDesktop}
          fill
          className="object-cover hidden lg:block"
          alt="A man riding a Scooter"
        />
        <Image
          src={homeHeroTablet}
          fill
          className="object-cover hidden md:block lg:hidden"
          alt="A man riding a Scooter"
        />
        <Image
          src={homeHeroMobile}
          fill
          className="object-cover md:hidden"
          alt="A man riding a Scooter"
        />
      </div>
    </div>
  );
}

function Arrow({ className }) {
  const positionStyles = cn("z-10 absolute w-[447px] h-[138px]", className);
  return (
    <div className={positionStyles}>
      <div className="w-full h-full relative z-0">
        <div className="absolute inset-0 z-10" />
        <Image src={patternRightArrow} fill className="object-contain" alt="" />
      </div>
    </div>
  );
}
