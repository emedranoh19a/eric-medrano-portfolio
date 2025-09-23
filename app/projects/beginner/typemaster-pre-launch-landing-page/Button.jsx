import { cn } from "@/app/utils/utils";

export default function Button({
  text,
  variant = "primary",
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "py-4 px-6 uppercase rounded-[8px] text-base font-bold leading-[126%] transition-colors",
    variant === "primary" &&
      "bg-(--primary) hover:bg-(--primary-light) text-white ",
    variant === "secondary" &&
      "bg-(--light-gray) hover:bg-(--dark-gray) text-(--dark-gray) hover:text-white",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
