"use client";
import { FormProvider, useForm } from "react-hook-form";

export default function ImperialForm() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        Enter your details below Metric Imperial Height Weight Your BMI is...
        Your BMI suggests you're Your ideal weight is between
      </form>
    </FormProvider>
  );
}
