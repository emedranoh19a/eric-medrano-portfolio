import { PinVariant, ProjectLevel } from "@/app/data/projects/Proyect.types";
import ProjectLevelBadge from "@/app/projects/slug/components/ProjectLevelBadge";
import Image, { StaticImageData } from "next/image";
import { COLUMN_WIDTH } from "../Projects";



const ROW_HEIGHT = 4;
const GAP = 16;

const ratios = {
    wide: 16 / 9,
    landscape: 3 / 2,
    square: 1,
    standard: 2 / 3,
    video: 9 / 16, //doesnt
    giraffe: 1 / 2.1,
} satisfies Record<PinVariant, number>

function getRowSpan(variant: PinVariant) {
    const ratio = ratios[variant]
    const height = COLUMN_WIDTH / ratio;

    return Math.ceil(
        (height + GAP) / (ROW_HEIGHT + GAP)
    );
}

type PinProps = {
    image: StaticImageData;
    text: number;
    title: string;
    variant: PinVariant;
    level: ProjectLevel;
    description: string;
}

//TODO: Delete the background

export default function Pin({ image, variant, text, title, description }: PinProps) {
    return (
        <article
            className="group/pin flex flex-col justify-end bg-neutral-100 relative z-0 min-w-0 overflow-hidden rounded-lg"
            style={{
                gridRowEnd: `span ${getRowSpan(variant)}`,
            }}
        >
            <ProjectLevelBadge level="intermediate" className="absolute top-1.5 right-1.5 w-fit text-xs tracking-wider" />
            <Image
                src={image}
                alt={`Project ${text}`}
                fill
                // sizes="240px"
                className="object-cover object-top opacity-100 -z-10"
            />

            <div className="relative text-pretty p-2 group-hover/pin:opacity-100 transition ">
                <div className="bg-linear-to-b  from-transparent to-neutral-900/50  w-[150%] h-[160%] right-0 bottom-0 absolute -z-10" />
                <h3 className="text-white text-2xl mb-1 leading-[120%] line-clamp-1">{title}</h3>
                <p className="line-clamp-2 text-white text-[16px] leading-[150%]">{description}</p>
            </div>

        </article>
    );
}
