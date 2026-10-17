import Image from "next/image";
import { aboutImageCommitment } from "../../assets/assetIndex";

export default function Commitment() {
    return <section className="mb-49.5 sm:mb-76 lg:mb-64 flex flex-col sm:flex-row gap-12 sm:gap-17.25 lg:gap-31.25 items-center lg:px-[85px] justify-center">
        <div className="rounded-lg overflow-hidden h-100 sm:h-117.5 lg:h-130 w-full sm:w-117.5 lg:w-130 stretch-0 relative" >
            <Image className="object-cover object-top" fill alt="Commitment" src={aboutImageCommitment} />
        </div>
        <div className="sm:max-w-84.75 lg:max-w-135">
            <h2 className="heading-3 lg:heading-2 mb-7.5 lg:mb-8">Our commitment </h2>
            <p className="body opacity-80">
                We&apos;re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
            </p>

        </div>
    </section>
}
