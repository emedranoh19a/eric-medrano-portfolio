import { cn } from "@/app/utils/utils";
export default function Text({
  as: Tag = "p",
  preset = 1,
  className,
  children,
}) {
  //Style:
  const textStyles = cn(
    "antialiased text-white font-light",
    preset === 1 && "text-[32px] leading-[120%] lg:text-5xl  tracking-0", //48px
    preset === 2 && "text-sm leading-6 md:text-lg",
    preset === 3 && "font-bold text-sm leading-[200%]",
    className
  );

  return <Tag className={textStyles}>{children}</Tag>;
}
