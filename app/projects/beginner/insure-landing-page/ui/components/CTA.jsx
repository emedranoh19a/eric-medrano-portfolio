import Image from "next/image";
import {
  bgPatternHowWeWorkDesktop,
  bgPatternHowWeWorkMobile,
} from "../../imageIndex";
import Button from "./Button";

export default function CTA() {
  return (
    <section id="cta" className="mb-[140px] sm:mb-[120px] lg:mb-[150px]">
      <div className="relative z-0 px-6 py-18 sm:py-[70px] lg:px-20 bg-blue-950 flex flex-col lg:flex-row justify-between gap-10 items-center text-center">
        <Ornamentals />
        <h2 className="text-white preset-4 max-w-[474px] lg:text-left">
          Find out more about how we work
        </h2>
        <Button variant="outline" />
      </div>
    </section>
  );
}

function Ornamentals() {
  return (
    <div className="absolute -z-10 w-[180px] sm:w-[210px] lg:w-[434px] h-full right-0 top-0">
      <div className="h-full w-full relative">
        <Image
          src={bgPatternHowWeWorkMobile}
          alt=""
          className="object-fill lg:hidden"
          fill
        />
        <Image
          src={bgPatternHowWeWorkDesktop}
          alt=""
          className="object-fill hidden lg:block"
          fill
        />
      </div>
    </div>
  );
}
