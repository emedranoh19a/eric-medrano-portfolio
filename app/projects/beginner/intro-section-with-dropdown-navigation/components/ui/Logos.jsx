import Image from "next/image";
import {
  clientAudiophile,
  clientDatabiz,
  clientMaker,
  clientMeet,
} from "../../imageIndex";

export default function Logos() {
  return (
    <div className="flex gap-6 items-center justify-center lg:justify-start">
      <div className="w-[52.87px] h-[26px] sm:w-[161.08px] sm:h-[28.47px] lg:w-[113px] lg:h-[20px] relative">
        <Image
          fill
          className="object-contain"
          src={clientDatabiz}
          alt="databiz"
        />
      </div>
      <div className="w-[81.25px] h-[14.36px] sm:w-[103.93px] sm:h-[51.11px] lg:w-[73px] lg:h-[36px] relative">
        <Image
          fill
          className="object-contain"
          src={clientAudiophile}
          alt="databiz"
        />
      </div>
      <div className="w-[58.9px] h-[17.24px] sm:w-[120px] sm:h-[28.47px] lg:w-[90px] lg:h-[20px] relative">
        <Image fill className="object-contain" src={clientMeet} alt="databiz" />
      </div>
      <div className="w-[64.14px] h-[14.36px] sm:w-[116.76px] sm:h-[34.17px] lg:w-[82px] lg:h-[24px] relative">
        <Image
          fill
          className="object-contain"
          src={clientMaker}
          alt="databiz"
        />
      </div>
    </div>
  );
}
