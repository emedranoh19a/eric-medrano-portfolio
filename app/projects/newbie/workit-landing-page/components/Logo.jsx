import Image from "next/image";

export default function Logo({ dark = false }) {
  //variant must be "dark" or "light"
  const imageUrl = `/projects/newbie/workit-landing-page/images/logo-${
    dark ? "dark" : "light"
  }.svg`;
  return (
    <div className="w-24 h-6 relative inline-block">
      <Image src={imageUrl} fill className="object-contain" alt="workit logo" />
    </div>
  );
}
