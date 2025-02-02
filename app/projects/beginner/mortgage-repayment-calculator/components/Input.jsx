"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function Input({
  label = "label",
  units = "years",
  unitsToLeft = false,
  className = "",
  name = "",
}) {
  //State:
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //   console.log(errors);
  //Style:
  const wrapperCn = cn("w-full peer transition-colors", className);
  const unitCn = cn(
    "absolute h-full min-w-4 w-fit px-2 grid place-items-center",
    "top-0 transition-colors ",
    "bg-slate-100 text-slate-500 font-bold text-xs",
    unitsToLeft ? "left-0" : "right-0",
    isFocused && "bg-[var(--lime)]",
    errors[name] && "bg-[var(--red)] text-white"
  );
  const inputCn = cn(
    "w-full bg-transparent",
    unitsToLeft ? "indent-10" : "indent-2",
    isFocused && "border-[var(--lime)] outline-2 outline-[var(--lime)]",
    errors[name] && "border-[var(--red)] outline-2 outline-[var(--red)]"
  );
  const divStyles = clsx(
    "relative w-full border border-slate-300 border-px rounded-sm overflow-hidden",
    errors[name] && "border border-[var(--red)]"
  );
  return (
    <div
      className={wrapperCn}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    >
      <label className="text-xs text-slate-500">{label}</label>
      <div className={divStyles}>
        <span className={unitCn}>{units} </span>
        <input
          type="number"
          className={inputCn}
          {...register(name, {
            valueAsNumber: true,
            required: "This is a required field",
          })}
        />
      </div>
      {errors[name] && (
        <span className="text-[var(--red)] text-xs">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
