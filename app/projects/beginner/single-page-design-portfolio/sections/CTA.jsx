"use client";

import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Button from "../components/Button";

export default function CTA() {
  const containerStyles = clsx(
    "w-full flex flex-col lg:flex-row gap-10 lg:justify-between items-center",
    // "mb-8 sm:mb-12",
    "bg-(--neutral-900) py-10 px-4 sm:py-16 sm:px-10 lg:py-20 lg:px-16",
    "rounded-xl"
  );
  return (
    <section id="cta" className={containerStyles}>
      <Content />
      <Button text="Free Consultation" variant="red" />
    </section>
  );
}

function Content() {
  const bp = useBreakpoint();

  const titleStyles = clsx(
    "mb-6",
    bp === "base" || bp === "sm" ? "preset-1-mobile" : "preset-2"
  );
  return (
    <div className="antialiased text-(--neutral-200) max-w-[540px] text-center lg:text-left">
      <h2 className={titleStyles}>Book a call with me</h2>
      <p className="preset-4">
        I&apos;d love to have a chat to see how I can help you. The best first
        step is for us to discuss your project during a free consultation. Then
        we can move forward from there.
      </p>
    </div>
  );
}
