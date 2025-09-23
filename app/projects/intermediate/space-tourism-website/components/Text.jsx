import { cn } from "@/app/utils/utils";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: ["400"] });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
});
const barlow = Barlow({ subsets: ["latin"], weight: ["400"] });

export default function Text({
  as: Tag = "p",
  preset = 9,
  className = "",
  children,
  ...otherProps
}) {
  //Style:
  const textStyles = cn(
    bellefair.className,
    "text-(--white) uppercase tracking-[0px]",
    preset === 1 && "text-[80px] xl:text-[144px]",
    preset === 2 && "text-[56px] md:text-[80px] xl:text-[100px]",
    preset === 3 && "text-[24px] md:text-[40px] xl:text-[56px]",
    preset === 4 && "text-[18px] md:text-[24px] xl:text-[32px]",
    preset === 5 &&
      `text-[20px] xl:text-[28px] tracking-[4px] ${barlowCondensed.className}`,
    preset === 6 && "text-[16px] xl:text-[28px]",
    preset === 7 && `text-sm tracking-[2px] ${barlowCondensed.className}`,
    preset === 8 &&
      `text-[14px] xl:text-base tracking-[2px]  ${barlowCondensed.className}`,
    preset === 9 &&
      `text-[15px] md:text-[16px] xl:text-lg normal-case leading-[180%] ${barlow.className}`,
    className
  );

  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
