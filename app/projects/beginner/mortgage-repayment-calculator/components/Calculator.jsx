import { cn } from "@/app/utils/utils";
import { useFormContext } from "react-hook-form";
import Input from "./Input";

export default function Calculator({ isSubmitted }) {
  //State:
  const {
    formState: { errors },
    reset,
    setResults,
  } = useFormContext();
  return (
    <div className="h-2/3 md:h-full self-center w-full md:w-fit py-5 px-5 md:px-5 flex flex-col gap-1 justify-between md:min-w-80 ">
      {/* Following flex: 2 items. */}
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-slate-900 font-bold mb-1">Mortgage Calculator</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            reset();
            setResults({ monthly: 0, total: 0 });
          }}
          className="self-start cursor-pointer text-slate-500 text-sm underline decoration-slate-300 "
        >
          Clear all
        </button>
      </div>

      {/*Mortgage amount  */}

      <Input
        units="€"
        unitsToLeft
        name="amount"
        label="Mortgage Amount"
        className="mb-2"
      />

      {/* Mortage term and Interest rate */}
      <div className="mb-2 md:flex md:gap-3">
        <Input
          units="years"
          name="term"
          label="Mortgage Term"
          className="mb-2 md:mb-0"
        />
        <Input
          units="%"
          name="rate"
          label="Interest Rate"
          className="mb-2 md:mb-0"
        />
      </div>
      {/* mortgage rate */}
      <div className="mb-2">
        <label className="text-xs text-slate-500">Mortgage Type</label>
        <RadioOption label="Repayment" option="type" value={1} />
        <RadioOption label="Interest Only" option="type" value={2} />
        {errors["type"] && (
          <span className="text-[var(--red)] text-xs">
            {errors["type"].message}
          </span>
        )}
      </div>
      {/* button */}
      <button
        type="submit"
        className="bg-[var(--lime)] font-bold text-sm rounded-full md:w-fit px-5 py-1.5"
      >
        Calculate Repayments
      </button>
    </div>
  );
}

function RadioOption({ option, value, label }) {
  //State:
  const { register, watch } = useFormContext();
  const reactiveValue = watch(option);
  const isSelected = String(reactiveValue) === String(value);
  //Style:
  const boxCn = cn(
    "relative z-0 w-full border border-lg rounded-lg mb-2 px-4 py-2 bg-transparent",
    isSelected && "border-[var(--lime)] border-2"
  );
  const bgCn = cn(
    "absolute top-0 left-0 w-full h-full -z-10",
    isSelected && "bg-[var(--lime)] opacity-10  "
  );
  return (
    <label className="w-full">
      <div className={boxCn}>
        <input
          type="radio"
          value={value}
          {...register(option, { required: "This field is required" })}
          className="bg-[var(--lime)] mr-2 border-[var(--lime)] outline-2 outline-[var(--lime)] "
        />
        <span className="">{label}</span>
        <div className={bgCn} />
      </div>
    </label>
  );
}
//Note: label will allow click for the radio button. Better than a div.
