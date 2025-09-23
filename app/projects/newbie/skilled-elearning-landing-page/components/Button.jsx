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
    "cursor-pointer relative py-4 px-8 rounded-full overflow-hidden inline-block w-fit",
    "before:bg-white before:absolute before:w-full before:h-full before:top-0 before:left-0 before:transition hover:before:opacity-50 before:opacity-0",
    variant === "black" && "bg-(--blue-900)",
    variant === "orange" &&
      "bg-linear-to-b from-(--gradient-pink-top) to-(--gradient-pink-bottom)",
    variant === "purple" &&
      "bg-linear-to-b from-(--gradient-purple-top) to-(--gradient-purple-bottom)",
    variant === "link" && "py-0 px-0",
    className
  );
  return (
    <button className={buttonStyles}>
      <Text
        as="span"
        preset={7}
        className={variant === "link" ? "text-(--pink-600)" : "text-white"}
      >
        {text}
      </Text>
    </button>
  );
}
