import { cn } from "@/app/utils/utils";
export default function Text({
  as: Tag = "p",
  preset = 1,
  className,
  children,
  ...otherProps
}) {
  //Style:
  const textStyles = cn(
    "leading-[150%] tracking-[0px]",
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
