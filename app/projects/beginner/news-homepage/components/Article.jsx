import Text from "./Text";

export default function Article() {
  //TODO: Not sure about the max width
  return (
    <div className="flex gap-6 mb-10 ">
      <div className="w-[100px] h-[129px] bg-neutral-200"></div>
      <div className="flex flex-col gap-2 max-w-[212px]">
        <Text preset={3} as="span">
          01
        </Text>
        <Text preset={5}>Reviving Retro PCs</Text>
        <Text preset={6}>
          What happens when old PCS are given modern updates?
        </Text>
      </div>
    </div>
  );
}
