import clsx from "clsx";

export default function Banner() {
  const bannerStyles = clsx(
    "bg-(--blue) w-full text-white rounded-2xl text-center",
    "text-[15px] leading-[26px] tracking-[0.27px] py-[18px] px-[66px]"
  );
  return (
    <div className={bannerStyles}>
      <span className="font-bold">Try it free 7 days</span>
      then $20/mo. thereafter
    </div>
  );
}
