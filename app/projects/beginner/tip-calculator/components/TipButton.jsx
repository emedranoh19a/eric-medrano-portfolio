import { cn } from "@/app/utils/utils";

export default function TipButton({
  value,
  variant = "normal",
  className,
  ...otherProps
}) {
  //State:

  //Style:
  const buttonStyles = cn(
    "rounded-[5px] py-2 px-4  w-full",
    variant === "normal" && "bg-(--green-900) text-(--grey-50)",
    variant === "selected" && "bg-(--green-400) text-(--green-900)",
    //This is not a variant, but a pseudoclass.
    "active:bg-(--green-200) active:text-(--green-900)",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {value}%
    </button>
  );
}
