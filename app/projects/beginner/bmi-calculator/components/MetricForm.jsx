"use client";
import { FormProvider, useForm } from "react-hook-form";

export default function MetricForm() {
  const methods = useForm();
  function onSubmit() {
    return;
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        Metric Imperial Height Weight Your BMI is... Your BMI suggests you're
        Your ideal weight is between
      </form>
    </FormProvider>
  );
}
