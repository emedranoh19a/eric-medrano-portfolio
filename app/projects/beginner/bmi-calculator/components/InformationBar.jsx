"use client";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function InformationBar() {
  //TODO:
  //Question: Why are the small corners on the left not being rounded when the right margins are set like this?
  const barContainer = clsx(
    "@container  @lg:rounded-r-full ml-20",
    "@base:rounded-l-xl @base:rounded-r-xl",
    "col-span-2 w-full p-8 bg-[var(--blue-500)]",
    "text-white overflow-hidden"
  );
  return (
    <div className={barContainer}>
      <Results />
    </div>
  );
}

function Empty() {
  return (
    <div className="flex flex-col gap-4">
      <Text preset={4}>Welcome!</Text>
      <Text preset={7}>
        Enter your height and weight and you&apos;ll see your BMI result here
      </Text>
    </div>
  );
}

function Results() {
  const { watch, bmi } = useFormContext();
  const mode = watch("mode");
  return (
    <div className="flex flex-col @md:flex-row w-full gap-8 items-left">
      <div className="flex flex-col gap-2">
        <Text preset={6} className="font-semibold" as="span">
          Your BMI is...
        </Text>
        <Text preset={1} as="span">
          {bmi}
        </Text>
      </div>
      <Text preset={7}>
        Your BMI suggests you&apos;re a bit underweight. A balanced diet could
        help you reach a healthier range. Your ideal weight is between{" "}
        <span className="font-bold">63.3kgs - 85.2kgs.</span>
      </Text>
      <Text preset={7}>
        Your BMI suggests you&apos;re a healthy weight. Your ideal weight is
        between <span className="font-bold">63.3kgs - 85.2kgs.</span>
      </Text>
      <Text preset={7}>
        Your BMI suggests you&apos;re slightly above the healthy range. Small
        lifestyle changes can make a big difference! Your ideal weight is
        between <span className="font-bold">63.3kgs - 85.2kgs.</span>
      </Text>
      <Text preset={7}>
        Your BMI suggests you&apos;re above the recommended range. With steady
        steps, you can work towards a healthier balance. Your ideal weight is
        between <span className="font-bold">63.3kgs - 85.2kgs.</span>
      </Text>
    </div>
  );
}
