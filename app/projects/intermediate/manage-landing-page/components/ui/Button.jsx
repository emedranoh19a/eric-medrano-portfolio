import { cn } from "@/app/utils/utils";

export default function Button({
  variant = "primary",
  label = "",
  className = "",
  ...otherProps
}) {
  const buttonStyles = cn(
    "preset-5-bold  cursor-pointer",
    "py-4 px-8  transition-colors",
    variant === "primary"
      ? "text-white bg-orange-400 hover:bg-orange-350 shadow-orange-400/20"
      : "bg-white text-orange-400 hover:text-orange-400/50 hover:bg-white shadow-neutral-300/30",
    "rounded-full shadow-xl ",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {label}
    </button>
  );
}
