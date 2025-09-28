import clsx from "clsx";

export default function Button({
  text = "button",
  variant = "red",
  className,
  ...otherProps
}) {
  const buttonStyles = clsx(
    "group px-2.5 relative z-0 cursor-pointer preset-8 text-gray-950 uppercase",
    "before:absolute before:-z-10 before:w-full before:h-2.5 before:bottom-0 before:left-0",
    "before:rounded-full",
    variant === "red" && "before:bg-red-400",
    variant === "yellow" && "before:bg-yellow-500",
    "before:transition before:opacity-25 hover:before:opacity-100",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {/* <span className="absolute -z-10 bg-lime-500 w-full h-2.5 bottom-0 left-0" /> */}
      {text}
    </button>
  );
}
