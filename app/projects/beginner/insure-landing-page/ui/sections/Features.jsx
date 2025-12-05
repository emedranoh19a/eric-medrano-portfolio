"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import {
  iconAffordablePrices,
  iconPeopleFirst,
  iconSnappyProcess,
} from "../../imageIndex";

const features = [
  {
    title: "Snappy Process",
    description:
      "Our application process can be completed in minutes, not hours. Don&apos;t get stuck filling in tedious forms.",
    img: iconSnappyProcess,
  },
  {
    title: "Affordable Prices",
    description:
      "We don&apos;t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    img: iconAffordablePrices,
  },
  {
    title: "People First",
    description:
      "Our plans aren&apos;t full of conditions and clauses to prevent payouts. We make sure you&apos;re covered when you need it.",
    img: iconPeopleFirst,
  },
];
export default function Features() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "text-gray-950 text-center lg:text-left mb-20 lg:mb-24",
    bp === "base" || bp === "sm" || bp === "md" ? "preset-3" : "preset-1"
  );
  return (
    <section id="features" className="mb-[140px] sm:mb-[120px] lg:mb-[157px]">
      <div className="bg-pink-400 h-px w-[150px] mb-10 lg:mb-16 mx-auto lg:ml-0" />
      <h2 className={titleStyles}>We&apos;re different</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-8 w-fit lg:w-full text-center lg:text-left max-w-[471px] lg:max-w-none mx-auto">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

function Feature({ title, description, img }) {
  return (
    <div>
      <div className="w-[86px] aspect-square relative mb-8 mx-auto lg:ml-0">
        <Image src={img} alt="" fill className="object-contain" />
      </div>
      <h3 className="preset-5 text-gray-950 mb-4">{title}</h3>
      <p className="preset-7 text-gray-700">{description}</p>
    </div>
  );
}
