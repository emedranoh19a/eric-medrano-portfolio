import { cn } from "@/app/utils/utils";

type ArtworkInfoProps = {
    year: number;
    description: string;
    source: string;
}

export default function ArtworkInfo({ year, description, source }: ArtworkInfoProps) {
    return <div className="flex flex-col gap-10">
        <ArtworkDetails year={year} description={description} />
        <WikipediaLink source={source} />
    </div>
}

type ArtworkDetailsProps = {
    year: number;
    description: string;
}

function ArtworkDetails({ description, year }: ArtworkDetailsProps) {
    const textStyles = cn(
        "text-body block text-[#7D7D7D]",
        "w-full sm:max-w-2xl xl:max-w-[350px]",
        "mx-auto ",
        "-mt-7.5 sm:-mt-37.5 lg:-mt-27.25 ",
        "xl:ml-0",
        "sm:ml-auto "
    );
    return <div className="relative z-0 flex flex-col w-full">
        <span className="text-display sm:text-display-lg text-[#F3F3F3] -z-10 block text-right sm:text-left">{year}</span>
        <p className={textStyles}>
            {description}
        </p>
    </div>

}
function WikipediaLink({ source }) {
    return <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-14 sm:ml-26.25 max-w-114.25 lg:max-w-87.5 lg:ml-0 text-link-2 underline uppercase text-[#7D7D7D] hover:text-black transition-colors"
    > Go to source </a>
}
