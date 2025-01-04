import clsx from "clsx"
import Image from "next/image"
//TODO: REDO the background.
import { Kumbh_Sans } from "next/font/google"

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] })

function Background({ children }) {
  const circleStyles = clsx(
    "absolute top-0 left-0 h-full w-full bg-gradient-to-bl from-cyan-200/40 to-70% to-transparent  rounded-full w-96 h-96 scale-150 md:scale-[2] lg:scale-[2.2]"
  )
  return (
    <div className="relative w-screen h-screen bg-cyan-700/55 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className={clsx(
            circleStyles,
            "left-0 top-0 -translate-y-1/2 -translate-x-1/3 absolute"
          )}
        ></div>
        <div
          className={clsx(
            circleStyles,
            "bottom-0 right-0 absolute translate-x-1/2 translate-y-1/2 -rotate-45"
          )}
        ></div>
        {children}
      </div>
    </div>
  )
}
function Avatar() {
  return (
    <div className="w-1/3 aspect-square rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/projects/newbie/profile-card-component/images/image-victor.jpg"
          alt=""
          fill
          objectFit="cover"
        />
      </div>
    </div>
  )
}
function Stat({ value, desc }) {
  return (
    <div className=" h-fit w-20 text-center">
      <p className="font-bold text-slate-900 text-md">{value}</p>
      <p className="font-light tracking-wider text-gray-400 text-xs">{desc}</p>
    </div>
  )
}
function Card() {
  return (
    <div className="bg-white shadow-lg shadow-cyan-900/40 h-96 w-80 flex flex-col rounded-xl overflow-hidden">
      <div className="h-56 relative opacity-65">
        <Image
          src="/projects/newbie/profile-card-component/images/bg-pattern-card.svg"
          alt=""
          fill
          objectFit="cover"
        />
      </div>
      <div className="relative flex flex-col h-full justify-center gap-5  ">
        <Avatar />
        <div className="flex justify-center items-center gap-3  mt-8">
          <div className="font-bold text-lg text-cyan-950">Victor Crest</div>
          <div className="text-slate-500">26</div>
        </div>
        <div className="text-center text-slate-500 text-sm">London</div>
        <hr></hr>
        <div className=" w-full flex justify-evenly">
          <Stat value="80K" desc="Followers" />
          <Stat value="803K" desc="Likes" />
          <Stat value="1.4K" desc="Photos" />
        </div>
      </div>
    </div>
  )
}

function Page() {
  return (
    <div className={`relative bg-cyan-600/60 w-screen h-screen flex items-center justify-center ${kumbhSans.className}`}>
      {/* <Background /> */}
      <Card />
    </div>
  )
}

export default Page
