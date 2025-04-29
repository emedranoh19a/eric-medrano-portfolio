import Image from "next/image";

export default function Logo({ dark = false }) {
  return (
    <div className="relative w-[111px] h-[28px]">
      <Image
        fill
        className="object-contain"
        alt="Skilled logo"
        src={`/projects/newbie/skilled-elearning-landing-page/assets/logo-${
          dark ? "dark" : "light"
        }.svg`}
      />
    </div>
  );
}
