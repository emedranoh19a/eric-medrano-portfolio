"use client";

import clsx from "clsx";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InformationBar from "./InformationBar";
import Input from "./Input";
import SelectionButton from "./SelectionButton";
import Text from "./Text";

export default function Card() {
  //State: Control Imperial or Metric Form
  const [bmi, setBmi] = useState(0);
  const methods = useForm({ defaultValues: { mode: "metric" } });
  const { watch } = methods;
  const mode = watch("mode");
  const cardStyles = clsx(
    "@container p-6 gap-6 @md:gap-8 grid grid-cols-[auto_auto] items-end bg-white rounded-xl shadow-2xl shadow-neutral-300/50"
  );

  function onSubmit(values) {
    const { mode } = values;

    if (mode === "metric") {
      const { weight, height } = values; // kg, cm
      const bmi = weight / (height / 100) ** 2;
      const bmiFormatted = bmi.toFixed(2);
      // alert(`BMI (Metric): ${bmiFormatted}`);
      setBmi(bmiFormatted);
    }

    if (mode === "imperial") {
      const { heightA: ft, heightB: inches, weightA: st, weightB: lb } = values;
      const totalInches = ft * 12 + inches;
      const totalLbs = st * 14 + lb;
      const bmi = (703 * totalLbs) / totalInches ** 2;
      const bmiFormatted = bmi.toFixed(2);
      // alert(`BMI (Imperial): ${bmiFormatted}`);
      setBmi(bmiFormatted);
    }
  }
  return (
    <FormProvider {...{ ...methods, bmi }}>
      <form className={cardStyles} onSubmit={methods.handleSubmit(onSubmit)}>
        <Text preset={4} className="col-span-2 text-[var(--blue-900)]">
          Enter your details below
        </Text>
        <SelectionButton label="metric" />
        <SelectionButton label="imperial" />
        {mode === "metric" ? (
          <>
            <Input fieldName="height" label="Height" units="cm" />
            <Input fieldName="weight" label="Weight" units="kg" />
          </>
        ) : (
          <>
            <Input fieldName="heightA" label="Height" units="ft" />
            <Input fieldName="heightB" label="" units="in" />
            <Input fieldName="weightA" label="Weight" units="st" />
            <Input fieldName="weightB" label="" units="lb" />
          </>
        )}
        <input type="submit" className="hidden" />
        <InformationBar />
      </form>
    </FormProvider>
  );
}
