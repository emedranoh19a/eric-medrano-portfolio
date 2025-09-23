import { cn } from "@/app/utils/utils";
import { useFormContext } from "react-hook-form";
import Text from "../Text";

export default function TextInput({
  label = "label",
  className = "",
  fieldName = "fieldName",
  validations = {},
  placeholder,
}) {
  //Width to override
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //Derived:
  const hasError = errors[fieldName];
  //Style:
  const fieldsetCn = cn("flex flex-col gap-2 w-[320px]", className);
  const inputCn = cn(
    "appearance-none outline-hidden rounded-lg py-4 px-6 border border border-(--grey)",
    "placeholder:text-(--blue-900) placeholder:opacity-50",
    "peer focus:border-(--blue-800) transition-colors",
    hasError &&
      "bg-(--red-100) border-(--red) text-(--red) placeholder-shown:text-(--blue-900)"
  );
  return (
    <fieldset className={fieldsetCn}>
      <div className="flex justify-between">
        <Text as="label" preset={3} htmlFor={fieldName}>
          {label}
        </Text>
        {hasError && (
          <Text as="span" preset={3} className="text-(--red)">
            {errors[fieldName].message}
          </Text>
        )}
      </div>
      <input
        className={inputCn}
        placeholder={placeholder}
        id={fieldName}
        {...register(fieldName, validations)}
      />
    </fieldset>
  );
}
