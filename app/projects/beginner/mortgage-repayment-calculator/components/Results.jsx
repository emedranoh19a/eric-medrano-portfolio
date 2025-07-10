import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import EmptyScreen from "./EmptyScreen";
import Text from "./Text";

export default function Results({ isSubmitted }) {
  const containerStyles = clsx(
    "bg-[var(--slate-900)] py-8 px-6 sm:p-10 lg:rounded-bl-[80px]"
  );
  return (
    <div className={containerStyles}>
      {!isSubmitted ? <EmptyScreen /> : <CompleteScreen />}
    </div>
  );
}

function CompleteScreen() {
  return (
    <div className="h-full w-full flex flex-col gap-6 sm:gap-10">
      <ResultsDescription />
      <ResultsBox />
    </div>
  );
}
function ResultsBox() {
  //State:
  const { results } = useFormContext();
  //Style:
  const containerStyles = clsx(
    "relative z-0",
    "rounded-2xl overflow-hidden",
    "py-6 sm:py-8 px-4 sm:px-8"
  );
  const layerStyles = clsx("-z-10 absolute inset-0 bg-black opacity-25");
  const accentLineStyles = clsx(
    "h-1 w-full absolute top-0 left-0 bg-[var(--lime)]"
  );
  return (
    <div className={containerStyles}>
      <div className={layerStyles} />
      <div className={accentLineStyles} />
      <Text as="h3" preset={4} className="text-[var(--slate-300)] mb-2">
        Your monthly repayments
      </Text>
      <Text as="span" preset={1} className="text-[var(--lime)]">
        € {results.monthly}
      </Text>
      <hr className="my-4 sm:my-8" />
      <Text preset={4} className="text-[var(--slate-300)] mb-2">
        Total you&apos;ll repay over the term
      </Text>
      <Text preset={2} className="text-white">
        €{results.total}
      </Text>
    </div>
  );
}
function ResultsDescription() {
  return (
    <div>
      <Text as="h2" preset={2} className="text-white mb-4">
        Your results
      </Text>
      <Text preset={4} className="text-[var(--slate-300)]">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &ldquo;calculate
        repayments&rdquo; again
      </Text>
    </div>
  );
}
