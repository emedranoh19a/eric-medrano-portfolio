import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-[134px] h-14">
      <Image
        fill
        src="/projects/newbie/pod-request-access-landing-page/desktop/logo.svg"
        className="object-contain"
        alt="Logo"
      />
    </div>
  );
}
