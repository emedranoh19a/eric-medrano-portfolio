"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import Label from "./Label";

export default function Input({
  icon,
  label,
  name,
  options = { required: false },
}) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = errors[label];

  //Style:
  const inputStyles = cn(
    "pl-7 pr-3 py-2 w-full text-right rounded-md bg-[var(--grey-50)] text-[var(--green-900)]"
  );
  const spanStyles = cn(
    "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4"
  );

  return (
    <>
      {hasError && (
        <span className="text-red-500">{errors[label]?.message}</span>
      )}
      <Label text={label} htmlFor={name} />

      <div className="relative w-full">
        <span className={spanStyles} aria-hidden="true">
          <Image src={icon} className="object-contain" fill alt="" />
        </span>

        <input
          {...register(name, options)}
          type="number"
          // id={label}
          // name={label}

          className={inputStyles}
          // inputmode="decimal"
          // aria-label="Bill amount"
          // aria-describedby="bill-help"
        />
      </div>
    </>
  );
}
