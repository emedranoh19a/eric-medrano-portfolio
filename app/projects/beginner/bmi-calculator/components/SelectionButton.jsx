import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function SelectionButton({ label, value }) {
  //State:
  const { register } = useFormContext();
  const inputCn = clsx(
    "relative aspect-square w-[31px] appearance-none cursor-pointer",
    "checked:bg-[var(--blue-100)] checked:before:bg-[var(--blue-500)]",
    "checked:before:inset-0 checked:before:absolute checked:before:rounded-full checked:before:scale-50",
    "border border-px border-[var(--grey-500)] checked:border-transparent rounded-full",
    "group-hover:border-[var(--blue-500)] transition-colors"
  );
  return (
    <label
      htmlFor={label}
      className="group cursor-pointer flex flex-row items-center gap-4 w-full"
    >
      <input
        type="radio"
        id={label}
        value={label}
        className={inputCn}
        {...register("mode")}
      />
      <Text as="span" preset={6} className="font-bold capitalize">
        {label}
      </Text>
    </label>
  );
}
