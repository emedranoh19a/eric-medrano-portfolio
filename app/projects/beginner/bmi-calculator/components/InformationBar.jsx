import Text from "./Text";

export default function InformationBar() {
  //TODO:
  //Question: Why are the small corners on the left not being rounded when the right margins are set like this?
  return (
    <div className="rounded-tl-xl rounded-r-full rounded-l-2xl p-8 bg-[var(--blue-500)] text-white w-full max-w-[500px]">
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
  return (
    <div className="flex flex-row w-full gap-8 items-center">
      <div className="flex flex-col gap-2">
        <Text preset={6} className="font-semibold" as="span">
          Your BMI is...
        </Text>
        <Text preset={1} as="span">
          23.4
        </Text>
      </div>
      <Text preset={7}>
        Your BMI suggests you're a healthy weight. Your ideal weight is between{" "}
        <span className="font-bold">63.3kgs - 85.2kgs.</span>
      </Text>
    </div>
  );
}
