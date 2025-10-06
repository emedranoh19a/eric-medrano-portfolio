import { cn } from "@/app/utils/utils";

export default function Button({ text, className, ...otherProps }) {
  const buttonStyles = cn(
    "bg-cyan-400 text-blue-800 preset-6 px-6 py-3 rounded-full border-2 border-cyan-400 transition-colors cursor-pointer",
    "hover:bg-transparent hover:text-neutral-0",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
