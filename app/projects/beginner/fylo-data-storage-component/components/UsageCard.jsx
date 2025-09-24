export default function UsageCard() {
  return (
    <div className="relative max-w-[540px] w-full bg-blue-850 px-8 rounded-xl lg:py-10">
      <div className="mx-auto translate-y-10 lg:translate-y-0">
        <p className="mb-4 preset-2-regular text-blue-200 text-center sm:text-left">
          You’ve used <span className="preset-2-bold">815 GB</span> of your
          storage
        </p>

        <BlueBar>
          <PinkBar>
            <Ball />{" "}
          </PinkBar>
        </BlueBar>

        <div className="flex w-full justify-between preset-3-extrabold text-blue-200 mb-2">
          <span>0 GB</span>
          <span>100 GB</span>
        </div>
        <div className="lg:hidden py-4 px-6 preset-3-bold text-blue-950/50 bg-white rounded-xl w-fit mx-auto lg:absolute lg:top-0 lg:right-0">
          {" "}
          <ZigZagNumber /> GB Left
        </div>
      </div>
      <div className="hidden lg:block  preset-3-bold text-blue-950/50 bg-white rounded-xl rounded-br-none w-fit mx-auto lg:absolute lg:top-0 lg:right-8 -translate-y-1/2">
        <div className="relative w-full h-full py-4 px-6">
          <div
            className="w-[23px] aspect-square bg-white absolute top-full right-0 -translate-y-px"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)" }}
          ></div>{" "}
          <ZigZagNumber /> GB Left
        </div>
      </div>
    </div>
  );
}

function ZigZagNumber() {
  return (
    <>
      <span className="text-blue-950 preset-1">185</span>
    </>
  );
}

function Ball() {
  return (
    <div className="rounded-full aspect-square h-full absolute top-0 right-0 bg-white " />
  );
}

function PinkBar({ children }) {
  return (
    <div className="absolute top-0 left-0 h-full w-[75%] bg-linear-to-r from-pink-gradient-start to-pink-gradient-end  rounded-xl">
      <div className="w-full h-full relative p-[2px]">
        <div className="w-full h-full relative">{children}</div>
      </div>
    </div>
  );
}
function BlueBar({ children }) {
  return (
    <div className="relative mb-2 h-5 w-full bg-blue-900 rounded-xl p-[3px]">
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}
