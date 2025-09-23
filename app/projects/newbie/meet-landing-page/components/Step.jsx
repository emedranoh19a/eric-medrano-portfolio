import Text from "./Text";

export default function Step({ number = "01" }) {
  return (
    <div className="flex flex-col w-fit">
      {/* Stick */}
      <div className="mx-auto w-px h-20 bg-(--slate-300)" />
      <div className="border border-(--slate-300) bg-(--white) w-16 aspect-square rounded-full grid place-items-center">
        <Text preset={5} className="text-(--slate-600)">
          {number}
        </Text>
      </div>
    </div>
  );
}
