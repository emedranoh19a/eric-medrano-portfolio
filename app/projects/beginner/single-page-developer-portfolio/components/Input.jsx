"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function Input({
  className,
  fieldName,
  validations = {},
  as: Tag = "input",
}) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = errors[fieldName];
  //Style:
  const fieldsetStyles = cn("flex flex-col justify-end relative", className);
  const inputStyles = clsx(
    "appearance-none resize-none outline-hidden bg-transparent transition-colors",
    Tag === "textarea" && "h-40",
    "pb-4 border-b-2",
    hasError
      ? "border-b-(--error)"
      : "border-b-(--green) focus:border-b-(--green) placeholder-shown:border-b-white/50",
    "indent-6 uppercase text-white font-medium text-[16px] leading-[26px] tracking-[-0.22px]",
    "placeholder:indent-6 placeholder:text-white placeholder:uppercase placeholder:opacity-50 placeholder:text-[16px] placeholder:font-medium placeholder:leading-[26px] placeholder:[-0.22px]"
  );
  return (
    <fieldset className={fieldsetStyles}>
      <Tag
        placeholder={fieldName}
        className={inputStyles}
        {...register(fieldName, validations)}
      />
      <ErrorMessage message={errors[fieldName]?.message} />
    </fieldset>
  );
}

function ErrorMessage({ message }) {
  return (
    <span className="text-right text-(--error) absolute right-0 top-full translate-y-[5px] font-medium text-[12px] leading-[16px] tracking-[-0.17px]">
      {message}
    </span>
  );
}
