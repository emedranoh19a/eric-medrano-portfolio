"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { imageJeremy } from "../../imageIndex";
import { useTime } from "./TimeProvider";

export default function ProfileCard() {
  return (
    <div className="rounded-[15px] overflow-hidden bg-navy-900 sm:col-span-3 lg:col-span-1 lg:row-span-2 flex flex-col">
      <ProfileDetails />
      <TimeControls />
    </div>
  );
}
function ProfileDetails() {
  const bp = useBreakpoint();
  const titleStyles = clsx(
    "text-white flex flex-col gap-2",
    bp === "base" || bp === "sm" || bp === "md" ? "preset-4" : "preset-2"
  );
  return (
    <div className="bg-purple-500 rounded-b-[15px] p-8 flex-1">
      <div className="flex lg:flex-col gap-6 lg:gap-10">
        <div className="bg-red-500 rounded-full relative w-16 lg:w-[78px] aspect-square border-2 border-white shadow-lg">
          <Image
            src={imageJeremy}
            alt="Avatar"
            fill
            className="object-contain"
          />
        </div>
        <div className={titleStyles}>
          <span className="preset-6">Report for</span>
          <span>Jeremy Robson</span>
        </div>
      </div>
    </div>
  );
}

function TimeControl({ label = "" }) {
  const { time, setTime } = useTime();
  const buttonStyles = cn(
    "text-purple-500 hover:text-white transition-colors flex-1 cursor-pointer",
    "preset-5 capitalize",
    time === label && "text-white"
  );
  return (
    <button className={buttonStyles} onClick={() => setTime(label)}>
      {label}
    </button>
  );
}

function TimeControls() {
  const buttonsContainerStyles = clsx(
    "flex flex-row lg:flex-col gap-0 sm:gap-2 lg:gap-5 w-full py-6 lg:py-7 lg:px-8"
  );

  return (
    <div className={buttonsContainerStyles}>
      <TimeControl label="daily" />
      <TimeControl label="weekly" />
      <TimeControl label="monthly" />
    </div>
  );
}
