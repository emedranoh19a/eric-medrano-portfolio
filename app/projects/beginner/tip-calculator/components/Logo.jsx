import Image from "next/image";

export default function Logo() {
  //public
  return (
    <div className="relative w-[86px] h-[53px]">
      <Image
        src="/projects/beginner/tip-calculator/logo.svg"
        alt="Splitter Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
