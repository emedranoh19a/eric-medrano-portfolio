"use client";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";

export default function Form() {
  const methods = useForm();
  function onSubmit(values) {
    return;
  }

  const formStyles = clsx("flex flex-col gap-8 sm:mx-[162px] lg:mx-0");
  return (
    <FormProvider {...methods}>
      <form className={formStyles} onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          fieldName="name"
          validations={{ required: "Please insert your name" }}
        />
        <Input
          fieldName="email"
          validations={{
            required: "Please insert an email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: "It seems this is not an email",
            },
          }}
        />
        <Input
          fieldName="message"
          as="textarea"
          validations={{ required: "Please write a message" }}
        />
        <Button type="submit" className="self-end" text="send message" />
      </form>
    </FormProvider>
  );
}
