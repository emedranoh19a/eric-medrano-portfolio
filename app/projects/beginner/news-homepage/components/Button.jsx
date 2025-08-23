import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Button({ text = "Read more", className }) {
  const buttonStyles = cn(
    "py-2 px-8 uppercase bg-[var(--navy-950)] text-white transition-colors hover:bg-[var(--red-500)] hover:text-[var(--navy-950)]",
    className
  );
  return (
    <Text as="button" preset={7} className={buttonStyles}>
      {text}
    </Text>
  );
}
