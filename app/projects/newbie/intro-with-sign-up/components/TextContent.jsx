import clsx from "clsx";

export default function TextContent() {
  const titleStyles = clsx(
    "font-bold text-[28px] leading-[36px] tracking-[-0.29px]  mb-4",
    "lg:font-bold lg:text-[50px] lg:leading-[55px] lg:tracking-[-0.52px]"
  );
  const paragraphStyles = clsx(
    "font-medium text-[16px] leading-[26px] tracking-0 "
  );
  return (
    <div className="text-white max-w-[327px] lg:max-w-[525px] text-center lg:text-left">
      <h1 className={titleStyles}>Learn to code by watching others</h1>
      <p className={paragraphStyles}>
        See how experienced developers solve problems in real-time. Watching
        sripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}
