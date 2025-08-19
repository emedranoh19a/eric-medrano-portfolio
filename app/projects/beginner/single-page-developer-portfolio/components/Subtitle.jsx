import clsx from "clsx";
import Text from "./Text";

export default function Subtitle({ text, className }) {
  const subtitleStyles = clsx(
    "font-bold text-[40px] leading-[40px] tracking-[-1.14px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2.05px] lg:font-bold lg:text-[88px] lg:leading-[88px] lg:tracking-[-2.5px]",
    className
  );
  return (
    <Text className={subtitleStyles} as="h2">
      {text}
    </Text>
  );
}
