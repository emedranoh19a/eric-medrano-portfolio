"use client";

import clsx from "clsx";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Calculator from "./Calculator";
import Results from "./Results";

export default function Form() {
  //State:
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState({ monthly: 0, total: 0 });
  const methods = useForm({ mode: "onChange" });

  function onSubmit(data) {
    const { amount, term, rate, type } = data;

    let monthlyRepayment, totalRepayment;

    const principal = Number(amount);
    const years = Number(term);
    const annualRate = Number(rate) / 100;
    const monthlyRate = annualRate / 12;
    const months = years * 12;

    if (type === "1") {
      // **Repayment Mortgage Formula**
      monthlyRepayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1);
      totalRepayment = monthlyRepayment * months;
    } else {
      // console.log("Interest-Only Mortgage")
      // **Interest-Only Mortgage Formula**
      monthlyRepayment = principal * (annualRate / 12);
      totalRepayment = monthlyRepayment * months + principal;
    }

    setResults({
      monthly: monthlyRepayment.toFixed(2),
      total: totalRepayment.toFixed(2),
    });
    setIsSubmitted(true);
  }
  //Style:
  const containerStyles = clsx(
    "w-fit h-fit",
    "grid grid-cols-1 lg:grid-cols-2",
    "bg-white sm:rounded-[24px] overflow-hidden shadow-2xl"
  );
  return (
    <FormProvider {...{ ...methods, results, setResults, setIsSubmitted }}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={containerStyles}
      >
        <Calculator />
        <Results isSubmitted={isSubmitted} results={results} />
      </form>
    </FormProvider>
  );
}
