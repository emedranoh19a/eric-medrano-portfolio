import { cn } from "@/app/utils/utils";

export default function Text({
  as: Tag = "p",
  preset = 6,
  className,
  children,
  ...otherProps
}) {
  const textStyles = cn(
    "font-bold antialised",
    preset === 1 && "text-[48px] leading-[71px] tracking-[-1px]",
    preset === 2 && "text-[32px] leading-[47px] tracking-[-0.67px]",
    preset === 3 && "text-[24px] leading-[36px] ",
    preset === 4 && "text-[20px] leading-[30px] ",
    preset === 5 && "text-[16px] leading-[24px] ",
    preset === 6 && "text-[13px] leading-[19px] ",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
