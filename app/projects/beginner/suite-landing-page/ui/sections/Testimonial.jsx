import Image from "next/image";
import { imageJeremy, patternBlur, patternCurvedLine2 } from "../../assetIndex";

export default function Testimonial() {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-18 sm:mb-20 lg:mb-[104px] relative z-0 px-6 sm:px-12 lg:px-[125px] pb-10 sm:pb-16 lg:pb-0 text-center">
      {/* dark backgound */}
      <div className="absolute -z-10 sm:w-full h-4/5 lg:h-8/9 bottom-0 sm:left-0 left-1/2 -translate-x-[50vw] sm:translate-x-0 w-screen bg-neutral-900 rounded-[15px]" />
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
      <p className="uppercase">
        <span className="preset-4 block text-neutral-0">Jeremy Robinson</span>
        <span className="preset-7 block text-neutral-200">CMO, Fylo</span>
      </p>
    </div>
  );
}

function Jeremy() {
  return (
    <div className="mb-[41px] sm:mb-[29px] lg:mb-0 relative shrink-0 -z-10 w-[252px] h-[413px] lg:w-[360px] lg:h-[590px] ">
      <Oval />
      <Image
        src={imageJeremy}
        alt="Jeremy Robinson"
        fill
        className="object-contain"
      />
    </div>
  );
}
function Oval() {
  return (
    <div className="absolute -bottom-10 sm:bottom-0 lg:bottom-[30px]  left-1/2 -translate-x-1/2 scale-200 rounded-full size-[246px] lg:size-[294px]">
      <Image src={patternBlur} alt="" className="object-contain" fill />
    </div>
  );
}
function Line() {
  return (
    <div className="relative w-[64px] h-[52px] shrink-0 mb-[42px] sm:mb-[29px] lg:mb-0">
      <Image src={patternCurvedLine2} alt="" className="object-contain" fill />
    </div>
  );
}
