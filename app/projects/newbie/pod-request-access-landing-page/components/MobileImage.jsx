import Image from "next/image";

export default function MobileImage() {
  return (
    <div className="absolute w-full h-full sm:hidden -z-10 opacity-10">
      <Image
        src="/projects/newbie/pod-request-access-landing-page/mobile/image-host.jpg"
        fill
        className="object-cover"
      />
    </div>
  );
}
