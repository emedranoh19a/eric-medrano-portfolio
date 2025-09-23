"use client";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";

export default function Form() {
  const methods = useForm();
  const { handleSubmit } = methods;
  function onSubmit(data) {
    alert(`Form submitted! \n${JSON.stringify(data, null, 2)}`);
  }

  const cardStyles = clsx("bg-white p-6 flex flex-col gap-4 rounded-2xl");

  return (
    <FormProvider {...methods}>
      <form className={cardStyles} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="First Name"
          name="firstName"
          validations={{ required: "First name cannot be empty" }}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          validations={{ required: "Last name cannot be empty" }}
        />
        <Input
          placeholder="Email Address"
          name="email"
          validations={{
            required: "Email Address cannot be empty",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              message: "It seems this is not an email",
            },
          }}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          validations={{
            required: "Password cannot be empty",
            minLength: {
              value: 4,
              message: "Password must have at least 4 characters",
            },
          }}
        />
        <div>
          <button
            type="submit"
            className="w-full uppercase rounded-xl mb-2 transition-colors hover:bg-[#77e2b3] bg-(--green) py-[15px] px-[45px] text-[15px] text-white tracking-[1px]"
          >
            Claim your free trial
          </button>
          <p className=" mx-auto text-center max-w-[249px] lg:max-w-none text-[11px] leading-[21px] tracking-0 text-(--grayish-blue)">
            By clicking the button, you are agreeing to our{" "}
            <span className="cursor-pointer text-(--red) font-bold">
              Terms and Services
            </span>
          </p>
        </div>
      </form>
    </FormProvider>
  );
}
