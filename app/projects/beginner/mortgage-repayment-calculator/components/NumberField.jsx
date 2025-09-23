"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import Text from "./Text";

export default function NumberField({
  label = "label",
  units = "years",
  unitsToLeft = false,
  className = "",
  name = "",
}) {
  //State:
  const {
    formState: { errors },
  } = useFormContext();
  //Style:
  const fielsetStyles = cn(
    "w-full h-fit flex flex-col gap-3 transition-colors",
    className
  );
  return (
    <fieldset className={fielsetStyles}>
      <Label label={label} fieldName={name} />
      <InputGroup fieldName={name} units={units} reverse={unitsToLeft} />
      {errors[name] && <ErrorMessage message={errors[name].message} />}
    </fieldset>
  );
}

function InputGroup({ fieldName, units = "€", reverse = false }) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //Style:
  const containerStyles = cn(
    "group h-full w-full flex gap-0 transition-colors cursor-pointer",
    reverse && "flex-row-reverse",
    "rounded-sm overflow-hidden border border-(--slate-500)",
    "focus-within:border-(--lime) focus-within:hover:border-(--lime)",
    "hover:border-(--slate-900)",
    errors[fieldName] && "border-(--red)"
  );
  const inputStyles = clsx(
    "peer inline-block h-fit w-full px-4 py-[12.5px] focus:outline-hidden",
    reverse ? "text-left" : "text-right"
  );
  const tagStyles = cn(
    "transition-colors inline-block text-(--slate-700)",
    "py-3 px-4 bg-(--slate-100)",
    "peer-focus:bg-(--lime)",
    errors[fieldName] &&
      "bg-(--red) text-white peer-focus:text-(--slate-700)"
  );
  return (
    <label className={containerStyles}>
      <Text
        as="input"
        type="number"
        id={fieldName}
        preset={3}
        className={inputStyles}
        // className={inputCn}
        {...register(fieldName, {
          valueAsNumber: true,
          required: "This is a required field",
        })}
      />
      <Text as="span" preset={3} className={tagStyles} htmlFor={fieldName}>
        {units}
      </Text>
    </label>
  );
}
