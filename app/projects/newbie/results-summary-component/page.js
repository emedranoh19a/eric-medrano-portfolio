import { cn } from "@/app/utils/utils"
import clsx from "clsx"
import { Hanken_Grotesk } from "next/font/google"
import Image from "next/image"
import { memory, reaction, verbal, visual } from "./imageIndex"

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], weight: ["500", "700", "800"] })
//Challenge: Use the Mobile First approach this time.
export default function Page() {

  const firstItemStyles = clsx(
    "relative flex flex-col justify-evenly gap-1 text-center",
    "max-w-96 md:max-w-72 md:h-full w-auto inset-y-0",
    "p-4 px-10",
    "bg-linear-to-b from-(--light-royal-blue) to-(--light-royal-blue2)",
    "rounded-b-2xl md:rounded-2xl",)
  const secondItemStyles = clsx("p-3 flex flex-col gap-5 md:gap-2 justify-between h-full")
  return <CSSVariables>
    <div className="grid place-items-center self-start md:self-center">
      <div className="relative flex flex-col  md:flex-row justify-center items-center bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-500/20">

        <div className={firstItemStyles}>
          <span className=" text-(--pale-blue) opacity-60 capitalize  ">
            Your result
          </span>
          <div className="relative flex flex-col h-full  align-center items-center justify-center inline-block aspect-square w-32 self-center bg-linear-to-b from-gray-800/40 to-transparent rounded-full">
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-5xl text-(--white) font-bold inline-block">
                76</span>
              <br />
              <span className="text-sm tracking-loose text-white/40 inline-block">
                of 100
              </span>
            </div>
          </div>
          <div>

            <h3 className="text-(--pale-blue) text-2xl font-bold tracking-wide mb-2">
              Great
            </h3>
            <p className="px-4 text-sm text-(--light-lavender) font-thin opacity-80">
              You scored higher than 65% of the
              people who have taken these tests.
            </p>
          </div>
        </div>
        <div className={secondItemStyles}>
          <h4 className="font-bold text-xl md:text-base text-(--dark-gray-blue)">
            Summary
          </h4>
          <div className="flex flex-col gap-3 ">
            {/*   "--light-red": "hsl(0, 100%, 67%)",
      "--oragey-yellow": "hsl(39, 100%, 56%)",
      "--green-teal": "hsl(166, 100%, 37%)",
      "--cobalt-blue": "hsl(234, 85%, 45%)", */}
            <Slot score="80" title="Reaction" className="text-(--light-red) bg-[hsla(0,100%,67%,0.05)]" image={reaction} />
            <Slot score="92" title="Memory" className="text-(--oragey-yellow) bg-[hsl(39,100%,56%)]/10" image={memory} />
            <Slot score="61" title="Verbal" className="text-(--green-teal) bg-[hsl(166,100%,37%)]/10" image={verbal} />
            <Slot score="72" title="Visual" className="text-(--cobalt-blue) bg-[hsl(234,85%,45%)]/10" image={visual} />
          </div>
          {/* "--white": "hsl(0, 0%, 100%)",
      "--pale-blue": "hsl(221, 100%, 96%)",
      "--light-lavender": "hsl(241, 100%, 89%)", */}
          <button className="rounded-full bg-(--dark-gray-blue) text-(--pale-blue) py-1.5 font-bold tracking-normal text-lg">Continue</button>
        </div>
      </div>

    </div>

  </CSSVariables>
}

function Slot({ className = "", score, title, image }) {
  const containerStyles = cn("min-w-80 h-14 md:h-9 rounded-lg bg-red-500/50 px-2 flex items-center justify-between", className)
  return <div className={containerStyles} >

    <div className="flex gap-2"> {/* First item */}
      <div className="relative w-5 aspect-square">
        <Image
          src={image}
          fill
          className="object-contain "
          alt=""
        />
      </div>
      <h5 className="font-bold">{title}</h5>
    </div>
    <div className="text-(--dark-gray-blue) font-bold "> {/* second item: relation */}
      <span>
        {score}
      </span>{" "}
      <span className="opacity-30">

        / 100
      </span>
    </div>
  </div>
}

function CSSVariables({ children }) {

  return <div
    style={{
      "--light-red": "hsl(0, 100%, 67%)",
      "--oragey-yellow": "hsl(39, 100%, 56%)",
      "--green-teal": "hsl(166, 100%, 37%)",
      "--cobalt-blue": "hsl(234, 85%, 45%)",

      "--light-slate-blue": "hsl(252, 100%, 67%)",
      "--light-royal-blue": "rgba(79, 76, 255, 0.94)",
      "--light-royal-blue2": "hsl(241, 81.20%, 54.10%)",
      "--violet-blue": "hsla(256, 72%, 46%, 1)",

      "--persian-blue": "hsla(241, 72%, 46%, 0)",
      "--white": "hsl(0, 0%, 100%)",
      "--pale-blue": "hsl(221, 100%, 96%)",
      "--light-lavender": "hsl(241, 100%, 89%)",
      "--dark-gray-blue": "hsl(224, 30%, 27%)"
    }}
    className={`w-full min-h-screen grid place-items-center bg-white ${hankenGrotesk.className}`}

  >{children}</div>
}
