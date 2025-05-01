"use client";
import { cn } from "../utils/utils";
export function BentoGrid({ className, children }) {
  //Style:
  const containerStyles = cn(
    "max-w-md xl:max-w-5xl 2xl:max-w-7xl mx-auto px-0 md:px-3  ",
    "grid gap-4 grid-cols-1 sm:grid-cols-2 md:auto-rows-[18rem] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ",
    "grid-flow-row-dense" //This will positionate the items in the grid.
  );
  return <div className={cn(containerStyles, className)}>{children}</div>;
}
