import { cn } from "@/app/utils/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function Text({
  className,
  preset,
  children,
  as: Tag = "p",
  ...otherProps
}) {
  const textStyles = cn(
    "antialiased tracking-0",
    inter.className,
    preset === 1 && "text-[56px] leading-[56px] font-extrabold",
    preset === 2 && "text-[40px] leading-[40px] font-extrabold",
    preset === 3 && "text-[32px] leading-[32px] font-bold",
    preset === 4 && "text-[20px] leading-[24px] font-extrabold",
    preset === 5 && "text-[18px] leading-[24px] font-bold",
    preset === 6 && "text-[15px] leading-[26px] font-normal",
    preset === 7 && "text-[14px] leading-[24px] tracking-[4.38px] font-bold",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
