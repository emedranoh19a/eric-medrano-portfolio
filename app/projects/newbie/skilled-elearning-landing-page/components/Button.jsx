import { cn } from "@/app/utils/utils";
import Text from "./Text";

//Note: variants: Black, orange, purple,
export default function Button({
  text = "Get Started",
  variant = "black",
  className,
}) {
  //Style:
  const buttonStyles = cn(
    "relative py-4 px-8 rounded-full overflow-hidden inline-block w-fit",
    "before:bg-white before:absolute before:w-full before:h-full before:top-0 before:left-0 before:transition before:hover:opacity-50 before:opacity-0",
    variant === "black" && "bg-[var(--blue-900)]",
    variant === "orange" &&
      "bg-gradient-to-b from-[var(--gradient-pink-top)] to-[var(--gradient-pink-bottom)]",
    variant === "purple" &&
      "bg-gradient-to-b from-[var(--gradient-purple-top)] to-[var(--gradient-purple-bottom)]",
    variant === "link" && "py-0 px-0",
    className
  );
  return (
    <button className={buttonStyles}>
      <Text
        as="span"
        preset={7}
        className={variant === "link" ? "text-[var(--pink-600)]" : "text-white"}
      >
        {text}
      </Text>
    </button>
  );
}
