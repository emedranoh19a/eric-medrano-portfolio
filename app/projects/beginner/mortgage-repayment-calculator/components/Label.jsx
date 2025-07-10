import Text from "./Text";

export default function Label({ label, fieldName }) {
  return (
    <Text
      as="label"
      preset={4}
      htmlFor={fieldName}
      className="text-[var(--slate-700)]"
    >
      {label}
    </Text>
  );
}
