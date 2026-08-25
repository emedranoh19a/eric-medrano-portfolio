import { cn } from "@/app/utils/utils"
import { League_Spartan } from "next/font/google"
import Image from "next/image"
import FilterControls from "./components/FilterControls"
import Jobs from "./components/Jobs"
import JobsProvider from "./components/JobsProvider"
import { backgroundDesktop, backgroundMobile } from "./images/imageIndex"

const leagueSpartan = League_Spartan({ weight: ["500", "700"] })
export default function Page() {
    //There is no design system, so arbitrary values are used
    const bgCn = cn("bg-[#EFFAFA] w-full min-h-screen pb-[150px] lg:pb-[120px]", leagueSpartan.className)
    return <div className={bgCn}>
        <JobsProvider>

            <Illustration />
            <div className="px-6 relative mx-auto container">
                <FilterControls />
                <Jobs />
            </div>
        </JobsProvider>
    </div>
}

function Illustration() {
    return <div className="relative h-[156px] w-full bg-[#5CA5A5] mb-12">
        <Image fill src={backgroundMobile} className="object-cover lg:hidden" alt="" />
        <Image fill src={backgroundDesktop} className="object-cover hidden lg:block" alt="" />
    </div>
}



// app\projects\intermediate\job-listings\images\bg-header-mobile.svg
// app\projects\intermediate\job-listings\images\bg-header-desktop.svg
