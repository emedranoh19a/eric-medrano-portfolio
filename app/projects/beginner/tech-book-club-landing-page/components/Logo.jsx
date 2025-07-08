import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-[193px] h-[36px]">
      <Image
        src="/projects/beginner/tech-book-club-landing-page/logo.svg"
        fill
        className="object-contain"
        alt="Tech Book Club Logo"
      />
    </div>
  );
}
