import { cn } from "@/app/utils/utils";
import Text from "./Text";

export default function Button() {
  const buttonStyles = cn(
    "group font-bold capitalize text-white",
    "relative z-0 py-4 px-10",
    "rounded-lg overflow-hidden",
    "bg-[var(--green-600)]"
  );

  return (
    <Text as="button" variant="body-md" className={buttonStyles} type="submit">
      <div className="-z-10 absolute h-full w-full left-0 top-0 bg-black opacity-0 group-hover:opacity-50 transition-all"></div>
      Submit
    </Text>
  );
}
