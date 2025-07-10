import clsx from "clsx";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Text({
  className,
  children,
  preset,
  as: Tag = "p",
  ...otherProps
}) {
  const textStyles = clsx(
    `antialiased ${plusJakartaSans.className}`,
    preset === 1 && "text-[56px] leading-[125%] tracking-[-1px] font-bold",
    preset === 2 && "text-[24px] leading-[125%] tracking-[-1px] font-bold",
    preset === 3 && "text-[18px] leading-[125%] tracking-[-1px] font-bold",
    preset === 4 && "text-[16px] leading-[150%] tracking-0 font-medium",
    preset === 5 && "text-[14px] leading-[150%] tracking-0 font-medium",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
