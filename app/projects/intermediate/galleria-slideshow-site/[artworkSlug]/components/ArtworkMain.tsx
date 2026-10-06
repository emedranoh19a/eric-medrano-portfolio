import { cn } from "@/app/utils/utils";
import Image, { StaticImageData } from "next/image";
import { Images } from "../../data/Artwork.type";
import Dialog, { DialogTrigger, DialogWindow } from "./Dialog";
type ArtworkMainProps = {
    images: Images;
    title: string;
    artist: string;
    artistImage: StaticImageData;
    dialogStyles: string;
}
export default function ArtworkMain({ images, title, artist, artistImage, dialogStyles }: ArtworkMainProps) {

    return <div className="flex flex-col sm:flex-row">
        <ArtworkImage images={images} artist={artist} artistImage={artistImage} title={title} dialogStyles={dialogStyles} />
        <div className="flex flex-col lg:justify-between sm:items-end sm:-ml-40 lg:-ml-20">
            <ArtworkTitle title={title} artist={artist} />
            <ArtistPortraitMobile image={artistImage} artist={artist} />
        </div>
    </div>
}

type ArtworkImageProps = {
    images: Images;
    artistImage: StaticImageData;
    title: string;
    artist: string;
    dialogStyles: string;
}
function ArtworkImage({ images, artistImage, title, artist, dialogStyles }: ArtworkImageProps) {
    //Question: If I hide the image with TailwindCSS, do both image load on the browser when mobile, or when desktop. Or only one?
    const { hero: { large: heroLarge, small: heroSmall }, gallery } = images
    const containerGuardStyles = cn(" overflow-hidden h-full w-full max-w-[327px] min-[724px]:max-w-[670px] xl:max-w-[1253px] max-h-[457px] sm:max-h-[712px] ",
    )
    const imageStyles = cn("object-contain", dialogStyles)
    return <div className="shrink-0 w-full h-70  sm:w-118.75 sm:h-140 relative z-0">
        <Dialog>
            <DialogTrigger />
            <DialogWindow>
                {/* <div className="h-full w-full bg-lime-500 relative"> */}
                <div className={containerGuardStyles} >


                    <div className={imageStyles}>
                        <Image src={heroLarge} className={imageStyles} alt={title} fill />
                        {/* <Image /> */}
                    </div>
                </div>
                {/* </div> */}
            </DialogWindow>
        </Dialog>
        <Image src={heroLarge} fill className="object-cover hidden sm:inline-block" alt={title} />
        <Image src={heroSmall} fill className="object-cover sm:hidden" alt={title} />
        <ArtistPortraitDesktop image={artistImage} artist={artist} />
    </div>
}

type ArtworkTitleProps = { title: string; artist: string }
function ArtworkTitle({ title, artist }: ArtworkTitleProps) {
    //mobile: heading-2 and subhead-1
    //tablet and Desktop: heading-1 and subhead-1
    const titleStyles = cn(
        "text-heading-2 sm:text-heading-1 mb-2 sm:mb-6"
        // bp === "base" ?
        // "mb-2 heading-2" : "mb-6 heading-1",
    )
    return <div className="pl-0 p-6 sm:pl-16.25 sm:pb-16.75 -mt-12.5 sm:-mt-5 bg-white z-10 w-8/10 sm:w-full">
        <h1 className={titleStyles}>{title}</h1>
        <span className="text-heading-3 sm:text-heading-2 text-[#7D7D7D]">{artist}</span>
    </div>
}

type ArtistPortraitProps = { image: StaticImageData, artist: string; }
function ArtistPortraitMobile({ image, artist }: ArtistPortraitProps) {
    return <div className="relative w-16 sm:w-32 aspect-square lg:hidden">
        <Image src={image} alt={`${artist} portrait`} className="object-cover" fill />
    </div>
}

function ArtistPortraitDesktop({ image, artist }: ArtistPortraitProps) {
    return <div className="w-32 aspect-square hidden lg:inline-block absolute bottom-0 left-full translate-x-7.5 translate-y-16">
        <Image src={image} alt={artist} className="object-cover" fill />
    </div>
}
