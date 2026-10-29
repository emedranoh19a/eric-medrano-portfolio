
"use client";

import {
    natoursImage,
    nexterImage,
    omnifoodImage,
    reactQuizImage,
    theWildOasisImage,
    trilloImage,
    usePopcornImage
} from "@/app/projects/tutorials";

import Image, { type StaticImageData } from "next/image";

type MasonryVariant =
    | "standard"
    | "square"
    | "giraffe"
    | "video"
    | "landscape"
    | "wide";

type MasonryItem = {
    image: StaticImageData;
    // ratio: number; // width / height
    variant: MasonryVariant;
};

const COLUMN_WIDTH = 240;
const ROW_HEIGHT = 4;
const GAP = 16;
//TODO: Create a development helper that shows the same project previews in all the formats (To select one)
const masonryItems: MasonryItem[] = [
    { image: reactQuizImage, variant: "wide" },
    { image: reactQuizImage, variant: "landscape" },
    { image: reactQuizImage, variant: "square" },
    { image: reactQuizImage, variant: "standard" },
    { image: reactQuizImage, variant: "video" },
    { image: reactQuizImage, variant: "giraffe" },
    { image: theWildOasisImage, variant: "wide" },
    { image: omnifoodImage, variant: "landscape" },
    { image: nexterImage, variant: "square" },
    { image: usePopcornImage, variant: "standard" },
    { image: natoursImage, variant: "video" },
    // { image: keeperImage, variant: "video" },
    { image: reactQuizImage, variant: "landscape" },
    { image: reactQuizImage, variant: "square" },
    { image: trilloImage, variant: "square" },

];

const ratios = {
    wide: 16 / 9,
    landscape: 3 / 2,
    square: 1,
    standard: 2 / 3,
    video: 9 / 16, //doesnt
    giraffe: 1 / 2.1,
} satisfies Record<MasonryVariant, number>

function getRowSpan(variant) {
    const ratio = ratios[variant]
    const height = COLUMN_WIDTH / ratio;

    return Math.ceil(
        (height + GAP) / (ROW_HEIGHT + GAP)
    );
}

export default function Projects() {
    return (
        <section className="container mx-auto px-4">
            <div
                className="grid grid-cols-[repeat(auto-fill,250px)] auto-rows-1 gap-4 justify-center
        "
            >
                {masonryItems.map((item, i) => (
                    <Pin
                        key={i}
                        image={item.image}
                        // ratio={item.ratio}
                        variant={item.variant}
                        text={i + 1}
                    />
                ))}
            </div>
        </section>
    );
}

type PinProps = {
    image: StaticImageData;
    ratio: number;
    text: number;
    variant: "standard" | "square" | "giraffe" | "video"

};

function Pin({ image, variant, text }: PinProps) {
    return (
        <article
            className="relative min-w-0 overflow-hidden rounded-lg bg-neutral-100"
            style={{
                gridRowEnd: `span ${getRowSpan(variant)}`,
            }}
        >
            <Image
                src={image}
                alt={`Project ${text}`}
                fill
                // sizes="240px"
                className="object-cover object-top"
            />

            <span className="absolute left-2 top-2 z-10 rounded bg-white/80 px-2 py-1 text-sm text-black">
                {text}
            </span>
        </article>
    );
}
