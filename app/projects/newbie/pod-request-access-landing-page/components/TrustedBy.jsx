import Image from "next/image";
import {
  applePodcast,
  googlePodcasts,
  pocketCasts,
  spotify,
} from "../imageIndex";

const logos = [
  {
    title: "Spotify",
    url: spotify,
  },
  {
    title: "Apple Podcast",
    url: applePodcast,
  },
  {
    title: "Google Podcasts",
    url: googlePodcasts,
  },
  {
    title: "Pocket Casts",
    url: pocketCasts,
  },
];
export default function TrustedBy() {
  return (
    <div className="w-full flex justify-between items-end gap-3 h-10 order-2 md:order-1">
      {logos.map((item, i) => (
        <div key={i} className="relative h-full w-full">
          <Image
            src={item.url}
            alt={`Logo of ${item.title}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
