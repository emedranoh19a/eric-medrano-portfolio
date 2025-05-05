import { cn } from "@/app/utils/utils";
import { Fraunces, Montserrat } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });

export default function Text({
  preset = 1,
  className,
  as: Tag = "p",
  children,
}) {
  const textStyles = cn(
    "anitaliased font-medium tracking-0",
    preset === 1 &&
      `${fraunces.className} font-bold text-[32px] leading-[100%]`, //32px, 100
    preset === 2 &&
      `${montserrat.className} font-bold text-[14px] leading-[110%]`, //14, 110
    preset === 3 && `${montserrat.className} text-[14px] leading-[160%]`, //14/160
    preset === 4 && `${montserrat.className} text-[12px] leading-[120%]`, //5px letter spacing,120
    preset === 5 && `${montserrat.className} text-[13px] leading-[120%]`, //13 120
    className
  );
  return <Tag className={textStyles}>{children}</Tag>;
}
