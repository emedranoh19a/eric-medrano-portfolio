import { cn } from "@/app/utils/utils";

export default function Button({
  text = "Get it on Chrome",
  variant = "ghost", //primary, ghost
  className,
  ...otherProps
}) {
  const buttonStyles = cn(
    "rounded-[5px] border-2 py-[10px] px-6 transition-colors ease-out cursor-pointer",
    variant === "primary" &&
      "bg-blue-600 text-white  border-blue-500 hover:text-blue-500 hover:bg-transparent",
    variant === "ghost" &&
      "bg-grey-50 text-blue-950/75 border-transparent hover:border-grey-600 hover:bg-white hover:text-grey-600/75",
    className
  );
  return (
    <button className={buttonStyles} {...otherProps}>
      {text}
    </button>
  );
}
