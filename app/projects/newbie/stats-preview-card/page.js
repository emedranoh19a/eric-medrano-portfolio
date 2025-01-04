import { cn } from "@/app/utils/utils"
import { Inter, Lexend_Deca } from "next/font/google"
import Image from "next/image"


const inter = Inter({ subsets: ["latin"] })
const lexendDeca = Lexend_Deca({ subsets: ["latin"] })


function Card() {
  const cardLayoutStyles = cn(
    "h-full w-full bg-[var(--dark-desaturated-blue)] max-w-xs md:max-w-xl md:max-h-72",
    "relative flex flex-col md:flex-row-reverse",
    "rounded-lg overflow-hidden"
  )
  return <div className={cardLayoutStyles}>
    <div className="relative basis-1/3 md:basis-1/2">

      <Image
        src="/projects/newbie/stats-preview-card/images/image-header-mobile.jpg"
        alt=""
        fill
        objectFit="cover"
        className="opacity-80"
      />
      <div className="absolute w-full h-full bg-[var(--soft-violet)] opacity-[.35]" />


    </div>
    <div className="flex-1 p-8">
      <div className="w-full h-full flex flex-col justify-between gap-4 text-center md:text-left">
        <div className="h-fit">

          <h1 className="text-[var(--white)] font-bold text-xl md:text-xl mb-4">Get
            <span className="text-[var(--soft-violet)] ">{" "}insights{" "}</span>
            that help your business grow.</h1>

          <p className="text-[var(--slightly-transparent-white-p)] text-sm">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>
        </div>
        <div className="flex-1 md:basis-1/4 flex flex-col md:flex-row justify-around md:justify-between">
          {["", "", ""].map((_, i) => <div key={i} className="flex flex-col">
            <span className="text-[var(--white)] font-bold text-2xl md:text-sm">10k+</span>
            <span className={`text-[var(--slightly-transparent-white-p)] ${lexendDeca.className} uppercase md:text-[8px] tracking-widest text-xs font-normal`}>companies</span>
          </div>)
          }
        </div>

      </div>
    </div>
  </div>
}


export default function Page() {
  const containerStyles = cn("relative grid place-items-center",
    "h-screen w-full bg-[var(--very-dark-blue)]",
    "py-20 px-5",
    inter.className)

  return <div className={containerStyles}
    style={{
      "--very-dark-blue": "hsl(233, 47%, 7%)", //background
      "--dark-desaturated-blue": "hsl(244, 38%, 16%)", //card background
      "--soft-violet": "hsl(277, 64%, 61%)", //accent
      "--white": "hsl(0, 0%, 100%)",
      "--slightly-transparent-white-p": "hsla(0, 0%, 100%, 0.75)",
      //Other things. One at a time. 
      //body font size: 15px.
      //family. inter.
      //weight, 400
    }}>
    <Card />
  </div>
}
