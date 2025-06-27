import { cn } from "@/app/utils/utils";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "900"],
});

export default function Text({
  children,
  as: Tag = "p",
  className,
  preset,
  ...otherProps
}) {
  const textStyles = cn(
    `antialiased ${redHatDisplay.className}`,
    preset === 1 &&
      "text-[40px] sm:text-[48px] lg:text-[64px] leading-[110%] tracking-0 font-black",
    preset === 2 &&
      "text-[32px] sm:text-[36px] lg:text-[40px] leading-[110%] tracking-0 font-black",
    preset === 3 &&
      "text-[12px] sm:text-[14px] lg:text-[16px] leading-[110%] tracking-[4px] font-black",
    preset === 4 &&
      "text-[16px] sm:text-[18px] leading-[150%] tracking-0 font-medium",
    preset === 5 && "text-[16px] leading-[150%] tracking-0 font-black",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
