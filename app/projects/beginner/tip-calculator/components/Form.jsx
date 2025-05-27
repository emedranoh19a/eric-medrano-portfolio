import clsx from "clsx";
import FormControls from "./FormControls";
import TipCard from "./TipCard";

export default function Form() {
  //This is the form
  const cardStyles = clsx(
    "w-full flex-grow ",
    "rounded-t-[25px] sm:rounded-b-[25px]",
    "py-8 px-6 sm:py-12 sm:px-20 lg:p-8",
    "flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12",
    "bg-white"
  );
  return (
    <div className={cardStyles}>
      <FormControls />
      <TipCard />
    </div>
  );
}
