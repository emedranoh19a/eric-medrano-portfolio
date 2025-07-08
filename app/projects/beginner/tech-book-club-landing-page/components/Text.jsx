import { cn } from "@/app/utils/utils";
import { Martian_Mono } from "next/font/google";

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function Text({
  children,
  className,
  as: Tag = "p",
  preset = 4,
  otherProps,
}) {
  const textStyles = cn(
    `antialiased ${martianMono.className}`,
    preset === 1 &&
      "text-[38px] lg:text-[62px] leading-[120%] font-bold tracking-[-2px]",
    preset === 2 &&
      "text-[34px] lg:text-[50px] leading-[130%] font-semibold tracking-[-2px]",
    preset === 3 &&
      "text-[24px] lg:text-[34px] leading-[110%] lg:leading-[130%] font-semibold tracking-[-1px]",
    //Note: this preset has a semibold variant.
    preset === 4 && "text-[24px] leading-[110%] font-normal tracking-[-1px]",
    //Note: this preset has a semibold variant.
    preset === 5 && "text-[20px] leading-[140%] font-normal tracking-[-0.5px]",
    preset === 6 &&
      "text-[16px] lg:text-[18px] leading-[130%] font-semibold tracking-[-1px]",
    preset === 7 && "text-[14px] leading-[120%] font-normal tracking-[-1px]",
    className
  );

  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
