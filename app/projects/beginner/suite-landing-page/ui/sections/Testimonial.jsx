export default function Testimonial() {
  return (
    <div className="relative z-0 bg-neutral-900 text-center">
      {/* dark backgound */}
      <div className="absolute -z-10 w-full h-full bg-neutral-900" />
      <Jeremy />
      <Line />
      <TextContent />
    </div>
  );
}

function TextContent() {
  return (
    <div>
      <h1 className="preset-2 text-neutral-0 mb-8">
        It just <span className="preset-2-bold">works</span>
      </h1>
      <p className="preset-3 text-neutral-200 mb-6">
        "I really like how it is an all-in-one solution that handle many of the
        tasks that you would normally need separate tools to do the same job.
        This thing is a miracle worker.
      </p>
      {/*  */}
      <p className="">
        <span className="preset-4 block text-neutral-0">Jeremy Robinson</span>
        <span className="preset-7 block text-neutral-200">CMO, Fylo</span>
      </p>
    </div>
  );
}

function Jeremy() {
  return (
    <div className="bg-red-500 w-[252px] h-[413px] lg:w-[360px] lg:h-[590px] relative">
      <div></div>
    </div>
  );
}

function Line() {
  return <div></div>;
}
