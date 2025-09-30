import Button from "./Button";

export default function Content() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16 max-w-[470px] self-center mb-22 sm:mb-[74px]  lg:translate-y-1/3">
      <div className="">
        <ContentEyebrow />
        <h2 className="preset-1 text-blue-950 uppercase mb-4 sm:mb-8">
          Powerful insights into your team
        </h2>
        <p className="preset-5 text-blue-950/75">
          Project planning and time tracking for agile teams
        </p>
      </div>
      <div className="flex gap-4 sm:gap-6 justify-start items-center">
        <Button text="Schedule a demo" />
        <span className="inline-block preset-4 text-blue-950/50 uppercase">
          to see a preview
        </span>
      </div>
    </div>
  );
}

function ContentEyebrow() {
  return (
    <div className="flex gap-4 items-center mb-4">
      <span className="inline-block p-2 bg-blue-950 preset-4-bold text-white uppercase rounded-full">
        New
      </span>
      <span className="inline-block preset-4-regular text-blue-950/50 uppercase">
        Monograph Dashboard
      </span>
    </div>
  );
}
