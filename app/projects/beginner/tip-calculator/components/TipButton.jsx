import { cn } from "@/app/utils/utils";

export default function TipButton({
  text,
  variant = "normal",
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "rounded-[5px] py-2 px-4",
    variant === "normal" && "bg-[var(--green-900)] text-[var(--grey-50)]",
    variant === "selected" && "bg-[var(--green-400)] text-[var(--green-900)]",
    //This is not a variant, but a pseudoclass.
    "active:bg-[var(--green-200)] active:text-[var(--green-900)]",
    className
  );
  return (
    <button as="button" className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
