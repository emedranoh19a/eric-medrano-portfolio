"use client";
import clsx from "clsx";
import Image from "next/image";
import { iconDown, iconUp } from "../../imageIndex";
import { useDarkMode } from "./DarkTheme";

export default function CardData({
  icon,
  alt,
  user,
  followers,
  todayOverview,
  lineClassName,
}) {
  const { isDark } = useDarkMode();
  const lineStyles = clsx("absolute top-0 inset-x-0 w-full h-1", lineClassName);
  const cardStyles = clsx(
    "relative transition-colors w-full py-8 rounded-[5px] overflow-hidden",
    isDark ? "bg-navy-950 hover:bg-navy-900" : "bg-navy-50 hover:bg-gray-200"
  );
  return (
    <div className={cardStyles}>
      <div className={lineStyles} />
      <div className="mx-auto flex flex-col gap-6 text-center">
        <CardHeader icon={icon} alt={alt} user={user} />
        <CardFollowers followers={followers} />
        <CardStat todayOverview={todayOverview} />
      </div>
    </div>
  );
}
function CardHeader({ icon, alt, user }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-5 aspect-square relative">
        <Image src={icon} alt={alt} className="object-contain" fill />
      </div>
      <div className="preset-6-bold text-gray-400">{user}</div>
    </div>
  );
}
function CardFollowers({ followers }) {
  const { isDark } = useDarkMode();
  const followersStyles = clsx(
    "preset-1",
    isDark ? "text-white" : "text-gray-950"
  );
  return (
    <div className="flex flex-col gap-2">
      <span className={followersStyles}>{followers}</span>
      <span className="preset-6-regular text-gray-400">Followers</span>
    </div>
  );
}
function CardStat({ todayOverview }) {
  const redNumbers = todayOverview < 0;
  const spanStyles = clsx(
    "preset-6-bold",
    redNumbers ? "text-red-500" : "text-green-500"
  );
  const iconArrow = redNumbers ? iconDown : iconUp;
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="relative w-2 h-1">
        <Image src={iconArrow} alt="" className="object-contain" fill />
      </div>
      <span className={spanStyles}>
        {`${todayOverview}`.replace("-", "")} today
      </span>
    </div>
  );
}
