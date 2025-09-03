import clsx from "clsx";
import Text, { presets } from "./Text";

export default function Input({
  fieldName,
  label,
  placeholder = "An example",
  className,
}) {
  //State:
  //Derived:
  const hasError = true;
  //TODO: Perform the actual derived state from the consumed value of react hook form.

  const inputCn = clsx(
    "py-2 px-4 aspect-none outline-none text-[var(--purple-950)] rounded",
    "placeholder:opacity-25",
    hasError && "border border-px border-[var(--red-400)]",
    presets[3]
  );
  return (
    <fieldset className="flex flex-col gap-2">
      <Text as="label" preset={5} className="uppercase">
        Label
      </Text>
      <input className={inputCn} placeholder={placeholder} />
      <Text preset={6} as="span" className="text-[var(--red-400)]" role="alert">
        Error message
      </Text>
    </fieldset>
  );
}

//TODO: Hacer la anotación. Cn, por alguna razón, mezcla border-px
