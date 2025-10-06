import Image from "next/image";
import { bgFooterSquiggle } from "../imageIndex";
import Form from "./ui/Form/Form";

export default function CTA() {
  return (
    <section id="cta" className="relative z-0">
      <div className="w-[771px] h-[106px] sm:[1120px] sm:h-[153px] lg:w-[1664px] lg:h-[228px] -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full relative z-0">
          <div className="absolute inset-0 z-10" />
          <Image
            src={bgFooterSquiggle}
            alt=""
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
      <h2 className="preset-3 text-neutral-0 text-center mb-10">
        Get notified when we launch
      </h2>
      <Form />
    </section>
  );
}
