import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function RadioOption({ fieldName, value, label }) {
  //State:
  const { register, watch } = useFormContext();
  const reactiveValue = watch(fieldName);
  const isSelected = String(reactiveValue) === String(value);

  //Style:
  const buttonStyles = clsx(
    "relative z-0 inline-block",
    "flex items-center gap-4 px-4 py-[12.5px]",
    "rounded-sm border",
    isSelected ? "border-(--lime)" : "border-(--slate-500)",
    "cursor-pointer",
    "transition-colors hover:border-(--lime)"
    // isSelected && "bg-(--lime)"
  );
  const buttonLayerStyles = clsx(
    "absolute -z-10 inset-0 bg-(--lime) opacity-0 transition",
    isSelected && "opacity-10"
  );
  const radioIndicatorStyles = clsx(
    "relative peer accent-(--lime) appearance-none",
    "w-4 aspect-square border  rounded-full",
    isSelected ? "border-(--lime)" : "border-(--slate-500)",
    isSelected &&
      " before:w-2 before:absolute before:aspect-square before:bg-(--lime) before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"
  );

  return (
    <label htmlFor={value} className={buttonStyles}>
      <input
        id={value}
        type="radio"
        value={value}
        className={radioIndicatorStyles}
        {...register(fieldName, { required: "This field is required" })}
      />
      <div className={buttonLayerStyles} />
      <Text as="span" preset={3} className="text-(--slate-900)">
        {label}
      </Text>
    </label>
  );
}
