import { cn } from "@/app/utils/utils";

export default function Button({
  text = "view plans",
  className,
  variant = "outline", // "outline" | "filled"
  ...otherProps
}) {
  const buttonStyles = cn(
    "uppercase preset-8 uppercase transition-colors border-2 py-[12.5px] px-[28.5px] cursor-pointer",
    variant === "outline" &&
      "border-white text-white bg-transparent hover:bg-white hover:text-gray-950",
    variant === "filled" &&
      "border-gray-950 text-gray-950 bg-white hover:text-white hover:bg-gray-950",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
