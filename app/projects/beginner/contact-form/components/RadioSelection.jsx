"use client";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function RadioSelection({ name = "", label, validations = {} }) {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <fieldset className="flex flex-col gap-4 w-full sm:col-span-2">
      <Text as="legend" htmlFor={name} variant="body-sm" className="mb-2">
        {label}{" "}
        {validations.required && (
          <span className="text-[var(--green-600)]">*</span>
        )}
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <RadioOption
          optionName="generalEnquiry"
          label="General Enquiry"
          fieldName={name}
        />
        <RadioOption
          optionName="supportRequest"
          label="Support Request"
          fieldName={name}
        />
      </div>
      {errors?.queryType && (
        <Text variant="body-sm" className="text-[var(--red)]" as="span">
          {errors.queryType.message}
        </Text>
      )}
    </fieldset>
  );
}

function RadioOption({ fieldName, optionName = "", label = "" }) {
  const { register, watch } = useFormContext();
  const watchedField = watch(fieldName);
  const buttonStyles = clsx(
    "group flex items-center gap-3",
    "py-3 px-6",
    "cursor-pointer rounded-lg bg-white transition-colors",
    "border border-[var(--grey-500)]",
    "hover:border-[var(--green-600)] hover:bg-white",
    watchedField === optionName && "bg-[var(--green-200)]"
  );
  const radioOptionStyles = clsx(" peer accent-[var(--green-600)]");
  return (
    <label htmlFor={optionName} className={buttonStyles}>
      <input
        type="radio"
        id={optionName}
        {...register(fieldName, { required: "Please select one query type:" })}
        value={optionName}
        className={radioOptionStyles}
      />
      {label}{" "}
    </label>
  );
}
