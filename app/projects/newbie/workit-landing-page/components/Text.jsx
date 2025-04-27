import { cn } from "@/app/utils/utils";
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });
export default function Text({
  preset = 4,
  className,
  children,
  as: Tag = "p",
  ...otherProps
}) {
  //...,md,xl
  //Style:
  const textStyles = cn(
    `${fraunces.className} antialiased`,
    preset === 1 && ` text-5xl md:text-6xl xl:8xl font-semibold`,
    preset === 2 && `text-3xl md:text-5xl xl:text-6xl font-semibold leading-5`,
    preset === 3 && `text-2xl md:text-3xl xl:text-4xl leading-5 font-semibold`,
    preset === 4 && `${manrope.className} text-base xl:text-lg leading-7`,
    preset === 5 && `${manrope.className} text-lg font-bold leading-7`,
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
