import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Button({ text = "Read more", className }) {
  const buttonStyles = cn(
    "py-2 px-8 uppercase hover:bg-[var(--navy-950)] hover:text-white transition-colors bg-[var(--red-500)] text-[var(--navy-950)]",
    className
  );
  return (
    <Text as="button" preset={7} className={buttonStyles}>
      {text}
    </Text>
  );
}
