import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Button({ variant = "cyan", text }) {
  const buttonStyles = cn(
    "group px-10 py-4 flex gap-1 w-fit rounded-full transition-colors",
    variant === "cyan" && "bg-[var(--cyan-600)] hover:bg-[#71c0d4]",
    variant === "purple" && "bg-[var(--purple-600)] hover:bg-[#b18bdd]"
  );
  const versionStyles = cn(
    "transition-colors",
    variant === "cyan" && "text-[var(--cyan-300)]",
    variant === "purple" && "text-[var(--purple-300)]"
  );
  return (
    <button className={buttonStyles}>
      {text ? (
        <Text as="span" preset={5} className="text-[var(--white)]">
          {text}
        </Text>
      ) : (
        <>
          <Text as="span" preset={5} className="text-[var(--white)]">
            Download
          </Text>
          <Text as="span" preset={5} className={versionStyles}>
            v1.3
          </Text>
        </>
      )}
    </button>
  );
}
