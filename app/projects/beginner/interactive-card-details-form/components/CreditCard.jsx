"use client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";
import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { bgCardBack, bgCardFront, cardLogo } from "../imageIndex";

export default function CreditCard({ flipped = false, className = "" }) {
  const cardSrc = flipped ? bgCardBack : bgCardFront;

  const containerStyles = cn(
    "w-[285px] h-[157px] sm:w-[447px] sm:h-[245px]",
    className
  );
  return (
    <div className={containerStyles}>
      <div className="w-full h-full relative z-0 p-4 sm:py-6 sm:px-8 flex flex-col justify-between">
        <div className="w-full h-full absolute top-0 left-0 z-10"></div>
        <Image
          src={cardSrc}
          alt=""
          fill
          className="object-contain absolute inset-0 -z-10"
        />
        {!flipped && <CardLogo />}
        <CardDetails flipped={flipped} />
      </div>
    </div>
  );
}
function CardLogo() {
  return (
    <div className="w-[52px] h-[30px] sm:w-[84px] sm:h-[47px] relative">
      <Image src={cardLogo} alt="" fill className="object-contain" />
    </div>
  );
}

function CardDetails({ flipped = false }) {
  //State:
  const { watch } = useFormContext();
  const cardHolderName = watch("name");
  const reactiveNumber = watch("number") || "";
  const formattedNumber = reactiveNumber
    .padEnd(16, "0")
    .replace(/(\d{4})(?=\d)/g, "$1 ");
  const reactiveMonth = watch("expirationDate.month");
  const reactiveYear = watch("expirationDate.year");
  const reactiveCVC = watch("cvc");

  const bp = useBreakpoint();
  const numberStyles = bp === "base" || bp === "sm" ? "preset-4" : "preset-1";
  const bottomStyles = clsx(
    bp === "base" || bp === "sm" ? "preset-7" : "preset-2",
    "flex justify-between w-full uppercase"
  );
  //2-7, 1/4
  return (
    <>
      {!flipped ? (
        <div className="flex flex-col gap-4 sm:gap-6 w-full text-white">
          <div className={numberStyles}>{formattedNumber}</div>
          <div className={bottomStyles}>
            <span>{cardHolderName || "Cardholder Name"}</span>
            <span>
              {reactiveMonth || "00"}/{reactiveYear || "00"}
            </span>
          </div>
        </div>
      ) : (
        <div
          className={`${
            bp === "base" || bp === "sm" ? "preset-7" : "preset-4"
          } absolute top-[72px] right-[43px] sm:top-[112px] sm:right-[60px] text-white`}
        >
          {reactiveCVC || "000"}
        </div>
      )}
    </>
  );
}
