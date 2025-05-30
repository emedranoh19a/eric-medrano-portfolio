import Label from "./Label";
import TipButton from "./TipButton";

const values = [5, 10, 15, 25, 50];
export default function RadioGroup() {
  return (
    <fieldset>
      <Label />
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
        {values.map((val, i) => (
          <TipButton key={i} value={val} />
        ))}
      </div>
      {/* TODO: Here, we map to extract all the tip buttons. */}
    </fieldset>
  );
}
