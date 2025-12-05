import clsx from "clsx";

export default function Button({ text = "Search" }) {
  const buttonStyles = clsx(
    "py-3 px-6 bg-blue-500 hover:bg-blue-300 transition-colors",
    "preset-5 text-neutral-0",
    "rounded-[10px]"
  );
  return <button className={buttonStyles}>{text}</button>;
}
