import Form from "./Form";
import Text from "./Text";
import TrustedBy from "./TrustedBy";

export default function Content() {
  return (
    <div className="bg-[var(--blue-950)] h-fit col-start-1 lg:pr-16 pt-9 lg:pt-20 gap-y-10 col-span-2 self-center  h-full w-full grid lg:max-w-2xl">
      <div className="self-center flex flex-col gap-4 md:max-w-sm lg:max-w-2xl">
        <Text className="text-white uppercase">
          <span className="text-[var(--green)]">Publish your Podcasts</span>{" "}
          everywhere
        </Text>
        <Text preset={2} className="text-[var(--blue-300)] lg:max-w-lg">
          Upload your audio to Pod with a single click. We&apos;ll then
          distribute your podcast to Spotify, Apple Podcasts, Google Podcasts,
          Pocket Casts and more!
        </Text>
      </div>
      <TrustedBy />
      <Form />
    </div>
  );
}
