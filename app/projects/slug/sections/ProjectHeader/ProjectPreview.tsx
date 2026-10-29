import ScalesBorder from "@/app/components/ScalesBorder";
import { cn } from "@/app/utils/utils";
import Image, { StaticImageData } from "next/image";

type ProjectPreviewProps = {
    preview: StaticImageData
    className?: string;
}
export default function ProjectPreview({ preview, className }: ProjectPreviewProps) {
    //Image with scales
    // return <div className="relative mx-auto flex w-full items-center justify-center ">
    const containerStyles = cn("relative h-full w-full", className)
    return <div className={containerStyles}>
        <div className="opacity-0 lg:opacity-80">
            <ScalesBorder variant="left" />
            <ScalesBorder variant="right" />
            <ScalesBorder variant="top" />
            <ScalesBorder variant="bottom" />
        </div>
        {/* <div className="bg-neutral-200 relative z-10 h-full w-full overflow-hidden rounded-none shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800"> */}
        <Image src={preview} height={1000} width={1000} alt="" className="rounded-lg shadow-2xl shadow-neutral-900/20" />
        {/* </div> */}
    </div >
    // </div>
}


