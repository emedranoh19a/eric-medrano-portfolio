"use client";
import { useFormContext } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import UploadArea from "./UploadArea";

export default function TicketForm() {
  const { handleSubmit, setIsTicketGenerated, setTicketData } =
    useFormContext();

  function onSubmit(data) {
    alert("Thank you!");
    setTicketData(data);
    setIsTicketGenerated(true);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[345px] sm:max-w-[522px] sm:max-w-[550px] w-full mx-auto flex flex-col gap-6"
    >
      <UploadArea />
      <Input
        fieldName="name"
        label="Full Name"
        placeholder="Eric Medrano"
        validations={{ required: "Please insert your name." }}
      />
      <Input
        fieldName="email"
        label="Email Address"
        placeholder="example@email.com"
        validations={{
          required: "Please insert your email.",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: "Please add a valid email.",
          },
        }}
      />
      <Input
        fieldName="githubUser"
        label="GitHub Username"
        placeholder="@yourusername"
        validations={{
          required: "Please insert your GitHub username.",
          pattern: {
            value: /^@[A-Za-z0-9_-]+$/i,
            message: "Please add a valid GitHub username.",
          },
        }}
      />
      <Button text="Generate My Ticket" className="w-full" type="submit" />
    </form>
  );
}
