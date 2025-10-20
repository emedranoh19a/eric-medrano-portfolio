import Button from "../components/Button";
import { carrersData } from "../data";

export default function CareersList() {
  return (
    <section id="carrers" className="pb-30 lg:pb-40">
      <ul className="flex flex-col gap-4 lg:gap-6">
        {carrersData.map((career, i) => (
          <Job key={i} {...career} />
        ))}
      </ul>
    </section>
  );
}

function Job({ job, location }) {
  return (
    <li className="p-8 pt-9 md:py-[34px] md:px-12 lg:px-10 bg-snow flex flex-col gap-5 md:flex-row justify-between">
      <div className="text-center md:text-left">
        <h4 className="preset-4 mb-1 md:mb-2">{job}</h4>
        <span className="preset-body">{location}</span>
      </div>
      <Button text="Apply" />
    </li>
  );
}
