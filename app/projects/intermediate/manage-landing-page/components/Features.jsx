"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import { features } from "../data";

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col lg:flex-row gap-10 sm:gap-8 mb-[112px] sm:mb-[96px] lg:mb-[150px]"
    >
      <FeaturesContent />
      <FeaturesList />
    </section>
  );
}
function FeaturesContent() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "mb-6",
    bp === "base" || bp === "sm" ? "preset-3" : "preset-2"
  );
  const descriptionStyles = clsx(
    "opacity-50 ",
    bp === "base" || bp === "sm" ? "preset-5-regular" : "preset-4-regular"
  );
  return (
    <div className="text-blue-950 text-center lg:text-left max-w-[500px] lg:max-w-[445px] mx-auto lg:ml-0">
      <h2 className={titleStyles}>What&apos;s different about Manage?</h2>
      <p className={descriptionStyles}>
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </p>
    </div>
  );
}
function FeaturesList() {
  return (
    <ul className="text-blue-950 flex flex-col gap-10">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          number={`${index + 1}`.padStart(2, "0")}
          {...feature}
        />
      ))}
    </ul>
  );
}

function FeatureItem({ title, description, number }) {
  return (
    <li>
      <h3 className="preset-4-bold block relative z-0 mb-2">
        <div className="lg:hidden rounded-full bg-orange-50 -z-10 absolute top-0 left-0 h-full w-screen " />
        <span className="inline-block py-2 px-6 bg-orange-400 text-white rounded-full mr-4 sm:mr-8 lg:mr-6 ">
          {number}
        </span>
        <span>{title}</span>
      </h3>
      <p className="opacity-50 lg:max-w-[450px] lg:ml-23">{description}</p>
    </li>
  );
}
