import Image from "next/image";
import { avatars } from "../imageIndex";

export default function TestimonialAvatars() {
  return (
    <div className="w-[110px] h-10 relative">
      <Image alt="avatars" fill className="object-contain" src={avatars} />
    </div>
  );
}
