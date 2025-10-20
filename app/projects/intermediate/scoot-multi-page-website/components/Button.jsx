import { cn } from "@/app/utils/utils";

export default function Button({ text, className, ...otherProps }) {
  const buttonStyles = cn(
    "px-10 py-[14px] text-white preset-button",
    "cursor-pointer border-2 border-yellow bg-yellow",
    "transition-colors hover:bg-transparent hover:text-yellow",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
