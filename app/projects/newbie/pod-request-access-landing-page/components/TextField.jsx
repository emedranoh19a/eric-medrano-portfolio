import { cn } from "@/app/utils/utils";
import { useFormContext } from "react-hook-form";
import Button from "./Button";

export default function TextField({ className }) {
  //State:
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //Style:
  const inputStyles = cn(
    "px-7 py-2  rounded-full flex justify-between bg-[var(--blue-900)]",
    errors && " border boder-solid border-[var(--red)]",
    className
  );

  return (
    <div className={inputStyles}>
      <input
        className="text-white font-semibold bg-transparent"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid email format",
          },
        })}
      />
      <Button
        text="Resquest Access"
        className="hidden md:inline-block text-sm"
      />
    </div>
  );
}
