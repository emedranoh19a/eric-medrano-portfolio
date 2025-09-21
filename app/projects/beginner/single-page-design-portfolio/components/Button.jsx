import { cn } from "@/app/utils/utils";

export default function Button({
  text = "button",
  variant = "dark",
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "preset-5 text-[var(--neutral-200)] rounded-full transition-colors ",
    "py-4 px-12",
    " focus:outline focus:outline-4 focus:outline-offset-4",
    variant === "dark"
      ? "bg-[var(--neutral-900)] focus:hover:bg-[var(--neutral-900)] hover:bg-[var(--galactic-blue-500)] focus:outline-[var(--galactic-blue-500)]"
      : "bg-[var(--light-red-500)] focus:hover:bg-[var(--light-red-500)] hover:bg-[var(--summer-yellow-500)] focus:outline-[var(--summer-yellow-500)]",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
