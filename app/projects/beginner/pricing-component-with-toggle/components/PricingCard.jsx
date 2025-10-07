import { cn } from "@/app/utils/utils";

export default function PricingCard({
  side = "left",
  isPrimary = false,
  title,
  monthPrice,
  yearPrice,
  enabled,
  ...otherProps
}) {
  const containerStyles = cn(
    " w-full gap-6 flex flex-col items-center px-8 rounded-lg text-center shadow-2xl shadow-gradient-start/30",
    side === "left" ? "lg:rounded-r-[0px]" : "lg:rounded-l-[0px]",
    isPrimary
      ? "bg-linear-to-br text-white from-gradient-start to-gradient-end py-12 lg:rounded-lg"
      : "bg-white text-gray-650 py-6"
  );

  return (
    <div className={containerStyles}>
      <h1 className="preset-4">{title}</h1>
      <div
        className={`flex items-center justify-center gap-[11px] ${
          isPrimary ? "text-white" : "text-gray-700"
        } `}
      >
        <span className="preset-2">$</span>
        <span className="preset-1">{enabled ? yearPrice : monthPrice}</span>
      </div>
      <Features {...otherProps} isPrimary={isPrimary} />
      <Button className={isPrimary ? "bg-white text-blue-500" : ""} />
    </div>
  );
}

function Features({ storage, users, bandwidth, isPrimary }) {
  return (
    <>
      <hr
        className={
          !isPrimary
            ? "w-full h-px border-transparent bg-gray-650/25"
            : "w-full h-px border-transparent bg-white/25"
        }
      />
      <ul className="w-full">
        <Feature isPrimary={isPrimary} description={`${storage} Storage`} />
        <Feature isPrimary={isPrimary} description={`${users} Users Allowed`} />
        <Feature
          isPrimary={isPrimary}
          description={`Send up to ${bandwidth} GB`}
        />
      </ul>
    </>
  );
}

function Feature({ description, isPrimary }) {
  return (
    <li
      className={`first:pt-0 py-4 block border-b-1 ${
        !isPrimary ? "border-gray-650/25" : "border-white/25"
      }`}
    >
      <span>{description}</span>
    </li>
  );
}
function Button({ className }) {
  const buttonStyles = cn(
    "w-full px-16 py-4 cursor-pointer",
    "preset-5 text-white",
    "bg-linear-to-br from-gradient-start to-gradient-end rounded-md",
    className
  );
  return <button className={buttonStyles}>Learn more</button>;
}
