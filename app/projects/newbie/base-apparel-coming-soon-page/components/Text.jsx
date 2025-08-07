import { cn } from "@/app/utils/utils";

const textVariants = {
  1: "text-[64px] leading-[100%] tracking-[17.5px] font-light",
  2: "text-[40px] leading-[100%] tracking-[10px] font-light",
  3: "text-[16px] leading-[215%] tracking-0 font-normal",
  4: "text-[14px] leading-[155%] tracking-0 font-normal",
  5: "text-[13px] leading-[215%] tracking-0 font-normal",
};
const textAccents = {
  1: "leading-[110%] font-semibold",
  2: "font-semibold",
  3: "",
  4: "",
  5: "",
};

export default function Text({
  children,
  as: Tag = "p",
  className,
  preset = 3,
  accent = false,
  ...otherProps
}) {
  //Style:
  const textStyles = cn(
    "antialiased",
    textVariants[preset],
    accent && textAccents[preset],
    className
  );

  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
