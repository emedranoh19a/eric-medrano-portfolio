import Image from "next/image";
import { patternCurvedLine1 } from "../../assetIndex";
import Button from "../components/Button";
import Mockup from "../components/Mockup";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 sm:gap-20 lg:gap-24">
      <div className="relative z-0 flex flex-col flex-1 items-center sm:flex-row gap-16 sm:h-[480px] lg:h-[600px]">
        <HeroContent />
        <Mockup />
      </div>
      <Stats />
    </div>
  );
}
function HeroContent() {
  return (
    <div className="relative max-w-[635px]">
      <Line />
      <h1 className="preset-1 text-neutral-900 mb-6 sm:mb-10">
        A <span className="preset-1-bold">super solution </span> for your
        <span className="preset-1-bold"> business.</span>
      </h1>
      <p className="preset-5 text-neutral-900 mb-10 sm:mb-12 lg:mb-16 max-w-[350px]">
        Our marketing and sales automations help you scale your outreach to get
        more leads for your company.
      </p>
      <Button variant="filled" />
    </div>
  );
}
function Line() {
  return (
    <div className="w-[127px] h-4 sm:w-[287px] sm:h-8 lg:h-9 absolute -top-2 -translate-y-full right-[47px] sm:-top-[26px] sm:right-[59px] ">
      <Image src={patternCurvedLine1} fill className="object-contain" alt="" />
    </div>
  );
}

function Stats() {
  return (
    <div className=" text-center lg:text-left flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-10 sm:gap-16">
      <Stat value="2K+" unit="Companies" />
      <Stat value="8" unit="Languages" />
      <Stat value="1.2M" unit="Leads" />
    </div>
  );
}

function Stat({ value, unit }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="preset-2-bold text-neutral-900">{value}</span>
      <span className="preset-7 text-neutral-500 uppercase">{unit}</span>
    </div>
  );
}
