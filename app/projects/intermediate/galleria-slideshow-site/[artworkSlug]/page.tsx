import { Artwork } from "../data/Artwork.type";
import { artworks } from "../data/data";
import ArtworkInfo from "./components/ArtworkInfo";
import ArtworkMain from "./components/ArtworkMain";

type PageParams = {
    params: Promise<{ artworkSlug: string }>;
}

export default async function Page({ params }: PageParams) {
    const { artworkSlug } = await params
    const artwork: Artwork = artworks.find((item) => item.slug === artworkSlug)
    return <div className="flex-1 z-0 flex h-fit flex-col xl:flex-row justify-center xl:items-center mt-6 xl:mt-0">
        <ArtworkMain images={artwork.images} title={artwork.name} dialogStyles={artwork.dialogStyles} artist={artwork.artist.name} artistImage={artwork.artist.image} />
        <ArtworkInfo year={artwork.year} description={artwork.description} source={artwork.source} />
    </div>
}

