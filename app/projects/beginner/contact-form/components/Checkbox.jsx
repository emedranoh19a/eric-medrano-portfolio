"use client";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function Checkbox({ label, name, validations = {} }) {
  //State:
  const { register } = useFormContext();
  return (
    <label className="flex flex-row gap-4" htmlFor={name}>
      <input
        type="checkbox"
        className=""
        id={name}
        {...register(name, {
          required: "Please accept the terms and conditions.",
        })}
      />
      <Text variant="body-sm" className="text-[var(--grey-900)]" as="span">
        {label} {validations.required && " *"}
      </Text>
    </label>
  );
}
