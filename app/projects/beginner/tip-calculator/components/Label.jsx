import { cn } from "@/app/utils/utils";

export default function Label({ text = "bill" }) {
  //Style:
  const labelStyles = cn(
    "block text-sm font-bold mb-2 text-[var(--grey-500)] capitalize"
  );

  return (
    <label htmlFor={text} className={labelStyles}>
      {text}
    </label>
  );
}
