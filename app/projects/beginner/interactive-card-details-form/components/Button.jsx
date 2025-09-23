import { cn } from "@/app/utils/utils";

export default function Button({ text = "Button", className, ...otherProps }) {
  const buttonStyles = cn(
    "bg-purple-950 rounded-lg w-full h-fit py-4 preset-3 text-white",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
