import { cn } from "@/app/utils/utils";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function Input({
  fieldName,
  className,
  placeholder,
  label,
  validations = {},
}) {
  //State:
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const reactiveValue = watch(fieldName);
  const hasError = errors[fieldName];
  //Style:
  const labelStyles = cn("text-[var(--purple-950)] uppercase preset-5 mb-2 ");
  const inputContainerStyles = clsx(
    "rounded-lg p-px", //Related with gradient border calculation! lg=8px (0.5rem) and padding 1px
    "bg-gradient-to-b transition-colors",
    reactiveValue
      ? "from-[var(--gradient-purple-start)] to-[var(--gradient-purple-end)]"
      : "from-[var(--gray-200)] to-[var(--gray-200)]",
    hasError && "from-[var(--red-400)] to-[var(--red-400)]"
    // "bg-gradient-to-b from-[var(--gradient-purple-start)] to-[var(--gradient-purple-end)]"
    // ""
  );
  const inputStyles = clsx(
    "peer preset-3 text-[var(--purple-950)] placeholder:opacity-[0.25] placeholder:text-[var(--purple-950)] font-inherit",
    "rounded-[calc(0.5rem-1px)] px-4 py-2 bg-white w-full",
    "appearance-none outline-none"
  );
  return (
    <fieldset className={className}>
      <label className={labelStyles}>{label}</label>
      <div className={inputContainerStyles}>
        <input
          className={inputStyles}
          placeholder={placeholder}
          id="fieldName"
          {...register(fieldName, validations)}
        />
      </div>
      {/* error messgae in here */}
      <ErrorMessage message={hasError?.message} />
    </fieldset>
  );
}

function ErrorMessage({ message }) {
  return <span className="preset-6 text-[var(--red-400)] ">{message}</span>;
}
