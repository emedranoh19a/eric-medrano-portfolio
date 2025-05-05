import clsx from "clsx";
import Image from "next/image";

export default function DesktopImage() {
  const styles = clsx(
    "hidden md:block",
    "bottom-0 right-0 absolute -z-10",
    "h-full w-full",
    "col-start-2 col-span-2 row-start-1 row-span-2"
    // "col-start-2 col-end-4 row-start-1 row-end-2"
  );
  return (
    <div className={styles}>
      <div className="w-full h-full relative">
        <Image
          alt="A man recording"
          src="/projects/newbie/pod-request-access-landing-page/desktop/image-host.jpg"
          fill
          //TODO: This changes on version4: object-top-right
          className="object-cover object-top lg:object-right-top"
        />
        <div className="h-32 w-80  bottom-0 absolute right-0 translate-y-1/2">
          <div className="h-full w-full relative">
            <Image
              fill
              className="object-contain"
              src="/projects/newbie/pod-request-access-landing-page/desktop/bg-pattern-dots.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
