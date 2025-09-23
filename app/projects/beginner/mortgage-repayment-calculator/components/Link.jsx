import Text from "./Text";

export default function Link({ text = "link", ...otherProps }) {
  return (
    <Text
      preset={4}
      className="cursor-pointer text-(--slate-700) hover:text-(--slate-900) transition-colors underline underline-offset-4 decoration-(--slate-700)"
      {...otherProps}
    >
      {text}
    </Text>
  );
}
