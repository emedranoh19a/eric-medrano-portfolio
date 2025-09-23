"use client";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";
import Checkbox from "./Checkbox";
import RadioSelection from "./RadioSelection";
import Text from "./Text";
import TextField from "./TextField";
import Toast from "./Toast";

export default function Form() {
  const methods = useForm();
  function onSubmit(data) {
    toast.custom(<Toast />);
  }
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="p-6 bg-white rounded-3xl flex flex-col gap-10"
      >
        <Fields />
        <TermConditions />
        <Button />
        <Toaster />
      </form>
    </FormProvider>
  );
}

function Fields() {
  return (
    <div>
      <Text variant="heading" className="mb-8">
        Contact us
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
        <TextField
          name="firstName"
          label="First Name"
          validations={{ required: "Your first name is required." }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          validations={{ required: "Your last name is required." }}
        />
        <TextField
          label="Email Address"
          name="email"
          validations={{
            required: "An email address must be added.",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Please add a valid email.",
            },
          }}
          containerCn="sm:col-span-2"
        />
        <RadioSelection name="queryType" label="Query Type" />
        <TextField
          name="message"
          label="Message"
          validations={{ required: "Please insert a message." }}
          containerCn="sm:col-span-2"
          className="resize-none min-h-40"
          as="textarea"
        />
      </div>
    </div>
  );
}

function TermConditions() {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Checkbox
        name="acceptedTerms"
        label="I consent to being contacted by the team"
      />
      {errors?.acceptedTerms && (
        <Text variant="body-sm" className="text-(--red)" as="span">
          {errors.acceptedTerms.message}
        </Text>
      )}
    </div>
  );
}
