"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import { iconFree, iconPaid } from "../imageIndex";

export default function Pricing() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "text-white mb-6",
    bp === "base" || bp === "sm" ? "preset-1-mobile" : "preset-3"
  );
  return (
    <div>
      <div className="max-w-[540px] mb-20 mb-24 mb-25 text-center mx-auto">
        <h1 className={titleStyles}>Our pricing plans</h1>
        <p className="preset-5">
          We only make money when our creators make money. Our plans are always
          affordable, and it&apos;s completely free to get started.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-fit mx-auto items-center gap-20 lg:gap-[30px]">
        <PricingCard
          title="Dip your toe"
          description="Just getting started? No problem at all! Our free plan will take you a long way."
          price="Free"
          perInterval=""
          features={[
            "Unlimited products",
            "Basic analytics",
            "Limited marketplace exposure",
            "10% fee per transaction",
          ]}
        />
        <PricingCard
          primary
          title="Dive right in"
          description="Ready for the big time? Our paid plan will help you take your business to the next level."
          price="$25.00"
          perInterval="/ month"
          features={[
            "Custom domain",
            "Advanced analytics and reports",
            "High marketplace visibility",
            "5% fee per transaction",
          ]}
        />
      </div>
    </div>
  );
}

function PricingCard({
  title,
  primary,
  description,
  price,
  perInterval,
  features,
}) {
  return (
    <div
      className={`rounded-lg max-w-[445px]  px-5 sm:px-8 relative  ${
        primary
          ? "bg-cyan-400 text-neutral-900 py-16"
          : "bg-blue-800 text-neutral-0 py-12"
      }`}
    >
      <div
        className={`absolute top-0 -translate-y-1/2 left-5 sm:left-8  ${
          !primary ? "w-[45px] h-[45px]" : "w-[50px] h-[65px]"
        }`}
      >
        <div className="relative z-0 w-full h-full">
          <div className="absolute inset-0 z-10" />
          <Image
            src={!primary ? iconFree : iconPaid}
            alt=""
            fill
            className={`object-contain`}
          />
        </div>
      </div>
      <span className="mb-4 sm:mb-5 preset-4 block">{title}</span>
      <p className="preset-5">{description}</p>
      <div className="flex gap-2 items-center my-6">
        <span className="preset-2 inline-block">{price}</span>
        <span className="preset-5 inline-block">{perInterval}</span>
      </div>
      <ul className="flex flex-col gap-3">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-4">
            <span
              className={`w-3 h-[8px] shrink-0 aspect-square relative inline-block ${
                !primary && "text-cyan-400 fill-cyan-400"
              }`}
            >
              <IconCheck
                className={!primary ? "fill-cyan-400" : "fill-blue-800"}
              />
            </span>
            <span className="preset-5">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconCheck({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 9"
      className={className}
    >
      <path d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" />
    </svg>
  );
}
