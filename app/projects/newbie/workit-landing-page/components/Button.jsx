import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Button({ className = "", variant = "primary", text }) {
  //Style:
  const buttonStyles = cn(
    " w-fit hover:text-[var(--green)] transition-colors inline-block",
    variant === "primary" &&
      "py-3 px-8 bg-[var(--green)] border-4 border-solid border-[var(--green)] hover:bg-transparent text-[var(--purple-900)] inline-block",
    variant === "secondary" &&
      " text-[var(--white)] border-b-4 border-[var(--green)]",
    className
  );
  /* Property 1=button-secondary-default */

  return (
    <Text preset={5} className={buttonStyles} as="button">
      {text}
    </Text>
  );
}
