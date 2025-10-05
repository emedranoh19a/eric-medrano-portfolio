import clsx from "clsx";
import Image from "next/image";
import { logo } from "../../imageIndex";

export default function Logo({ className }) {
  const containerStyles = clsx(
    "w-[82px] h-8 lg:w-[100px] lg:h-10 relative",
    className
  );
  return (
    <div className={containerStyles}>
      <Image src={logo} alt="Blogr Logo" fill className="object-contain" />
    </div>
  );
}
