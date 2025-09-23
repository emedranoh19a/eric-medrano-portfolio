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
  const labelStyles = cn("text-(--purple-950) uppercase preset-5 mb-2 ");
  const inputContainerStyles = clsx(
    "rounded-lg p-px", //Related with gradient border calculation! lg=8px (0.5rem) and padding 1px
    "bg-linear-to-b transition-colors",
    reactiveValue
      ? "from-(--gradient-purple-start) to-(--gradient-purple-end)"
      : "from-(--gray-200) to-(--gray-200)",
    hasError && "from-(--red-400) to-(--red-400)"
    // "bg-linear-to-b from-(--gradient-purple-start) to-(--gradient-purple-end)"
    // ""
  );
  const inputStyles = clsx(
    "peer preset-3 text-(--purple-950) placeholder:opacity-[0.25] placeholder:text-(--purple-950) font-inherit",
    "rounded-[calc(0.5rem-1px)] px-4 py-2 bg-white w-full",
    "appearance-none outline-hidden"
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
  return <span className="preset-6 text-(--red-400) ">{message}</span>;
}
