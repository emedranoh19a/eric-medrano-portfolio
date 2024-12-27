import clsx from "clsx";
import Image from "next/image";

function Stat({ stat, description }) {
  return (
    <div className="flex flex-col">
      <span className="block text-white text-xl font-bold">{stat}</span>
      <span className="block text-slate-400 uppercase text-sm ">
        {description}
      </span>
    </div>
  );
}
const stats = [
  { stat: "10k+", description: "COMPANIES" },
  { stat: "314", description: "TEMPLATES" },
  { stat: "12M+", description: "QUERIES" },
];
function Page() {
  const cardContainerStyles = clsx(
    "absolute bg-purple-200/10  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-between",
    "max-w-80 h-fit w-9/12",

    "lg:max-w-[1000px] lg:max-h-96 lg:flex-row-reverse",
    "rounded-xl overflow-hidden"
  );
  return (
    <div className="relative bg-slate-900 h-screen w-screen">
      <div className={cardContainerStyles}>
        <div className="h-40 lg:h-80 lg:basis-1/2 relative bg-gradient-to-tr from-purple-300 to-purple-400">
          <Image
            src="/stats-preview-card/images/image-header-desktop.jpg"
            fill
            objectFit="cover"
            className="mix-blend-multiply opacity-80"
          />
        </div>
        <div className="text-center pb-3 lg:p-4 lg:basis-1/2 flex flex-col justify-between h-3/5">
          <h1 className=" text-xl lg:text-4xl text-white font-bold tracking-wider">
            Get <span className="text-purple-400/70">insights </span>
            that help your business grow.
          </h1>
          <p className="text-slate-400 text-xs mt-2">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul className="flex flex-col lg:flex-row justify-between mt-2">
            {stats.map((item, index) => (
              <Stat key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
