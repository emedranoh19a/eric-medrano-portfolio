"use client";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Counter from "../ui/Counter";

export default function CTA() {
  const router = useRouter();
  return (
    <div className="relative z-20 pt-20 sm:pt-24 lg:pt-20 pb-[112px] sm:pb-[130px] lg:pb-[120px] flex flex-col gap-12 items-center lg:flex-row justify-between">
      {/* <div className="absolute bottom-0 -z-10 w-screen h-full left-1/2 -translate-x-[50vw] bg-neutral-900" /> */}
      {/*  */}
      {/* <!-- If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page --> */}
      <Counter />
      <Button
        onClick={() => {
          router.push("/projects/beginner/officelite-coming-soon-site/sign-up");
        }}
      />
    </div>
  );
}
