import { cn } from "@/app/utils/utils";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

//A map of presets:
const presets = {
  1: "text-[40px] lg:text-[56px] leading-[100%] tracking-0 font-bold",
  2: "text-[16px] leading-[150%] tracking-0 font-normal",
  3: "text-[12px] leading-[150%] tracking-0 font-bold",
};
export default function Text({
  children,
  className,
  preset = 3,
  as: Tag = "p",
  ...otherProps
}) {
  const textStyles = cn(
    "antialiased",
    roboto.className,
    presets[preset],
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
