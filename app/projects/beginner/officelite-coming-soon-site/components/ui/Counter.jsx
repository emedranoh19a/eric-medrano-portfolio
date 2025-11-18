"use client";
import clsx from "clsx";
import { useCountdown } from "../../hooks/usecountdown";

export default function Counter({ formStyles, className = "" }) {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  const { days, hours, minutes, seconds } = useCountdown(30);
  //Style:
  const containerStyles = clsx("w-full", className);
  const paragraphStyles = clsx(
    "preset-6 mb-5 lg:mb-3 text-center lg:text-left",
    formStyles ? "text-neutral-800" : "text-neutral-0"
  );
  return (
    <div className={containerStyles}>
      <p className={paragraphStyles}>
        Coming <span className="text-blue-500">4 Nov 2020</span>
      </p>
      {/*  */}
      {/* <!-- If you're choosing to make this timer dynamic, have it countdown from the date you set above --> */}
      <div className="flex flex-row justify-between sm:justify-center gap-4">
        <CounterCard unit="Days" formStyles={formStyles} value={days} />
        <CounterCard unit="Hours" formStyles={formStyles} value={hours} />
        <CounterCard unit="Min" formStyles={formStyles} value={minutes} />
        <CounterCard unit="Sec" formStyles={formStyles} value={seconds} />
      </div>
    </div>
  );
}
function CounterCard({ unit, value, formStyles }) {
  const containerStyles = clsx(
    "flex flex-col items-center gap-1 px-3 py-4 rounded-xl w-full",
    formStyles ? "bg-blue-100" : "bg-neutral-800"
  );
  const valueStyles = clsx(
    "preset-1 ",
    formStyles ? "text-blue-500" : "text-neutral-0"
  );
  const unitStyles = clsx(
    "preset-5 ",
    formStyles ? "text-neutral-800/50" : "text-neutral-0/50"
  );
  return (
    <div className={containerStyles}>
      <span className={valueStyles}>{value}</span>
      <span className={unitStyles}>{unit}</span>
    </div>
  );
}
