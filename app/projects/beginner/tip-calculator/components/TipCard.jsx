import clsx from "clsx";
import Text from "./Text";

export default function TipCard() {
  const containerClasses = clsx(
    "bg-[var(--green-900)]",
    "p-6 sm:px-9",
    "rounded-2xl w-full",
    "flex flex-col justify-between"
  );
  return (
    <div className={containerClasses}>
      <div>
        <TipCardDetail text="Tip Amount" />
        <TipCardDetail text="Total" />
      </div>
      <ResetButton />
    </div>
  );
}

function TipCardDetail({ text, value }) {
  return (
    <div className="flex justify-between mb-3">
      <div className="flex flex-col">
        <Text as="span" preset={5} className="text-white">
          {text}
        </Text>
        <Text as="span" preset={6} className="text-[var(--grey-400)]">
          /person
        </Text>
      </div>
      <Text
        as="span"
        className=" ml-14 lg:ml-0 text-[var(--green-400)] font-bold font-mono tracking-[-0.67px] text-[32px]"
      >
        $4.00
      </Text>
    </div>
  );
}

function ResetButton() {
  return (
    <button className="w-full uppercase rounded-[5px] py-2 px-4 bg-[var(--green-400)] text-[var(--green-900)] active:bg-[var(--green-200)] active:text-[var(--green-900)]">
      Reset
    </button>
  );
}
