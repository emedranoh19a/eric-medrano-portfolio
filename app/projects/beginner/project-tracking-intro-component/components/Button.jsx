import clsx from "clsx";

export default function Button({ text = "Button", className, ...otherProps }) {
  const buttonStyles = clsx(
    "text-white preset-4-bold",
    "cursor-pointer rounded-[5px]",
    "py-4 px-8 bg-red-400 hover:bg-red-350 transition-colors"
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
