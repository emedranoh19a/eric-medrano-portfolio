import { cn } from "@/app/utils/utils";

export default function Button({
  text,
  className,
  variant = 1,
  ...otherProps
}) {
  const buttonStyles = cn(
    "preset-6-bold rounded-full transition-colors cursor-pointer",
    variant === 1 &&
      "p-4  bg-white text-red-500 hover:bg-red-400 hover:text-white ",
    variant === 2 &&
      "py-4 px-6 bg-transparent text-white border-white border-2 hover:bg-white hover:text-red-400",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
