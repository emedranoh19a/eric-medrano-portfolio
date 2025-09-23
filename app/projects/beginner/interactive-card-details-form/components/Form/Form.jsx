import { useFormContext } from "react-hook-form";
import Button from "../Button";
import DateInput from "./DateInput";
import Input from "./Input";

export default function Form() {
  const { handleSubmit, setIsSubmitted } = useFormContext();

  function onSubmit() {
    setIsSubmitted(true);
  }
  return (
    <form
      className="align-self-center grid grid-cols-2 gap-6 h-fit max-w-[383px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        fieldName="name"
        label="Cardholder name"
        placeholder="e.g. Jane Appleseed"
        className="col-span-2"
      />
      <Input
        fieldName="number"
        label="Card number"
        placeholder="e.g. 1234 9123 0000"
        className="col-span-2"
        validations={{
          required: "Please insert a card number",
          pattern: {
            value: /^\d{16}$/i,
            message: "Card number must be of 16 digits",
          },
        }}
      />
      <DateInput
        // fieldName="expirationDate"
        label="Exp. date (MM/YY)"
        // placeholder=""
      />
      <Input
        fieldName="cvc"
        label="CVC"
        placeholder="e.g. 123"
        validations={{
          required: "Please insert a card number",
          pattern: {
            value: /^\d{3}$/i,
            message: "Must be of 3 digits",
          },
        }}
      />
      <Button type="submit" text="Confirm" className="col-span-2" />
    </form>
  );
}
