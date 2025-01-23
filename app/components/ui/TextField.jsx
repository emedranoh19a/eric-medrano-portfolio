"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
//Note: This shouldn't be modified. It works like wonder.
export default function TextField({
  fieldName, //to register with hook form
  type, // to register with hook form
  placeholder, //an example of the expected input (太郎　舞神楽)
  label, //in japanese
  validations, // To let or not to let the submission.
  className = "",
}) {
  //State:
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const reactiveField = watch(fieldName);
  //Style:
  const inputStyles = cn(
    //General definition, positioning, sizing
    "peer w-full h-10 px-3 py-2.5 transition-all",
    //Any color
    "bg-transparent disabled:bg-blue-gray-50",
    //Typography
    "font-normal text-sm text-blue-gray-700",
    "border rounded-lg  focus:border-2 border-gray-200 focus:border-gray-900", //borders
    //outlines
    "outline outline-0 focus:outline-0",
    //transitions
    "",
    "placeholder-shown:border placeholder:text-transparent placeholder:focus:text-gray-400",
    "focus:border-t-transparent",
    //This works well when there are no errors.
    reactiveField && "border-t-transparent",
    errors[fieldName] && "border-red-600",
    errors[fieldName] && reactiveField && "border-t-transparent"
  );

  //Note:
  //Placeholder unshown-> border top transparent
  //For some reason, it doesn't work with the tailwind merge
  const labelStyles = clsx(
    "absolute left-0 -top-1.5 flex w-full h-full select-none pointer-events-none",
    //colors
    "text-gray-500",
    // errors[fieldName] && "text-red-600",
    "font-normal truncate leading-tight text-[11px]",
    "transition-all !overflow-visible",

    //BEFORE: display and functionality, sizing and spacing, colors, borders, other
    "before:pointer-events-none before:block before:content[' '] before:box-border",
    "before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1",

    // "before:border-orange-500",
    // errors[fieldName] && "before:border-red-600",
    "before:rounded-tl-lg before:border-t before:border-l",
    "before:transition-all",
    //After: display and functionality, sizing and spacing, colors, borders, other
    "after:box-border after:pointer-events-none after:block after:content[' ']",
    "after:flex-grow after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1",
    // this is the right part of the border-top
    "after:border-blue-gray-200",
    // errors[fieldName] && "after:border-red-600",
    "after:border-r after:border-t after:rounded-tr-lg",
    "after:transition-all",

    //peer styles: focus, disabled and placeholder shown states
    "peer-focus:leading-tight peer-focus:text-[11px] peer-focus:text-gray-900",
    "peer-disabled:text-transparent",
    "peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
    //Combination of pseudoclasses
    "peer-disabled:peer-placeholder-shown:text-blue-gray-500",
    //before styles on peer
    "peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900",
    "peer-placeholder-shown:before:border-transparent",
    "peer-disabled:before:border-transparent",
    //after on peer
    //Set. Add the right part of the top border on peer,
    "peer-focus:after:border-t-2 peer-focus:after:!border-gray-900",
    //Another set for the left part of the top border.
    "peer-placeholder-shown:after:border-transparent",
    "peer-disabled:after:border-transparent",
    errors[fieldName] &&
      "text-red-600 before:border-red-600 after:border-red-600"
  );
  const errorStyles = clsx("text-xs text-red-600 leading-3 ml-2 -mt-10 py-0");

  //Handlers:
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  return (
    <div className={cn("relative w-full h-14 min-w-15", className)}>
      <input
        id={fieldName}
        type={type}
        className={inputStyles}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        {...register(fieldName, validations)}
      />
      <label htmlFor={fieldName} className={labelStyles}>
        {label}
      </label>
      <span className={errorStyles}>{errors[fieldName]?.message}</span>
    </div>
  );
}
