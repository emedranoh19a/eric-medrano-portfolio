import { cn } from "@/app/utils/utils";

export default function Button({
  text = "Request Beta Access",
  variant = "outline",
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "relative group z-0",
    "pt-4 pb-3 px-6 cursor-pointer",
    "rounded-md border-1 preset-6 align-text-top overflow-hidden hover:border-transparent",
    variant === "outline" &&
      "text-neutral-900 hover:text-neutral-0 border-neutral-900 bg-transparent hover:bg-neutral-900",
    variant === "filled" &&
      "preset-6 bg-neutral-900 text-neutral-0 hover:bg-transparent",
    "focus:outline-2 outline-0 outline-neutral-900 outline-offset-2 transition",
    className
  );

  return (
    <button className={buttonStyles} {...otherProps}>
      {variant === "filled" && (
        <div className="absolute -z-10 opacity-0 transition group-hover:opacity-100 w-full h-full top-0 left-0 bg-[linear-gradient(135deg,_#A060FF_0%,_#CB30E3_49.21%,_#FFA84E_100%)]" />
      )}
      {text}
    </button>
  );
}

// background: linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%);
