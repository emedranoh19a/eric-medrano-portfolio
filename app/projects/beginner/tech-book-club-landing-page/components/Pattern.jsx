import Image from "next/image";

export default function Pattern({ variant = "light" }) {
  //Note: There is also a dark variant.
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={`/projects/beginner/tech-book-club-landing-page/pattern-${variant}-bg.svg`}
        fill
        alt=""
        className="object-cover"
      />
    </div>
  );
}
