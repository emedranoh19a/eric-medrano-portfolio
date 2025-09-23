"use client";
import { cn } from "@/app/utils/utils";
import { useFormContext } from "react-hook-form";

export default function TextField({
  //Hook form related.
  fieldName,
  validations,
  //UI related
  placeholder,
  label,
  className = "",
  labelClassName = "",
  as: Tag = "input",
}) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //Style:
  const fieldSetStyles = cn("relative", className);
  const inputStyles = cn(
    "peer block w-full min-h-14",
    "text-xl text-gray-900", //text-sm
    "rounded-lg border border-slate-200", //border-1
    "appearance-none transition",
    "focus:outline-hidden focus:ring-0 focus:border-black",
    "px-2.5 pb-2.5 pt-4 bg-transparent",
    "focus:placeholder:opacity-100 placeholder:opacity-0"
  );
  const labelStyles = cn(
    "absolute text-lg text-slate-400 z-10",
    "transform origin-[0] scale-75 duration-300",
    "bg-white px-2",
    "peer-focus:text-slate-900",
    "peer-placeholder-shown:scale-100",
    "peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2",
    "peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2",
    "peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto start-1",
    Tag === "textarea" ? "top-4" : "top-2",
    labelClassName
  );

  {
    /* <div class=>
    <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:rtl:translate-x-1/4 peer-focus:rtl:left-auto start-1">Floating outlined</label>
</div> */
  }

  return (
    <fieldset className={fieldSetStyles}>
      <Tag
        id={fieldName}
        className={inputStyles}
        placeholder={placeholder}
        {...register(fieldName, validations)}
      />
      <label htmlFor={fieldName} className={labelStyles}>
        {label}{" "}
      </label>
    </fieldset>
  );
}
