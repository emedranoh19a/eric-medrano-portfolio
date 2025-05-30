import { cn } from "@/app/utils/utils";
import Label from "./Label";

export default function Input() {
  //Style:
  const inputStyles = cn(
    "pl-7 pr-3 py-2 w-full rounded-md bg-[var(--grey-50)] text-[var(--grey-300)]"
  );
  const spanStyles = cn(
    "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  );

  return (
    <>
      <Label />
      <div className="relative w-full ">
        <span className={spanStyles} aria-hidden="true">
          $
        </span>

        <input
          type="number"
          id="bill"
          name="bill"
          className={inputStyles}
          inputmode="decimal"
          aria-label="Bill amount"
          aria-describedby="bill-help"
        />
      </div>
    </>
  );
}
