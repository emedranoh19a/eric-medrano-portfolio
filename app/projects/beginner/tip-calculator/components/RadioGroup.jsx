"use client";
import { useFormContext } from "react-hook-form";
import Label from "./Label";
import TipButton from "./TipButton";

const values = [5, 10, 15, 25, 50];
export default function RadioGroup({ label, name }) {
  //State:
  const { setValue, watch } = useFormContext();
  const selected = watch(name);
  //Handlers:
  const handleClick = (val) => {
    setValue(name, val);
    // console.log(val);
  };
  console.log(selected);
  return (
    <fieldset>
      <Label text={label} htmlFor={name} />
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
        {values.map((val, i) => (
          <TipButton
            key={i}
            value={val}
            variant={selected === val ? "selected" : "normal"}
            onClick={() => handleClick(val)}
          />
        ))}
      </div>
    </fieldset>
  );
}
