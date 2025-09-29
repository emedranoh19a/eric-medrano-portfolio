import clsx from "clsx";
import Image from "next/image";
import Button from "../components/Button";
import { bgIntroDesktop, bgIntroMobile, imageMockups } from "../imageIndex";

export default function Hero() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[778px]">
      <DesktopMockups />
      <MobileMockups />
      <HeroContent />
    </div>
  );
}

function DesktopMockups() {
  return (
    <div className="hidden lg:block w-[800px] h-[778px] absolute right-1/2 translate-x-[50vw] top-0">
      <Image
        src={bgIntroDesktop}
        alt=""
        fill
        className="object-cover object-left hidden lg:block"
      />
      <div className="w-full h-full relative">
        <div className="w-[617px] h-[778px] absolute top-0 right-0 scale-135">
          <Image
            alt="mockups"
            src={imageMockups}
            fill
            className="object-contain"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
function MobileMockups() {
  const backgroundStyles = clsx(
    "lg:hidden",
    "w-screen h-[343px] sm:h-[581px]",
    "relative left-1/2 -translate-x-[50vw]",
    "sm:mb-[122px] "
  );
  return (
    <div className={backgroundStyles}>
      <Image
        src={bgIntroMobile}
        alt=""
        fill
        className="object-cover lg:hidden"
      />
      <div className="relative w-[326px] h-[401.77px] mx-auto sm:w-[602.23px] sm:h-[743.93px]">
        <Image
          alt="mockups"
          src={imageMockups}
          fill
          className="object-contain"
          priority={true}
        />
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="max-w-[447px] mx-auto flex flex-col items-center lg:items-start gap-6 text-center lg:text-left mt-12 mb-18 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
      <h1 className="preset-2 sm:preset-1 text-blue-950">
        Next generation digital banking
      </h1>
      <p className="preset-7 sm:preset-5 text-gray-600">
        Take your financial life online. Your Digitalbank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <Button text="Request Invite" />
    </div>
  );
}
