import Image from "next/image";

function IconEthereum() {
  return (
    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
        fill="#00FFF8"
      />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
        fill="#8BACD9"
      />
    </svg>
  );
}
function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-900">
      <div className="group bg-slate-800 h-[450px] w-72 rounded-xl p-6">
        <div className="h-1/2 w-full relative rounded-xl overflow-hidden group-hover:brightness-200 group-hover:sepia-0">
          <Image
            src="/nft-card/images/image-equilibrium.jpg"
            alt=""
            fill
            objectFit="cover"
          />{" "}
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-slate-100 text-lg font-bold group-hover:text-cyan-400">
              Equilibrium #3429
            </h3>
            <p className=" text-slate-400 text-sm">
              Our equilibrium collection promotes balance and calm.
            </p>
          </div>
          <div className="my-4 flex justify-between">
            <div className="text-cyan-300 flex gap-2 text-sm">
              <IconEthereum />
              <span>0.041 ETH</span>
            </div>
            <div className="flex gap-1 text-sm text-slate-500">
              <IconClock />
              <span>3 days left</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-start gap-3 items-center mt-4 ">
            <div className="w-10 h-10 rounded-full relative overflow-hidden border border-white ">
              <Image
                src="/nft-card/images/image-avatar.png"
                fill
                objectFit="cover"
              />
            </div>
            <p className="text-slate-500">
              Creation of{" "}
              <span className="text-slate-300 group-hover:text-cyan-400">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    //
    //   0.041 ETH 3 days left. Creation of Jules Wyvern
  );
}

export default Page;
