"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function TextField({
  name = "",
  label = "label",
  validations = {},
  as: Tag = "input",
  className,
  containerCn,
}) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const containerStyles = cn("flex flex-col gap-2", containerCn);
  const inputStyles = clsx(
    "px-6 py-3 min-w-[200px] rounded-lg",
    "border border-px",
    errors[name] ? "border-(--red)" : "border-(--grey-500)",
    className
  );
  return (
    <fieldset className={containerStyles}>
      <Text as="label" htmlFor={name} variant="body-sm">
        {label}{" "}
        {validations.required && (
          <span className="text-(--green-600)">*</span>
        )}
      </Text>
      <Tag {...register(name, validations)} className={inputStyles} />
      {errors[name] && <ErrorMessage message={errors[name]?.message} />}
    </fieldset>
  );
}

function ErrorMessage({ message }) {
  return (
    <Text variant="body-sm" className="text-(--red)" as="span">
      {message}
    </Text>
  );
}
