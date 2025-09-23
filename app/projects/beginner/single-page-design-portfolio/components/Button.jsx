import { cn } from "@/app/utils/utils";

export default function Button({
  text = "button",
  variant = "dark",
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "preset-5 cursor-pointer text-(--neutral-200) rounded-full transition-colors ",
    "py-4 px-12",
    " focus:outline-solid focus:outline-4 focus:outline-offset-4",
    variant === "dark"
      ? "bg-(--neutral-900) focus:hover:bg-(--neutral-900) hover:bg-(--galactic-blue-500) focus:outline-(--galactic-blue-500)"
      : "bg-(--light-red-500) focus:hover:bg-(--light-red-500) hover:bg-(--summer-yellow-500) focus:outline-(--summer-yellow-500)",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
