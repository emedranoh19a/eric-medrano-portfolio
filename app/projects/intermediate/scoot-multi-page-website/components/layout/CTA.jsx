import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { appStore, googlePlay, patternSemiCircles } from "../../imageIndex";

export default function CTA() {
  return (
    <section id="cta" className="h-fit relative z-0  py-22 sm:py-[62px]">
      {/* full bleed layer background */}
      <div className="-z-10 bg-dark-navy  absolute w-screen h-full top-0 left-1/2 -translate-x-[50vw]">
        <div className="relative w-full h-full overflow-hidden">
          <div className="w-[1153px] h-[347px]  absolute -bottom-28 right-1/2 translate-x-[calc(50vw+163px)]">
            <div className="w-full h-full relative z-0">
              <div className="absolute inset-0 z-10" />
              <Image
                src={patternSemiCircles}
                fill
                alt=""
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        <h2 className="preset-2 text-white max-w-[457px] lg:max-w-[415px] text-center lg:text-left">
          Sign up and Scoot off today
        </h2>
        <div className="flex gap-3 lg:gap-5 items-center">
          <AppButton apple />
          <AppButton />
        </div>
      </div>
    </section>
  );
}

function AppButton({ apple = false }) {
  const containerStyles = cn(
    "relative z-0",
    //googleContainer
    "w-[130px] h-10 w-[182px] h-14",
    //apple container
    "w-[114px] h-10 w-[159px] h-14"
  );
  return (
    <div className={containerStyles}>
      <div className="absolute inset-0 z-10" />
      <Image
        src={apple ? appStore : googlePlay}
        fill
        className="object-contain"
      />
    </div>
  );
}
