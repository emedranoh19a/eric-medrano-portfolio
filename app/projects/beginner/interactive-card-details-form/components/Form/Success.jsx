"use client";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { iconComplete } from "../../imageIndex";
import Button from "../Button";

export default function Success() {
  const { setIsSubmitted, reset } = useFormContext();
  return (
    <div className="max-w-[381px] w-full text-center">
      <div className="aspect-square w-20 mx-auto relative mb-8">
        <Image
          src={iconComplete}
          fill
          className="object-contain"
          alt="Icon complete"
        />
      </div>
      <h1 className="preset-1 text-[var(--purple-950)] uppercase mb-4">
        Thank You!
      </h1>
      <p className="preset-3 text-[var(--gray-400)] mb-12">
        We&apos;ve added your card details
      </p>
      <Button
        text="Continue"
        onClick={() => {
          reset();
          setIsSubmitted(false);
        }}
      />
    </div>
  );
}
