import { cn } from "@/app/utils/utils";

export default function Button({
  text = "Get Started",
  variant = "primary",
  className = "",
  ...otherProps
}) {
  const buttonStyles = cn(
    "preset-5 px-10 py-3 rounded-full transition cursor-pointer",
    variant === "primary" &&
      "text-neutral-0 bg-blue-500 hover:bg-blue-300 focus:outline-2 outline-blue-300 outline-offset-2",
    variant === "secondary" &&
      "text-blue-500 bg-blue-100 hover:bg-blue-500 hover:text-neutral-0 focus:outline-2 focus:outline-blue-500 outline-offset-2",
    variant === "white" &&
      "text-blue-500 bg-white hover:bg-blue-100 focus:outline-2 outline-0 outline-white outline-offset-2",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
