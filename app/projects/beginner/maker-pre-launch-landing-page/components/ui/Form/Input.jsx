"use client";

import { cn } from "@/app/utils/utils";
import { useFormContext } from "react-hook-form";

export default function Input({
  fieldName,
  className,
  validations = {},
  placeholder,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[fieldName];
  const inputStyles = cn(
    "peer bg-blue-800 px-5 py-3 rounded-full w-full",
    "preset-6 placeholder:text-blue-gray-500 text-neutral-0",
    "border-2 border-transparent focus:border-cyan-400 transition-colors appearance-none outline-none",
    "focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0",
    error && "border-red-400",
    className
  );
  return (
    <fieldset className="relative w-fit w-fit">
      <input
        className={inputStyles}
        {...register(fieldName, validations)}
        placeholder={placeholder}
      />
      {error && (
        <span className=" sm:absolute sm:top-full sm:left-0 sm:w-fit sm:h-fit whitespace-nowrap translate-y-[6px] preset-7 text-red-400">
          {error.message}
        </span>
      )}
    </fieldset>
  );
}
