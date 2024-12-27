import clsx from "clsx";
import Image from "next/image";

function Card() {
  const cardStyles = clsx(
    "absolute bg-white inset-y-16 inset-x-6 rounded-xl",
    "md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-h-96 md:w-[700px]",
    "flex flex-col md:flex-row",
    "overflow-hidden border-xl shadow-xl shadow-orange-200/30"
  );
  return (
    <div className={cardStyles}>
      <div className="min-h-2/5 h-full md:h-full w-full md:basis-1/2 relative">
        <Image
          src="/product-preview-card/images/image-product-desktop.jpg"
          fill
          objectFit="cover"
          className="bg-bottom"
          alt=""
        />
      </div>
      <div className="md:w-1/2 p-4 h-full flex flex-col gap-3 justify-between">
        <p className="uppercase text-slate-400 text-xs tracking-widest leading-4">
          Perfume
        </p>
        <h2 className="text-2xl leading-wider font-bold leading-6">
          Gabrielle Essence
          <br /> Eau De Parfum
        </h2>
        <p className="text-sm text-slate-400 leading-70">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <span className="relative text-green-700 text-2xl font-bold after:content-['$169.99'] after:text-xs after:absolute after:text-slate-400 after:line-through after:top-1/2 after:-translate-y-1/2 after:ml-4">
          $149.99
        </span>
        <button className="bg-emerald-700 text-white py-3 rounded-xl">
          Add to Cart.
        </button>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="w-screen h-screen relative bg-orange-50">
      <Card />
    </div>
  );
}

export default Page;
