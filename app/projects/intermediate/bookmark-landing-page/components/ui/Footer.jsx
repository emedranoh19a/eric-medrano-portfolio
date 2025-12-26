"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import { iconFacebook, iconTwitter } from "../../imageIndex";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative py-[32px] z-0 flex flex-col items-center sm:flex-row justify-between gap-12 lg:gap-16 h-fit">
      <div className="bg-blue-950 -z-10 absolute w-screen h-full top-0 left-1/2 -translate-x-[50vw]" />
      <Logo light />
      <Links className="lg:mr-auto" />
      <SNS />
    </footer>
  );
}

function Links({ className }) {
  const bp = useBreakpoint();
  const listStyles = clsx(
    "uppercase text-white",
    "flex flex-col sm:flex-row gap-6 lg:gap-12",
    bp === "base" || bp === "sm"
      ? "preset-2-mobile-regular"
      : "preset-6-regular",
    className
  );
  return (
    <ul className={listStyles}>
      <LinksItem text="Features" />
      <LinksItem text="Pricing" />
      <LinksItem text="Contact" />
    </ul>
  );
}
function LinksItem({ text }) {
  return <li className="">{text}</li>;
}
function SNS() {
  return (
    <div className="flex w-fit gap-10">
      <div className="size-6 relative cursor-pointer">
        <Image
          src={iconFacebook}
          className="object-contain"
          fill
          alt="facebook"
        />
      </div>
      <div className="w-6 h-5 relative cursor-pointer">
        <Image
          src={iconTwitter}
          className="object-contain"
          fill
          alt="twitter"
        />
      </div>
    </div>
  );
}
