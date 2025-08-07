"use client";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { iconArrow } from "../imageIndex";
import Text from "./Text";

export default function ApparelForm({ className }) {
  //State:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  //Derived:
  const hasError = errors.email;

  //Handlers:
  function onSubmit(data) {
    console.log(data);
  }

  //Style:
  const formStyles = cn("w-full relative z-0", className);
  const inputStyles = cn(
    "py-4 px-8",
    "text-[16px] leading-[215%] tracking-0 font-normal w-full",
    "outline-none rounded-full",
    "border-2 border-[var(--pink-400)] transition-colors",
    "placeholder:text-[16px] placeholder:leading-[215%] placeholder:tracking-0 placeholder:font-normal placeholder:text-[var(--pink-400)] placeholder:opacity-50",
    hasError && "border-[var(--red-400)]"
  );
  const buttonStyles = clsx(
    "absolute z-10 py-4 px-10 h-full right-0 rounded-full overflow-hidden",
    "bg-gradient-to-br from-[var(--gradient-1-start)] to-[var(--gradient-1-end)]",
    "shadow-2xl shadow-[#C66E64]/50",
    //Note: Another option would be to use a conditional tailwind string. But it is better to leave everything to CSS.
    // hasError && "before:inset-0 before:bg-white/50 before:z-10 before:absolute"
    "disabled:before:inset-0 disabled:before:bg-white/50 disabled:before:z-10 disabled:before:absolute"
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyles}>
      <div className="relative">
        <input
          placeholder="Email Address"
          className={inputStyles}
          {...register("email", {
            required: "An email is required",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
              message: "It seems this is not an email",
            },
          })}
        />
        <button type="submit" className={buttonStyles} disabled={hasError}>
          <div className="relative w-full h-full grid place-items-center">
            <Image src={iconArrow} height={24} width={24} alt="Arrow icon" />
          </div>
        </button>
      </div>
      {hasError && (
        <Text as="span" preset={5} className="text-[var(--red-400)] ml-8 mt-2">
          {errors.email?.message}
        </Text>
      )}
    </form>
  );
}
