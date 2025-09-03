import { cn } from "@/app/utils/utils";

export const presets = {
  1: "text-[28px] leading-[130%] tracking-[3.5px]",
  2: "text-[18px] leading-[130%] tracking-[2.5px]",
  3: "text-[18px] leading-[130%] tracking-[0px]",
  4: "text-[14px] leading-[130%] tracking-[2px]",
  5: "text-[12px] leading-[125%] tracking-[2px]",
  6: "text-[12px] leading-[125%] tracking-[0px]",
  7: "text-[9px] leading-[125%] tracking-[1.25px]",
};
export default function Text({
  as: Tag = "p",
  className = "",
  preset = 6,
  children,
  ...otherProps
}) {
  const textStyles = cn("antialiased font-medium", presets[preset], className);
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
//TODO: Consider using a High order component, only to inyect specific styles to a component.
