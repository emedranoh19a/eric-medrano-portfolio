import Button from "../components/Button";

export default function Hero() {
  return (
    <div>
      <h1 className="preset-1 text-neutral-900">
        A <span className="preset-1-bold">super solution</span> for your
        <span className="preset-1-bold">business.</span>
      </h1>
      <p className="preset-5 text-neutral-900">
        Our marketing and sales automations help you scale your outreach to get
        more leads for your company.
      </p>
      <Button variant="filled" />
      <Stats />
    </div>
  );
}

function Stats() {
  return (
    <div className=" text-center lg:text-left flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-10 sm:gap-16">
      <Stat value="2K+" unit="Companies" />
      <Stat value="8" unit="Languages" />
      <Stat value="1.2M" unit="Leads" />
    </div>
  );
}

function Stat({ value, unit }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="preset-2-bold text-neutral-900">{value}</span>
      <span className="preset-7 text-neutral-500 uppercase">{unit}</span>
    </div>
  );
}
