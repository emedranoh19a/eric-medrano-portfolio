"use client";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "./TextField";

export default function Form() {
  //State:
  //Style:
  //Handlers:
  function onSubmit(data) {
    console.log("handling function");
  }
  const methods = useForm();
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField />
      </form>
    </FormProvider>
  );
}
