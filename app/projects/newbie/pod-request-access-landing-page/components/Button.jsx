import clsx from "clsx";

export default function Button({ className, text = "", onClick }) {
  const buttonStyles = clsx(
    "relative rounded-full  group px-8 py-2 bg-[var(--green)] overflow-hidden text-[var(--blue-950)]",
    "lg:w-full",
    className
  );
  return (
    <button type="submit" className={buttonStyles} onClick={onClick}>
      <div className="absolute opacity-0 transition transition-colors top-0 left-0 w-full h-full group-hover:opacity-50 bg-white" />
      {text}
    </button>
  );
}
