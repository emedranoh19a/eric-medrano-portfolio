"use client";
import clsx from "clsx";
import Image from "next/image";
import { iconDown, iconUp } from "../../imageIndex";
import { useDarkMode } from "./DarkTheme";

export default function CardStatistics({
  description,
  icon,
  value,
  percentage,
}) {
  const { isDark } = useDarkMode();
  const redNumbers = percentage < 0;
  //Style:
  const cardStyles = clsx(
    "p-6 flex transition-colors justify-between rounded-[5px]",
    isDark ? "bg-navy-950 hover:bg-navy-900" : "bg-navy-50 hover:bg-gray-200"
  );
  const percentageStyles = clsx(
    "preset-6-bold",
    redNumbers ? "text-red-500" : "text-green-500"
  );
  const descriptionStyles = clsx(
    "preset-50",
    isDark ? "text-gray-400" : "text-gray-65"
  );
  const valueStyles = clsx("preset-2", isDark ? "text-white" : "text-gray-950");
  return (
    <div className={cardStyles}>
      <div className="flex flex-col gap-6 h-full">
        <span className={descriptionStyles}>{description}</span>
        <span className={valueStyles}>{value}</span>
      </div>
      <div className="flex flex-col justify-start gap-10 items-end">
        {/* logo */}
        <div className="w-5 aspect-square relative">
          <Image src={icon} fill className="object-contain" alt="" />
        </div>
        {/* stat */}
        <div className="w-fit flex gap-2 items-center">
          <div className="w-2 h-1 relative">
            <Image
              src={redNumbers ? iconDown : iconUp}
              className="object-contain"
              fill
              alt=""
            />
          </div>
          <span className={percentageStyles}>
            {`${percentage}`.replace("-", "")} %
          </span>
        </div>
      </div>
    </div>
  );
}
