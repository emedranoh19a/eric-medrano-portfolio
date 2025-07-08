import Image from "next/image";

export default function TestimonialAvatars() {
  return (
    <div className="w-[110px] h-10 relative">
      <Image
        alt="avatars"
        fill
        className="object-contain"
        src="/projects/beginner/tech-book-club-landing-page/image-avatars.webp"
      />
    </div>
  );
}
