import { cn } from "@/app/utils/utils";

export default function Button({ text = "button", className, ...otherProps }) {
  const buttonCn = cn(
    "py-4 w-full text-center bg-[var(--purple-950)] text-[#d4d4d4] capitalize rounded",
    className
  );
  return (
    <button className={buttonCn} {...otherProps}>
      {text}
    </button>
  );
}
