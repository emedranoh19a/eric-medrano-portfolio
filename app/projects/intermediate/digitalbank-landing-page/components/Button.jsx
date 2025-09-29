import clsx from "clsx";

export default function Button({
  text = "Request Invite",
  className,
  ...otherProps
}) {
  const buttonStyles = clsx(
    "cursor-pointer relative z-0 px-8 py-2 w-fit bg-linear-to-bl from-(--gradient-green-start) to-(--gradient-green-end) rounded-full",
    "preset-7 text-white overflow-hidden",
    "before:absolute before:inset-0 before:-z-10 hover:before:opacity-40 before:bg-white before:transition before:opacity-0",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
