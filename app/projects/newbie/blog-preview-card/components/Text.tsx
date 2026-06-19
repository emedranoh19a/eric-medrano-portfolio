import { cn } from "@/app/utils/utils";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TextProps<T extends ElementType> = {
  as?: T;
  preset: number;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>

export function Text<T extends ElementType = "p">({
  as,
  preset = 1,
  className,
  children,
  ...otherProps
}: TextProps<T>) {
  const Tag = as || "p";
  //Style:
  const textStyles = cn(
    "leading-[150%] tracking-[0px] text-wrap",
    preset === 1 &&
    "text-2xl font-semibold group-hover:text-(--yellow) transition-colors",
    preset === 2 && "text-base",
    preset === 3 && "text-sm",
    preset === 4 && "text-sm font-extrabold",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
