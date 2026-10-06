import ArtworkLink from "./components/ArtworkLink";
import { artworks } from "./data/data";

export default function Page() {

    return <div className="container mx-auto flex-1 columns-1 sm:columns-2 lg:columns-4 gap-6 sm:gap-10 pt-6 sm:pt-10">
        {artworks.map((artwork, i) => (
            <ArtworkLink
                key={i}
                image={artwork.images.thumbnail}
                slug={artwork.slug}
                artworkName={artwork.name}
                artistName={artwork.artist.name}
            />)
        )}
    </div>
}

