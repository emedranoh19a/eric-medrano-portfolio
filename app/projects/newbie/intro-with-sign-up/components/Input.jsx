import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { FaExclamation } from "react-icons/fa";

export default function Input({
  placeholder = "",
  name = "",
  validations = {},
  ...otherProps
}) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;
  const inputStyles = clsx(
    "w-full rounded-xl border-2 text-(--dark-blue) placeholder-(--dark-blue) placeholder:opacity-70",
    "focus:border-(--blue)",
    "py-[15px] pl-[19.41px]",
    errorMessage ? "border-(--red)" : "border-[#dedede]"
  );
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={inputStyles}
        {...register(name, validations)}
        {...otherProps}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

function ErrorMessage({ message = "" }) {
  return (
    <>
      <div className="absolute top-4 right-[27px] w-6 aspect-square bg-(--red) grid place-items-center rounded-full">
        <FaExclamation className="fill-white" />
      </div>
      <span className="mt-[6px] text-(--red) font-normal text-[11px] italic text-right w-full inline-block">
        {message}
      </span>
    </>
  );
}
