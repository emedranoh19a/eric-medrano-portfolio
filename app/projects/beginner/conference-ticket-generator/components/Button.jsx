import { cn } from "@/app/utils/utils";

export default function Button({ text = "button", className, ...otherProps }) {
  const buttonCn = cn(
    "preset-5-strong capitalize text-center text-(--neutral-900)",
    "py-4 px-6 bg-(--orange-500) w-fit rounded-xl",
    "transition hover:bg-(--orange-700)",
    "shadow-[0px_0px_0px_#F57463] hover:shadow-[0px_4px_0px_#F57463]",
    "focus:bg-(--orange-500) focus:outline-solid focus:outline-2 focus:outline-offset-2 focus:outline-(--neutral-0)",
    "focus:shadow-[0px_0px_0px_#F57463]",
    className
  );

  return (
    <button className={buttonCn} {...otherProps}>
      {text}
    </button>
  );
}
