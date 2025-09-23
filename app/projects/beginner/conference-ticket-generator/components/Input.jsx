"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function Input({
  fieldName = "input",
  label,
  placeholder = "An example",
  className,
  validations = {},
}) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //Derived:
  const hasError = errors[fieldName];
  //Style:
  const containerStyles = cn("group flex flex-col gap-3 w-full", className);
  const inputCn = clsx(
    "peer transition-all  ease-in-out preset-6 text-(--neutral-300)",
    "p-4 bg-white/10 group-hover:bg-white/20 backdrop-blur-xs",
    "border border-px aspect-none rounded-xl",
    "outline-solid outline-0 outline-offset-2 outline-(--neutral-500)",
    "focus:outline-2  focus:outline-offset-4",
    "placeholder:opacity-25 ",
    hasError
      ? "border-(--orange-500) focus:outline-(--orange-500)"
      : "border-(--neutral-400) focus:outline-(--neutral-400)"
  );
  const helperStyles = cn(
    "preset-7",
    "flex gap-2 justify-start items-center",
    hasError
      ? "text-(--orange-500) focus:outline-(--neutral-500)"
      : "text-(--neutral-300)"
  );
  return (
    <fieldset className={containerStyles}>
      <label
        className="capitalize preset-5 text-(--neutral-0)"
        htmlFor={fieldName}
      >
        {label}
      </label>
      <input
        className={inputCn}
        placeholder={placeholder}
        id={fieldName}
        {...register(fieldName, validations)}
      />
      {hasError && (
        <div className={helperStyles} role="alert">
          <span>
            <ExclamationIcon />
          </span>
          <span>{errors[fieldName]?.message}</span>
        </div>
      )}
    </fieldset>
  );
}

function ExclamationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="stroke-(--orange-500)"
      viewBox="0 0 16 16"
    >
      <path
        stroke="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
      />
      <path d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
      <path
        stroke=""
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.004 10.462V7.596M8 5.569v-.042"
      />
    </svg>
  );
}
