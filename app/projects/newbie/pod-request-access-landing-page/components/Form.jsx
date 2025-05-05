"use client";
import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import TextField from "./TextField";

export default function Form() {
  //State:
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);
  //Handlers:
  function onSubmit(data) {
    alert("handling function");
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:max-w-sm flex flex-col gap-2"
      >
        <TextField className="w-full" />
        <Button
          text="Request access"
          className="md:hidden font-semibold w-full"
        />
        {errors && (
          <span className="text-[var(--red)]">{errors.email?.message}</span>
        )}
        {errors && (
          <span className="text-[var(--red)]">{errors.email?.required}</span>
        )}
      </form>
    </FormProvider>
  );
}
