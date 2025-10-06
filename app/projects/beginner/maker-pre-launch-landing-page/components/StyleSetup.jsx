import clsx from "clsx";
import { Manrope } from "next/font/google";
import "../theme.css";

const manrope = Manrope({ subsets: ["latin"], weights: ["400", "800"] });

export default function StyleSetup({ children }) {
  const containerStyles = clsx(
    manrope.className,
    "w-full min-h-screen h-fit overflow-hidden",
    "flex flex-col gap-20 sm:gap-24 lg:gap-40",
    "pb-14 lg:pb-24 px-4 sm:px-8 lg:px-[165px] text-neutral-400"
  );
  return <div className={containerStyles}>{children}</div>;
}
