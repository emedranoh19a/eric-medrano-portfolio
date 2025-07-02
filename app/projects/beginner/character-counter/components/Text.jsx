import { cn } from "@/app/utils/utils";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });
export default function Text({
  children,
  preset = 1,
  className,
  as: Tag = "p",
  ...otherProps
}) {
  //Style:
  const textStyles = cn(
    "antialiased",
    dmSans.className,
    preset === 1 &&
      "lg:text-[64px] text-[40px] font-bold leading-[100%] tracking-[-1px]",
    preset === 2 && "text-[24px] font-semibold leading-[130%] tracking-[-1px]",
    preset === 3 && "text-[20px] font-normal leading-[140%] tracking-[-0.6px]",
    preset === 4 && "text-[16px] font-normal leading-[130%] tracking-[-0.6px]",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
