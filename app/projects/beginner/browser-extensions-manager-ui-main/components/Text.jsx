import { cn } from "@/app/utils/utils";

export default function Text({
  children,
  preset = 3,
  className,
  as: Tag = "p",
  ...otherProps
}) {
  const textStyles = cn(
    "antialiased leading-[140%] text-xl",
    preset === 1 && "font-bold text-[34px] tracking-[-1px]",
    preset === 2 && "font-bold leading-[120%] tracking-[-0.2px]",
    preset === 3 && "font-normal tracking-[-0.3px]",
    preset === 4 && "font-medium tracking-[-0.3px]",
    preset === 5 && "font-normal text-base tracking-[-0.5px]",
    preset === 6 && "font-medium text-base tracking-[-0.5px]",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
