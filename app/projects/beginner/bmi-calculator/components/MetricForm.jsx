"use client";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";

export default function MetricForm() {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        Metric Imperial Height Weight Your BMI is... Your BMI suggests
        you&apos;re Your ideal weight is between
      </form>
    </FormProvider>
  );
}

//One per form
function MyForm() {
  //Handle only the styling here.
  const formStyles = clsx(
    "typography Tailwind",
    "spacing Tailwind",
    "layout Tailwind",
    "transitions Tailwind"
  );
  //Peer, hover, active, focus, or error states are actually inside <MyInput />
  //Integrate only the necessary layout classes of the inputs.
  const normalStyles = clsx("col-span-2");
  const buttonStyles = clsx("bg-indigo-600 w-full col-span-3");
  return (
    <MyFormProvider className={formStyles}>
      {/*      <MyInput fieldName="firstName"/> */}
      {/*      <MyInput fieldName="lastName"/> */}
      {/*      <MyInput fieldName="email"/> */}
      {/*      <MyInput /> */}
      {/*      <MyInput /> */}
      {/*      <MyInput /> */}

      {/* no need to inyect handlers. type="submit" will do. Be aware, that works weird before development hydration  */}
      <button type="submit">Submit</button>
    </MyFormProvider>
  );
}
//One per form
function MyFormProvider({ children, className }) {
  //This component will only handle the logic of one form submission.
  const methods = useForm();
  function onSubmit({ data }) {
    //This function runs ONLY when all the validations pass.
    //All the fields will be available here.
    //...
    //...
    return;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
//Shared accross all forms
function MyInput({ fieldName, label, placeholder, validations = {} }) {
  //This component will:
  // 1.Register itself (No manual state, or setState function on "onChange" prop)
  // 2.Validate itself and show it's own error messages.
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className="flex flex-col gap-2 w-fit">
      <label htmlFor={fieldName}>{label}</label>

      <input
        id={fieldName}
        placeholder={placeholder}
        {...register(fieldName, validations)}
      />
      {/* Error message */}
      {errors[fieldName] && (
        <ErrorMessage message={errors[fieldName].message} />
      )}
    </fieldset>
  );
}
function ErrorMessage({ className = "", message }) {
  const styles = clsx("text-red-500", className);
  return (
    <span role="alert" className={styles}>
      {message}
    </span>
  );
}
//What is the advantage?:
//No prop drilling. If a state is necessary, we can inyect it in the FormProvider.
//Easy UI organization.
//Very easy state handling. But this library completely shines when it comes to form validation

//Disadvantages:
//Changing all the forms that are already in the page.
//Controlling Mantine's UI components. (Let's read the docs.)
