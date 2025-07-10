import Text from "./Text";

export default function Link({ text = "link", ...otherProps }) {
  return (
    <Text
      preset={4}
      className="cursor-pointer text-[var(--slate-700)] hover:text-[var(--slate-900)] transition-colors underline underline-offset-4 decoration-[var(--slate-700)]"
      {...otherProps}
    >
      {text}
    </Text>
  );
}
