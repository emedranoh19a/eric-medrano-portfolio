import clsx from "clsx";

//Challenge: Use the Mobile First approach this time.
function Stat({ category, value }) {
  const containerStyles = clsx(
    "flex justify-between w-full h-full p-4 rounded-xl",
    category === "Reaction" && "bg-rose-50",
    category === "Memory" && "bg-amber-50",
    category === "Verbal" && "bg-teal-50",
    category === "Visual" && "bg-indigo-50",
    "",
    ""
  );
  const labelStyles = clsx(
    "flex gap-2",
    category === "Reaction" && "bg-rose-50 text-rose-500",
    category === "Memory" && "bg-amber-50 text-amber-500",
    category === "Verbal" && "bg-teal-50 text-teal-500",
    category === "Visual" && "bg-indigo-50 text-indigo-500"
  );
  return (
    <div className={containerStyles}>
      <div className={labelStyles}>
        {category === "Memory" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#FFB21E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
            />
            <path
              stroke="#FFB21E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
            />
            <path
              stroke="#FFB21E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
            />
          </svg>
        ) : category === "Reaction" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#F55"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
            />
          </svg>
        ) : category === "Verbal" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#00BB8F"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#1125D6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
            />
            <path
              stroke="#1125D6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
            />
          </svg>
        )}{" "}
        {category}
      </div>
      <div>
        <p>
          <strong>{value}</strong> / 100
        </p>
      </div>
    </div>
  );
}

const categories = [
  { category: "Reaction", value: 80 },
  { category: "Memory", value: 92 },
  { category: "Verbal", value: 61 },
  { category: "Visual", value: 72 },
];
export default function Page() {
  const mainContainer = clsx(
    "w-screen h-full flex flex-col justify-center items-center",
    "md:flex-row md:px-96"
  );
  const resultContainer = clsx(
    "flex flex-col justify-between py-4 px-16 h-full",
    // "basis-5/12",
    "text-white text-center",
    "bg-gradient-to-t from-indigo-500 from-40% to-indigo-400",
    "rounded-b-[50px] md:rounded-t-[50px]"
  );
  const summaryContainer = clsx("p-5 flex flex-col gap-4 min-w-80 basis-7/12");

  return (
    <div className={mainContainer}>
      <div className={resultContainer}>
        <h3 className="opacity-80 text-lg">Your result</h3>
        <div className="bg-indigo-500 rounded-full w-28 h-28 self-center flex flex-col gap-1 items-center justify-center">
          {/* Score container */}
          <p className="text-4xl font-bold">76</p>
          <p className="text-sm opacity-60 font-bold">of 100</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Great</h4>
          <p className="text-sm opacity-80">
            You scored higher than 65% of the people who have taken these tests.{" "}
          </p>
        </div>
      </div>
      <div className={summaryContainer}>
        <h4 className="font-bold text-lg text-slate-600">Summary</h4>
        {/* tile */}
        <ul className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <Stat {...category} key={index} />
          ))}
        </ul>
        <button className="bg-indigo-900 text-gray-50 py-4 rounded-full">
          Continue
        </button>
      </div>
    </div>
  );
}
