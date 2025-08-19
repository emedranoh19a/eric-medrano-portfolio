import { cn } from "@/app/utils/utils";

export default function Text({
  children,
  preset = 4,
  className,
  as: Tag = "p",
}) {
  const textStyles = cn(
    "antialiased",
    preset === 1 && "font-bold text-[88px] leading-[88px] tracking-[-2.5px]",
    preset === 2 && "font-bold text-[48px] leading-[56px] tracking-[-1.5px]",
    preset === 3 && "font-bold text-[24px] leading-[32px] tracking-0",
    preset === 4 && "font-medium text-[18px] leading-[28px] tracking-0", //500 for medium, 400 for bold
    className
  );
  return <Tag className={textStyles}>{children}</Tag>;
}
