import { cn } from "@/app/utils/utils";
import { Inconsolata, Inter, Lora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: [""] });
const lora = Lora({ subsets: ["latin"], weight: [""] });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: [""] });

export default function Text({
  children,
  className,
  variant = "body",
  size = "sm",
  as: Tag = "p",
  ...otherProps
}) {
  //State:
  //This time, we consume the context.

  //Style:
  const textStyles = cn(
    "antialiased",
    //TODO: interpolate the className of the consumed font
    variant === "heading" && size === "lg" && "",
    variant === "heading" && size === "md" && "",
    variant === "heading" && size === "sm" && "",
    variant === "body" && size === "md" && "",
    variant === "body" && size === "sm" && "",
    className
  );
  return (
    <Tag className={textStyles} {...otherProps}>
      {children}
    </Tag>
  );
}

export function UnvariableText({
  className,
  as: Tag = "p",
  children,
  font = "sans-serif",
  ...otherProps
}) {
  //process the font
  const styles = cn(
    "",
    font === "sans-serif" && ``,
    font === "serif" && ``,
    font === "mono" && ``,
    className
  );
  return (
    <Tag className={styles} {...otherProps}>
      {children}
    </Tag>
  );
}
