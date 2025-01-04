import clsx from "clsx"
import { Fraunces, Montserrat } from "next/font/google"
import Image from "next/image"
//TODO: centrar imagen del perfume
//TODO: Establecer un max Width
const montserrat = Montserrat({ subsets: ["latin"] })
const fraunces = Fraunces({ subsets: ["latin"], weight: "700" })
function Card() {
  const cardStyles = clsx(


    // "border-xl overflow-hidden rounded-xl shadow-xl",

    "flex flex-col md:flex-row justify-between",
    "bg-white ",
    "w-full h-full max-w-80 md:max-w-xl  md:w-[700px]",
    "border-xl overflow-hidden rounded-xl shadow-xl shadow-orange-200/30",
    ""

  )

  // const cardStyles = clsx(
  //   "absolute inset-0 flex items-center justify-center", // Center the card on all screen sizes
  //   "md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2", // Fine-tune centering for medium screens or larger
  //   "w-full max-w-sm md:max-w-xl", // Define responsive width

  // )

  return (
    <div className={cardStyles}>
      <div className="min-h-2/5 h-1/2 md:h-full w-full md:basis-1/2 relative bg-red-500">
        <Image
          src="/projects/newbie/product-preview-card/images/image-product-desktop.jpg"
          fill
          objectFit="cover"
          // objectPosition="center"
          alt="Image of Gabrielle Essence Eau De Parfum"
          className="object-top hidden md:block"
        />
        <Image
          src="/projects/newbie/product-preview-card/images/image-product-mobile.jpg"
          fill
          objectFit="cover"
          // objectPosition="center"
          alt="Image of Gabrielle Essence Eau De Parfum"
          className="object-center block md:hidden"
        />
      </div>
      <div className="md:w-1/2 p-4 h-full flex flex-col gap-3 justify-between">
        <p className="uppercase text-slate-400 text-xs tracking-widest leading-4">
          Perfume
        </p>
        <h2 className={`${fraunces.className} text-slate-900 text-2xl leading-wider font-bold leading-6`}>
          Gabrielle Essence
          <br /> Eau De Parfum
        </h2>
        <p className="text-sm text-slate-400 leading-70">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <span className={`relative text-green-700 text-2xl font-bold after:content-['$169.99'] after:text-xs after:absolute after:text-slate-400 after:line-through after:top-1/2 after:-translate-y-1/2 after:ml-4 ${fraunces.className}`}>
          $149.99
        </span>
        <button className="bg-emerald-700 text-white py-3 rounded-xl">
          Add to Cart.
        </button>
      </div>
    </div>
  )
}

function Page() {
  return (
    <div className={`w-full h-screen relative bg-orange-50 grid place-items-center py-24 md:py-60 ${montserrat.className}`}>
      <Card />
    </div>
  )
}

export default Page
