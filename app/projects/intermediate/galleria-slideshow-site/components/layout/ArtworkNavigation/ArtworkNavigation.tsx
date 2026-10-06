"use client"
import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { artworks } from "../../../data/data";
import MediaButton from "./MediaButton";

export default function ArtworkNavigation() {
    //State:
    const { artworkSlug } = useParams<{ artworkSlug: string }>()

    //Style:
    const containerStyles = cn("relative sticky bottom-0 bg-white",
        "py-4 sm:py-6.25 ",
        "flex justify-between items-center")
    const currentArtworkIndex = artworks.findIndex(artwork => artwork.slug === artworkSlug)

    return <div className={containerStyles}>
        <ProgressBar artworkIndex={currentArtworkIndex} />
        <ArtworkInfo artworkIndex={currentArtworkIndex} />
        <MediaButtons artworkIndex={currentArtworkIndex} />
    </div>
}


type ArtworkIndex = {
    artworkIndex: number;
}

function ArtworkInfo({ artworkIndex }: ArtworkIndex) {
    return <div>
        <span className="font-bold text-[14px] sm:text-[18px] leading-normal tracking-normal mb-2.25">
            {artworks[artworkIndex].name}
        </span>
        <div className="font-regular text-[10px] sm:text-[13px] leading-normal tracking-normal">
            {artworks[artworkIndex].artist.name}
        </div>
    </div>
}


function MediaButtons({ artworkIndex }: ArtworkIndex) {
    const isFirst = artworkIndex === 0;
    const isLast = artworkIndex === artworks.length - 1;

    return <div className="flex flex-row gap-[23.24] sm:gap-[40.36px]">
        <MediaButton variant="left" disabled={isFirst} href={!isFirst ? `/projects/intermediate/galleria-slideshow-site/${artworks[artworkIndex - 1].slug}` : null} />
        <MediaButton variant="right" disabled={isLast} href={isLast ? null : `/projects/intermediate/galleria-slideshow-site/${artworks[artworkIndex + 1].slug}`} />
    </div>
}

function ProgressBar({ artworkIndex }: ArtworkIndex) {
    const progress = artworkIndex / (artworks.length - 1) * 100
    // const width = useMotionValue(`${progress}%`)
    return <div className="w-screen h-0.5 absolute top-0 left-1/2 translate-x-[-50vw]">
        <div className="h-full w-full relative" >
            <motion.div
                className="absolute h-full bg-black"
                style={{ width: `${progress}%` }}
                // initial={false}
                // animate={{ width: `${width}%` }}
                transition={{ duration: 0.4, ease: "easeInOut", }}
            />
        </div>
    </div>

}
