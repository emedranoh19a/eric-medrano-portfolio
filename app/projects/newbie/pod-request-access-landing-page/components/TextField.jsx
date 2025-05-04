import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export default function TextField() {
  //State:
  const { register } = useFormContext();
  //Style:
  const inputStyles = clsx(
    "px-7 py-2 text-white font-semibold bg-[var(--blue-900)] rounded-full"
  );
  //TODO:apply the corresponding validations
  //TODO:deactivate the enter (?)
  //TODO: detect error messaages for styling
  return (
    <input
      className={inputStyles}
      {...register("email", { pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$" })}
    ></input>
  );
}
