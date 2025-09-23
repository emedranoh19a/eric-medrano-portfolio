import clsx from "clsx";

export default function Button({
  text = "Contact me",
  className,
  ...otherProps
}) {
  const buttonStyles = clsx(
    "uppercase hover:text-(--green) transition-colors cursor-pointer",
    "text-[16px] leading-[26px] tracking-[2.30px] font-bold",
    "relative pb-3 after:bottom-0 after:inset-x-0 after:absolute after:h-[2px] after:w-full after:bg-(--green)",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
