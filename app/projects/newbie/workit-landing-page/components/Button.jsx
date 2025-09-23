import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Button({ className = "", variant = "primary", text }) {
  //Style:
  const buttonStyles = cn(
    " w-fit hover:text-(--green) transition-colors inline-block",
    variant === "primary" &&
      "py-3 px-8 bg-(--green) border-4 border-solid border-(--green) hover:bg-transparent text-(--purple-900) inline-block",
    variant === "secondary" &&
      " text-(--white) border-b-4 border-(--green)",
    className
  );
  /* Property 1=button-secondary-default */

  return (
    <Text preset={5} className={buttonStyles} as="button">
      {text}
    </Text>
  );
}
