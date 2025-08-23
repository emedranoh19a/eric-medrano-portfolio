import { cn } from "@/app/utils/utils";

export default function Text({
  className,
  preset,
  children,
  as: Tag = "p",
  ...otherProps
}) {
  //TODO: Extract the font from NextJS, with weights: 400 & 700
  const textStyles = cn(
    "antialiased tracking-0 font-bold",
    preset === 1 && "text-[56px] leading-[56px]",
    preset === 2 && "text-[40px] leading-[40px]",
    preset === 3 && "text-[32px] leading-[32px]",
    preset === 4 && "text-[20px] leading-[24px]",
    preset === 5 && "text-[18px] leading-[24px]",
    preset === 6 && "text-[15px] leading-[26px] font-normal",
    preset === 7 && "text-[14px] leading-[24px] tracking-[4.38px]",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
