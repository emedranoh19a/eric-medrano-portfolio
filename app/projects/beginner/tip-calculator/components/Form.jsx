"use client";
import clsx from "clsx";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormControls from "./FormControls";
import TipCard from "./TipCard";

export default function Form() {
  //State:
  const methods = useForm();
  const [results, setResults] = useState({ tipAmount: 0, total: 0 });
  const { handleSubmit } = methods;
  function onSubmit(data) {
    const { billAmount, people, tipPercentage } = data;

    const tip = (billAmount * tipPercentage) / 100;
    const tipAmount = tip / people; //Per person

    const total = billAmount + tip; //
    const totalByPerson = total / people;

    setResults({ tipAmount, total: totalByPerson });
  }

  //This is the form
  const cardStyles = clsx(
    "w-full grow ",
    "rounded-t-[25px] sm:rounded-b-[25px]",
    "py-8 px-6 sm:py-12 sm:px-20 lg:p-8",
    "flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12",
    "bg-white"
  );
  return (
    <FormProvider {...{ ...methods, results, setResults }}>
      <form className={cardStyles} onSubmit={handleSubmit(onSubmit)}>
        <FormControls />
        <TipCard />
      </form>
    </FormProvider>
  );
}
