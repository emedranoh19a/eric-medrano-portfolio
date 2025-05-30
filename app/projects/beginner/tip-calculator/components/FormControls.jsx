import Input from "./Input";
import RadioGroup from "./RadioGroup";

export default function FormControls() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Input />
      <RadioGroup />
      <Input />
    </div>
  );
}
