import Image from "next/image";
import { aboutImageQuality } from "../../assets/assetIndex";

export default function Quality() {
    return <section className="mb-30 sm:mb-36 lg:mb-42 rounded-lg bg-[#2C343E] text-light-cream">
        <div className="pb-15.25 sm:pb-16.75  lg:pb-22 px-6 sm:px-14.5 lg:px-21.25 flex flex-col items-center lg:flex-row-reverse gap-16 justify-between lg:gap-[31.25]">

            <div className="relative h-39 sm:h-80 w-full lg:w-111.25 lg:h-118.5 shrink-0 -mt-19.5 sm:-mt-40 lg:-mt-22 rounded-lg overflow-hidden">
                <Image src={aboutImageQuality} alt="quality" fill className="object-cover" />
            </div>
            <div className="text-center lg:text-left max-w-135">
                <h2 className="text-[28px] heading-3 sm:heading-3 lg:heading-2 mb-6 lg:mb-8">
                    Uncompromising quality
                </h2>
                <p className="body opacity-80">
                    Although we work with growers who pay close     ttention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
            </div>
        </div>
    </section>
}
