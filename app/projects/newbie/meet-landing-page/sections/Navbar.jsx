import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-center pt-12 lg:pt-20">
      <Image
        width={118}
        height={28}
        src="/projects/newbie/meet-landing-page/logo.svg"
      />
    </nav>
  );
}
