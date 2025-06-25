import Image from "next/image";

export default function StylesSetup({ children }) {
  return (
    <div
      className="relative z-0 w-full min-h-screen bg-[var(--white)] overflow-x-hidden"
      style={{
        "--cyan": "#66E2DC",
        "--orange": "#FA7453",
        "--yellow": "#FFB964",
        "--white": "#FCFAF9",
        "--slate": "#191826",
      }}
    >
      <div className="absolute w-full h-full z-10">
        <Image
          className="object-cover sm:hidden"
          fill
          alt=""
          src="/projects/newbie/equalizer-landing-page/bg-main-mobile.png"
        />
        <Image
          className="object-cover hidden sm:block lg:hidden"
          fill
          alt=""
          src="/projects/newbie/equalizer-landing-page/bg-main-tablet.png"
        />
        <Image
          className="object-cover hidden sm:hidden lg:block"
          fill
          alt=""
          src="/projects/newbie/equalizer-landing-page/bg-main-desktop.png"
        />
      </div>
      <div className="w-full h-auto relative   flex flex-col">{children}</div>
    </div>
  );
}
