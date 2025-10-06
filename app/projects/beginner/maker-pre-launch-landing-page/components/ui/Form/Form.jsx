"use client";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../Button";
import Input from "./Input";

export default function Form() {
  const methods = useForm();
  function onSubmit(data) {
    alert("handling function...");
  }
  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col justify-center sm:flex-row gap-5 sm:max-w-[477px] mx-auto"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Input
          fieldName="email"
          validations={{
            required: "Oops! Please add your email",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Oops! That doesn't look like an email address",
            },
          }}
          className="flex-1"
          placeholder="Email address"
        />
        <Button text="Get notified" type="submit" />
      </form>
    </FormProvider>
  );
}
