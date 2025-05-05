import Image from "next/image";

const logos = [
  {
    title: "Spotify",
    url: "/projects/newbie/pod-request-access-landing-page/desktop/spotify.svg",
  },
  {
    title: "Apple Podcast",
    url: "/projects/newbie/pod-request-access-landing-page/desktop/apple-podcast.svg",
  },
  {
    title: "Google Podcasts",
    url: "/projects/newbie/pod-request-access-landing-page/desktop/google-podcasts.svg",
  },
  {
    title: "Pocket Casts",
    url: "/projects/newbie/pod-request-access-landing-page/desktop/pocket-casts.svg",
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
