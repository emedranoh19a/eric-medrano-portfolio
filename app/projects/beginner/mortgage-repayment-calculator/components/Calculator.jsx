import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import Link from "./Link";
import NumberField from "./NumberField";
import RadioOption from "./RadioOption";
import Text from "./Text";

export default function Calculator() {
  const containerClasses = clsx(
    "px-6 py-8 sm:p-10",
    "flex flex-col gap-6 sm:gap-10"
  );
  return (
    <div className={containerClasses}>
      <CalculatorHeader />
      <CalculatorBody />
      <Button text="Calculate Repayments" />
    </div>
  );
}
function CalculatorHeader() {
  const { reset, setResults, setIsSubmitted } = useFormContext();
  const handleReset = () => {
    reset();
    setResults({ monthly: 0, total: 0 });
    setIsSubmitted(false);
  };
  return (
    <div className="w-full flex flex-col gap-2 sm:flex-row sm:justify-between">
      <Text as="h1" preset={2} className="text-slate-900 inline-block">
        Mortgage Calculator
      </Text>
      <Link text="Clear all" onClick={handleReset} />
    </div>
  );
}

function CalculatorBody() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
      <NumberField
        units="€"
        unitsToLeft
        name="amount"
        label="Mortgage Amount"
        className="sm:col-span-2"
      />
      <NumberField
        units="years"
        name="term"
        label="Mortgage Term"
        className=""
      />
      <NumberField units="%" name="rate" label="Interest Rate" className="" />
      <RadioOptions />
    </div>
  );
}

function RadioOptions() {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <fieldset className="sm:col-span-2 flex flex-col w-full gap-3">
      <Label label="Mortgage Type" />
      <RadioOption label="Repayment" fieldName="type" value={1} />
      <RadioOption label="Interest Only" fieldName="type" value={2} />
      {errors["type"] && <ErrorMessage message={errors.type.message} />}
    </fieldset>
  );
}
