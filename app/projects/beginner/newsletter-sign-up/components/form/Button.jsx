import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Text from "../Text";

export default function Button({ text, className, disabled, ...otherProps }) {
  const buttonStyles = cn(
    "group cursor-pointer py-4 text-center bg-(--blue-800) text-white rounded-lg font-bold transition-colors relative z-0 overflow-hidden transition hover:shadow-xl ",
    disabled
      ? "opacity-50 cursor-not-allowed bg-(--blue-800)"
      : "hover:shadow-[0px_16px_32px_rgba(255,97,85,0.5)]",
    className
  );

  /* colors/gradient/4 */
  // background: linear-gradient(90deg, #FF6A3A 0%, #FF527B 100%);
  // box-shadow: 0px 16px 32px rgba(255, 97, 85, 0.5);

  const layerClasses = clsx(
    "absolute -z-10 inset-0",
    "bg-linear-to-r from-(--gradient-start) to-(--gradient-end)",

    "opacity-0 group-hover:opacity-100 transition"
  );
  return (
    <Text
      as="button"
      className={buttonStyles}
      preset={2}
      disabled={disabled}
      {...otherProps}
    >
      {!disabled && <div className={layerClasses} />}
      {text}
    </Text>
  );
}
