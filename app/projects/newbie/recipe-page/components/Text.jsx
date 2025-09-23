import { cn } from "@/app/utils/utils";
import { Outfit, Young_Serif } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });
const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });
export default function Text({
  as: Tag = "p",
  variant = "normal",
  className,
  children,
  ...otherProps
}) {
  const textStyles = cn(
    outfit.className,
    "antialiased text-base",
    variant === "mainTitle" &&
      `${youngSerif.className} text-(--stone-900) text-3xl mb-4`,
    variant === "normal" && "text-(--stone-600) mb-4",
    variant === "title" &&
      `text-2xl ${youngSerif.className} text-(--brown-800) my-4`,
    variant === "prepTitle" && "font-bold text-lg text-(--rose-800)",

    className
  );
  //Variants:
  //Main Title
  //title
  //Normal
  //Normal bold

  //Nutrition units.
  //Preparation time title.

  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}
