"use client";

import { useFormContext } from "react-hook-form";

export default function FieldGroup({
  fieldName,
  label,
  type,
  validations = {},
}) {
  //State
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={fieldName} className="block text-slate-500 text-xs">
        {label}
      </label>
      <input
        {...register(fieldName, validations)} //This tegister: onChange, onClur, name, ref
        type="text"
        id={fieldName}
        className="border border-slate-300 rounded-lg"
      />
    </div>
  );
}
