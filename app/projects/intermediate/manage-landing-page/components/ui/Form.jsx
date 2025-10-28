"use client";
import { cn } from "@/app/utils/utils";
import { useForm } from "react-hook-form";
import Button from "./Button";

export default function Form() {
  //State:
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const inputStyles = cn(
    "bg-white rounded-full w-full flex-1 px-4 py-2",
    "preset-5-regular placeholder:text-gray-400 text-blue-950"
  );
  //Handlers:
  function onSubmit(data) {
    alert(`Doing absolutely nothing to ${data.email}`);
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-2">
        <input
          className={inputStyles}
          placeholder="Updates in your inbox..."
          {...register("email", {
            required: "Please insert an email.",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Please insert a valid email.",
            },
          })}
        />
        <Button label="Go!" type="submit" />
      </div>
      <ErrorMessage message={errors?.email?.message || ""} />
    </form>
  );
}

function ErrorMessage({ message }) {
  return (
    <span role="alert" className="preset-6 text-red-500">
      {message}
    </span>
  );
}
