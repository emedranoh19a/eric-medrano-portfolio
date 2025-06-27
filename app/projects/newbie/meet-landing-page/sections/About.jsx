import Image from "next/image";
import Step from "../components/Step";
import Text from "../components/Text";

export default function About() {
  return (
    <main className="flex-1 flex flex-col items-center gap-16 px-8 lg:px-20 pt-8 sm:pt-14 pb-16 lg:pb-18">
      <Step number="01" />
      <Gallery />
      <Content />
    </main>
  );
}

function Gallery() {
  const items = [
    {
      src: "/projects/newbie/meet-landing-page/desktop/image-woman-in-videocall.jpg",
      alt: "woman in videocall",
    },
    {
      src: "/projects/newbie/meet-landing-page/desktop/image-women-videochatting.jpg",
      alt: "woman in videochatting",
    },
    {
      src: "/projects/newbie/meet-landing-page/desktop/image-men-in-meeting.jpg",
      alt: "men in meeting",
    },
    {
      src: "/projects/newbie/meet-landing-page/desktop/image-man-texting.jpg",
      alt: "man texting",
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-fit">
      {items.map((item, i) => (
        <GalleryItem key={i} {...item} />
      ))}
    </div>
  );
}
function GalleryItem({ alt, src }) {
  return (
    <div className="rounded-lg overflow-hidden w-[144px] h-[144px] sm:w-[152px] sm:[160px] lg:w-[256px] lg:h-[256px]">
      <div className="w-full h-full relative">
        <Image src={src} alt={alt} fill className="objec-cover" />
      </div>
    </div>
  );
}
function Content() {
  return (
    <div className="text-center sm:max-w-[504px] lg:max-w-[544px]">
      <Text as="h3" className="text-[var(--cyan-600)] mb-4" preset={3}>
        Built for modern use
      </Text>
      <Text as="h2" className="text-[var(--slate-900)] mb-8" preset={2}>
        Smarter meetings, all in one place{" "}
      </Text>
      <Text className="text-[var(--slate-900)]" preset={4}>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </Text>
    </div>
  );
}
