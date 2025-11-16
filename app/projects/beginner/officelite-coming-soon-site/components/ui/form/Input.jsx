"use client";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function Input({ fieldName, placeholder, validations = {} }) {
  const { register } = useFormContext();
  const labelStyles = clsx(
    "group cursor-pointer px-4 pb-4",
    "border-b-1 border-neutral-500/50 hover:border-blue-500 transition outline-0 outline-offset-2 focus-within:outline-2 outline-blue-500 transition-colors"
  );
  const inputStyles = clsx("outline-0 cursor-pointer");
  return (
    <label className={labelStyles} htmlFor={fieldName}>
      <input
        placeholder={placeholder}
        id={fieldName}
        className={inputStyles}
        {...register(fieldName, validations)}
      />
    </label>
  );
}
