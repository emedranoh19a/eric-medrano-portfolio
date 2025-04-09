export default function ProductShowcase() {
  return (
    <div className="h-full w-full sm:h-60 bg-white bg-lime-100 ">
      {/* Desktoop version */}
      <div className=" hidden sm:block bg-lime-200 grid grid-cols-4 grid-rows-[repeat(4,1fr)] gap-3 place-items-center">
        <div className=" bg-lime-300 aspect-square">item</div>
        <div className=" bg-lime-300 aspect-square">item</div>
        <div className=" bg-lime-300 aspect-square">item</div>
        <div className=" bg-lime-300 aspect-square">item</div>
        <div className=" bg-lime-300 aspect-square">item</div>
        <div className=" bg-lime-300 aspect-square">item</div>
        <div className=" bg-lime-300 aspect-square">item</div>
      </div>
      {/* Mobile version version */}
      <div className="block sm:hidden">Mobile version</div>
    </div>
  );
}
