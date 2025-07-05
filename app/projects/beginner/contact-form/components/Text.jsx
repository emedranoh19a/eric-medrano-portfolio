import { cn } from "@/app/utils/utils";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });
export default function Text({
  as: Tag = "p",
  children,
  className,
  variant,
  ...otherProps
}) {
  //Style:
  const textStyles = cn(
    karla.className,
    "antialiased text-[var(--grey-900)] font-regular tracking-0",
    variant === "heading" &&
      "text-3xl font-bold leading-[100%] tracking-[-1px]",
    variant === "body-md" && "text-lg leading-[150%]",
    variant === "body-sm" && "text-base leading-[150%]",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
