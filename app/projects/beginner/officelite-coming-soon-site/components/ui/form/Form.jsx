"use client";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../Button";
import Input from "./Input";

export default function Form() {
  const methods = useForm();
  function onSubmit(values) {
    alert(`Thank you ${values.name}. We will do absolutely nothing`);
  }
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="shrink-0 max-w-[445px] w-full mx-auto py-10 px-5 sm:p-10 bg-neutral-0 rounded-xl"
      >
        <div className="flex flex-col gap-6 mb-10">
          <Input fieldName="name" placeholder="Name" validations={{}} />
          <Input
            fieldName="email"
            placeholder="Email Address"
            validations={{
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Oops! that doesn't look like an email.",
              },
            }}
          />
          {/* Plan with Select */}
          <Input
            fieldName="phone"
            placeholder="Phone Number"
            validations={{}}
          />
          <Input fieldName="company" placeholder="Company" validations={{}} />
        </div>
        <Button text="Get on the list" className="w-full" />
      </form>
    </FormProvider>
  );
}
