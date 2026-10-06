import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ArtworkLinkProps = {
    image: StaticImageData;
    artworkName: string;
    artistName: string;
    slug: string;
}
export default function ArtworkLink({ image, artworkName, artistName, slug }: ArtworkLinkProps) {

    return <Link href={`/projects/intermediate/galleria-slideshow-site/${slug}`} className="relative z-0 mb-6 sm:mb-10 w-full h-fit break-inside-avoid inline-block">
        {/* Image Overlay */}
        <div className="bg-linear-to-b from-black/0 to-black/84 h-42.5 absolute z-10 w-full bottom-0 " />

        <div className="absolute z-20 bottom-0  pb-8 px-8 leading-normal tracking-normal">
            <span className="text-white font-bold text-[24px] block">
                {artworkName}
            </span>
            <span className="text-white/78 font-regular text-[13px]">
                {artistName}
            </span>
        </div>

        {/* Image */}
        <Image src={image} className="object-contain" style={{ height: "auto" }} alt="Starry Night" height={1000} width={1000} />
    </Link>
}
