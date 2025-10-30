"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { worldMapDesktop, worldMapMobile } from "../imageIndex";

export default function Map() {
  return (
    <section id="locations" className=" mb-18 md:mb-16 md:mb-30">
      <div className="relative w-full h-fit mx-auto mb-10 md:mb-16 md:mb-30">
        <div className="z-10 absolute inset-0" />{" "}
        <Image
          src={worldMapMobile}
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto" }}
          className="object-cover md:hidden w-full aspect-auto"
        /> 
        {/* <Image
          src={worldMapTablet}
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto" }}
          className="object-cover hidden md:block lg:hidden"
        /> */}
        <Image
          src={worldMapDesktop}
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto" }}
          className="object-cover hidden md:block"
          alt="World map"
        /> 
        <CountriesDynamicList />
      </div>
      <CountriesList />
    </section>
  );
}
const countries = [
  { name: "New York", className: "top-[29%] left-[22%]" },
  { name: "London", className: "top-[19%] left-[44%]" },
  { name: "Jakarta", className: "top-[60%] left-[80%]" },
  { name: "Yokohama", className: "top-[29%] left-[86%]" }, //Tried: x: y:
];
function CountriesList() {
  return (
    <ul className="md:hidden preset-4 text-dark-navy text-center flex flex-col gap-4">
      {countries.map((country, index) => (
        <li key={index} className="bg-yellow/15 w-full py-[22px]">
          {country.name}
        </li>
      ))}
    </ul>
  );
}

function CountriesDynamicList() {
  return (
    <ul className="bg-red-500">
      {countries.map((country, index) => (
        <CountryTag key={index} {...country} />
      ))}
    </ul>
  );
}

function CountryTag({ name, className }) {
  const positionStyles = cn(
    "hidden sm:block bg-yellow text-dark-navy absolute -translate-y-[calc(100%+8px)] -translate-x-1/2",
    "text-[13px] leading-[28px] tracking-[-0.58px] lg:text-[24px] lg:leading-[28px] leading-[-0.8px] lg:tracking-[-1.07px] font-bold font-space-mono",
    // "py-[2px] px-[30px] lg:py-[22px] lg:px-[38px]",
    className
  );
  return (
    <li className={positionStyles}>
      <div className="relative z-0 h-full py-[2px] px-[30px] lg:py-[22px] lg:px-[38px]">
        <span>{name}</span>

        <span
          className="absolute inline-block bg-yellow w-4 h-2 lg:w-8 lg:h-4 top-full left-1/2 -translate-x-1/2 -translate-y-px"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
        />
      </div>
    </li>
  );
}
//Tag está posicionado absolutamente.
//Dentro, quiero posicionar la cúspide de la viñeta. pero eso
