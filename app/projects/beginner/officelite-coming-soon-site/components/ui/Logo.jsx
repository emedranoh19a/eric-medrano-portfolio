import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../../home-assets";

export default function Logo({ className }) {
  const logoContainerStyles = clsx("relative w-[155px] h-[30px]");
  return (
    <Link
      href="/projects/beginner/officelite-coming-soon-site"
      className={logoContainerStyles}
    >
      <Image src={logo} className="object-contain" fill alt="Officelite logo" />
    </Link>
  );
}
