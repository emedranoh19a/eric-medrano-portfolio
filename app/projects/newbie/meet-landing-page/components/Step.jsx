import Text from "./Text";

export default function Step({ number = "01" }) {
  return (
    <div className="flex flex-col w-fit">
      {/* Stick */}
      <div className="mx-auto w-px h-20 bg-[var(--slate-300)]" />
      <div className="border border-[var(--slate-300)] bg-[var(--white)] w-16 aspect-square rounded-full grid place-items-center">
        <Text preset={5} className="text-[var(--slate-600)]">
          {number}
        </Text>
      </div>
    </div>
  );
}
