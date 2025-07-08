import Image from "next/image";

export default function RankingStars() {
  return (
    <div className="flex flex-row gap-[6px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="relative w-[28px] aspect-square">
          <Image
            fill
            alt="star icon"
            className="object-contain"
            src="/projects/beginner/tech-book-club-landing-page/icon-star.svg"
          />
        </div>
      ))}
    </div>
  );
}
