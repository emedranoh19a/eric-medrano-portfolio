import Input from "./Input";
import RadioGroup from "./RadioGroup";

export default function FormControls() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Input
        label="Bill"
        name="billAmount"
        icon="/projects/beginner/tip-calculator/icon-dollar.svg"
        options={{
          valueAsNumber: true,
          required: "Add bill",
          min: { value: 0, message: "Must be at least 0" },
        }}
      />
      <RadioGroup label="Select Tip %" name="tipPercentage" />
      <Input
        label="Number of people"
        name="people"
        icon="/projects/beginner/tip-calculator/icon-person.svg"
        options={{
          valueAsNumber: true,
          min: { value: 1, message: "Must be at least 1" },
        }}
      />
    </div>
  );
}
