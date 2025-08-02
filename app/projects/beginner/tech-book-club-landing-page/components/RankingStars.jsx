import Image from "next/image";
import { star } from "../imageIndex";

export default function RankingStars() {
  return (
    <div className="flex flex-row gap-[6px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="relative w-[28px] aspect-square">
          <Image fill alt="star icon" className="object-contain" src={star} />
        </div>
      ))}
    </div>
  );
}
