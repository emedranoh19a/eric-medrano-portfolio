import { cn } from "@/app/utils/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
export default function Text({
  as: Tag = "p",
  className,
  preset,
  children,
  ...otherProps
}) {
  const textCn = cn(
    "antialiased",
    inter.className,

    preset === 1 && "text-6xl font-bold leading-[110%] tracking-[-5%]",
    preset === 2 && "text-5xl font-bold leading-[110%] tracking-[-5%]",
    preset === 3 && "text-[32px] font-bold leading-[110%] tracking-[-5%]",
    preset === 4 && "text-2xl font-bold leading-[120%] tracking-[-5%]",
    preset === 5 && "text-xl font-bold leading-[120%] tracking-[-5%]",
    preset === 6 && "text-base font-regular leading-[150%]", //Note: sometimes we need semibold
    preset === 7 && "text-sm font-regular leading-[150%]", //Note: sometimes we need bold

    className
  );
  return (
    <Tag className={textCn} {...otherProps}>
      {children}
    </Tag>
  );
}
