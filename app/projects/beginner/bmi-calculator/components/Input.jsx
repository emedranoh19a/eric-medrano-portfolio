"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function Input({
  fieldName,
  units,
  label,
  // validations = { isRequired: true },
  className = "",
}) {
  const { register } = useFormContext();
  const fieldsetCn = cn(
    "flex flex-col gap-2 w-full min-w-0 col-span-2 @sm:col-span-1",
    className
  );
  const inputContainerCn = clsx(
    "py-4 px-6 gap-auto cursor-pointer w-full flex flex-row",
    "border border-px border-(--grey-500) rounded-xl",
    "focus-within:border-(--blue-500) transition-colors"
  );
  const inputCn = clsx(
    "appearance-none hover:cursor-pointer focus:appearance-none flex-1 min-w-0 outline-hidden",
    "text-2xl font-bold leading-[120%] tracking-[-5%]",
    //Color changes when there is a value inserted
    "focus:text-(--blue-900)",
    "appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
  );
  return (
    <fieldset className={fieldsetCn} htmlFor={fieldName}>
      <Text
        as="label"
        className="text-(--grey-500)"
        htmlFor={fieldName}
        preset={7}
      >
        {label}
      </Text>
      <label className={inputContainerCn}>
        <input
          className={inputCn}
          id="anotherField"
          {...register(fieldName, { valueAsNumber: true, required: true })}
          type="number"
        />
        <Text preset={4} as="span" className="text-(--blue-500)">
          {units}
        </Text>
      </label>
    </fieldset>
  );
}
