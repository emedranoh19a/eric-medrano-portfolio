import { cn } from "@/app/utils/utils";

export default function Button({
  text,
  size = "lg",
  variant = "primary",
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "cursor-pointer w-fit",
    size === "sm"
      ? "preset-6 py-[13px] sm:px-[22.5px]"
      : "py-2 px-6 preset-4-bold",
    " rounded-[14px] transition-colors",
    variant === "primary" &&
      "bg-gray-950 text-gray-50 border-2 border-gray-950 hover:bg-white hover:text-gray-950",
    variant === "secondary" &&
      "text-gray-500 border-2 border-gray-500 hover:border-gray-950 hover:text-gray-950",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
