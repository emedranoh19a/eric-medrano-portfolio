"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import clsx from "clsx";
import Image from "next/image";
import {
  iconEllipsis,
  iconExercise,
  iconPlay,
  iconSelfCare,
  iconSocial,
  iconStudy,
  iconWork,
} from "../../imageIndex";
import { useTime } from "./TimeProvider";

export default function Card({ title, timeframes }) {
  const { time } = useTime();
  const bp = useBreakpoint();
  const valueStyles = clsx(
    "whitespace-nowrap",
    bp === "base" ? "preset-3" : "preset-1"
  );

  const backgroundStyles = clsx(
    "group relative h-full z-0 pt-[45px] rounded-[15px] overflow-hidden h-fit",
    title === "Work" && "bg-orange-300",
    title === "Play" && "bg-blue-300",
    title === "Study" && "bg-pink-400",
    title === "Exercise" && "bg-green-400",
    title === "Social" && "bg-purple-500",
    title === "Self Care" && "bg-yellow-300"
  );
  const imgSrc =
    title === "Work"
      ? iconWork
      : title === "Play"
      ? iconPlay
      : title === "Study"
      ? iconStudy
      : title === "Exercise"
      ? iconExercise
      : title === "Social"
      ? iconSocial
      : title === "Self Care"
      ? iconSelfCare
      : iconWork;
  return (
    <div className={backgroundStyles}>
      {/* Ornamental */}
      <div className=" w-[78px] aspect-square -top-[11px] right-[17px] absolute -z-10">
        <div className="relative w-full h-full">
          <Image src={imgSrc} className="object-contain" alt="" fill />
        </div>
      </div>
      {/* Content */}
      <div className="z-10 p-8 h-full bg-navy-900 group-hover:bg-navy-800 transition-colors rounded-t-[15px] text-white flex flex-col gap-6">
        {/* item 1: menu */}
        <div className="flex justify-between items-center">
          <span className="preset-5">{title}</span>
          <button className=" w-[21px] h-[4px] relative inline-block">
            <Image src={iconEllipsis} alt="" className="object-contain" fill />
          </button>
        </div>
        {/* item 2: Content */}
        <div className="flex flex-row sm:flex-col gap-2 justify-between items-center sm:items-start">
          <span className={valueStyles}>{timeframes[time].current} hrs</span>
          <span className="preset-6 text-navy-200">
            Last Week - {timeframes[time].previous} hrs.
          </span>
        </div>
      </div>
    </div>
  );
}
