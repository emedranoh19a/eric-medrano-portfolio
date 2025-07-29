"use client";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function Input({ fieldName, units, label, validations = {} }) {
  const { register } = useFormContext();
  const inputContainerCn = clsx(
    "py-4 px-6 cursor-pointer",
    "border border-px border-[var(--grey-500)] rounded-xl",
    "focus-within:border-[var(--blue-500)] transition-colors"
  );
  const inputCn = clsx(
    "appearance-none focus:appearance-none",
    "text-2xl font-bold leading-[120%] tracking-[-5%]",
    //Color changes when there is a value inserted
    "focus:text-[var(--blue-900)]"
  );
  return (
    <fieldset className="flex flex-col gap-2 w-fit" htmlFor="anotherField">
      <Text
        as="label"
        className="text-[var(--grey-500)]"
        htmlFor="anotherField"
        preset={7}
      >
        {label}
      </Text>
      <label className={inputContainerCn}>
        <input className={inputCn} id="anotherField" {...register(fieldName)} />
        <Text preset={4} as="span" className="text-[var(--blue-500)]">
          {units}
        </Text>
      </label>
    </fieldset>
  );
}
