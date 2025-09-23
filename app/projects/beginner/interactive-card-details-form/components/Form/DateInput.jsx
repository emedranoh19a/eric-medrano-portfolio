import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function DateInput({ className, label }) {
  //State:
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const reactiveMonth = watch("expirationDate.month");
  const reactiveYear = watch("expirationDate.year");
  const hasMonthError = errors?.expirationDate?.month;
  const hasYearError = errors?.expirationDate?.year;
  //Style:
  const labelStyles = cn("text-[var(--purple-950)] uppercase preset-5 mb-2");
  const commonInputContainerStyles = clsx(
    "rounded-lg p-px", //Related with gradient border calculation! lg=8px (0.5rem) and padding 1px
    "bg-gradient-to-b transition-colors"
  );

  const monthContainerStyles = clsx(
    commonInputContainerStyles,
    reactiveMonth
      ? "from-[var(--gradient-purple-start)] to-[var(--gradient-purple-end)]"
      : "from-[var(--gray-200)] to-[var(--gray-200)]",
    hasMonthError && "from-[var(--red-400)] to-[var(--red-400)]"
  );
  const yearContainerStyles = clsx(
    commonInputContainerStyles,
    reactiveYear
      ? "from-[var(--gradient-purple-start)] to-[var(--gradient-purple-end)]"
      : "from-[var(--gray-200)] to-[var(--gray-200)]",
    hasYearError && "from-[var(--red-400)] to-[var(--red-400)]"
  );
  const inputStyles = clsx(
    "peer preset-3 text-[var(--purple-950)] placeholder:opacity-[0.25] placeholder:text-[var(--purple-950)] font-inherit",
    "rounded-[calc(0.5rem-1px)] px-4 py-2 bg-white w-full",
    "appearance-none outline-none"
  );
  return (
    <fieldset className={className}>
      <label className={labelStyles}>{label}</label>
      <div className="flex gap-2">
        <div className={monthContainerStyles}>
          <input
            className={inputStyles}
            placeholder="MM"
            id="expirationDate.month"
            type="number"
            {...register("expirationDate.month", {
              required: "Insert a month",
              minLength: { value: 2, message: "Month must be 2 digits" },
              maxLength: { value: 2, message: "Month must be 2 digits" },
              pattern: {
                value: /^(0[1-9]|1[0-2])$/,
                message: "Insert a valid month",
              },
            })}
          />
        </div>
        <div className={yearContainerStyles}>
          <input
            className={inputStyles}
            placeholder="YY"
            id="expirationDate.year"
            type="number"
            {...register("expirationDate.year", {
              required: "Insert a year",
              minLength: { value: 2, message: "Year must be 2 digits" },
              maxLength: { value: 2, message: "Year must be 2 digits" },
              pattern: {
                value: /^[0-9]{2}$/i,
                message: "Only 2 digits allowed",
              },
            })}
          />
        </div>
      </div>
      {/* error messgae in here */}
      <ErrorMessage
        message={
          errors.expirationDate?.month?.message ||
          errors.expirationDate?.year?.message
        }
      />
    </fieldset>
  );
}

function ErrorMessage({ message }) {
  return <span className="preset-6 text-[var(--red-400)] ">{message}</span>;
}
