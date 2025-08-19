"use client";
import { FormProvider, useForm } from "react-hook-form";

export default function ContactFormProvider({ className }) {
  //All the logic should be handled here. Inputs must be contained in the children.
  const methods = useForm();
  function onSubmit() {
    console.log("submitting");
  }
  return (
    <FormProvider {...methods}>
      <form handleSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
