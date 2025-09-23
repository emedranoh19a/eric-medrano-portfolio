"use client";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import Text from "./Text";

export default function TipCard() {
  //State:
  const { results } = useFormContext();
  //Style:
  const containerClasses = clsx(
    "bg-(--green-900)",
    "p-6 sm:px-9",
    "rounded-2xl w-full",
    "flex flex-col justify-between"
  );
  return (
    <div className={containerClasses}>
      <div>
        <TipCardDetail text="Tip Amount" value={results.tipAmount} />
        <TipCardDetail text="Total" value={results.total} />
      </div>
      <ResetButton />
    </div>
  );
}

function TipCardDetail({ text, value }) {
  return (
    <div className="flex justify-between mb-3 min-w-60">
      <div className="flex flex-col">
        <Text as="span" preset={5} className="text-white">
          {text}
        </Text>
        <Text as="span" preset={6} className="text-(--grey-400)">
          /person
        </Text>
      </div>
      <Text
        as="span"
        className=" ml-14 lg:ml-0 text-(--green-400) font-bold font-mono tracking-[-0.67px] text-[32px]"
      >
        ${parseFloat(value).toFixed(2)}
      </Text>
    </div>
  );
}

function ResetButton() {
  const { reset, setResults } = useFormContext();
  return (
    <button
      onClick={() => {
        setResults({ tipAmount: 0, total: 0 });
        reset();
      }}
      className="w-full uppercase rounded-[5px] py-2 px-4 bg-(--green-400) text-(--green-900) active:bg-(--green-200) active:text-(--green-900)"
    >
      Reset
    </button>
  );
}
