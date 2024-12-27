import clsx from "clsx";
import Image from "next/image";

function Card() {
  return (
    <div className="bg-white w-80 h-fit overflow-hidden rounded-[20px] transition-all">
      <div className="relative h-40 w-full opacity-90">
        <Image
          src="/order-summary/images/illustration-hero.svg"
          fill
          objectFit="cover"
          alt="Order summary hero image"
        />
      </div>
      <div className="p-6 text-center flex flex-col items-center justify-center gap-4">
        <h3 className="text-slate-900 font-bold text-xl">Order Summary</h3>
        <p className="text-slate-500 text-sm w-56">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex p-3 justify-between w-full items-center bg-indigo-50/60 rounded-xl">
          <div className="flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                <path
                  fill="#717FA6"
                  fill-rule="nonzero"
                  d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                />
              </g>
            </svg>
            <div className="flex flex-col">
              <div className="text-slate-800 text-md font-bold">
                Annual Plan
              </div>
              <div className="text-slate-400 text-sm font-semibold">
                $59.99/year
              </div>
            </div>
          </div>
          <div className="text-indigo-600 text-sm"> Change</div>
        </div>
        <button
          className="bg-indigo-600 hover:bg-indigo-200 cursor-pointer transition-all shadow-lg shadow-indigo-500/40
         text-white py-2 w-full rounded-xl"
        >
          Procceed to Payment
        </button>
        <button className="text-slate-500 font-bold text-sm">
          Cancel Order
        </button>
      </div>
    </div>
  );
}
function page() {
  // .container {
  //   position: relative;
  //   background: #2c3e50;
  //   height: 50vh;
  // }

  // .wave {
  //   position: absolute;
  //   height: 130px;
  //   width: 100%;
  //   background: #2c3e50;
  //   bottom: 0;
  // }

  // .wave::after, .wave::after {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   border-radius: 100% 50%;
  // }

  // .wave::before {
  //   width: 55%;
  //   height: 109%;
  //   background-color: #fff;
  //   right: -1.5%;
  //   top: 60%;
  // }
  // .wave::after {
  //   width: 55%;
  //   height: 100%;
  //   background-color: #2c3e50;
  //   left: -1.5%;
  //   top: 40%;
  // }
  const backgroundBase = clsx(
    "relative h-screen w-screen bg-indigo-100 flex items-center justify-center -z-50",
    "before:absolute before:bg-indigo-50 before:w-full before:h-1/2 before:bottom-0 before:-z-40",
    // "after:absolute after:bg-indigo-100 after:w-1/2 after:aspect-square after:top-1/2 after:scale-y-50 after:right-40 after:-translate-y-1/2 after:left-0 after:rounded-b-full after:-z-40",
    ""
  );
  const waveStyles = clsx(
    "",
    "",
    "before:absolute before:bg-indigo-100 before:w-1/2 before:aspect-square before:top-1/2 before:scale-y-50 before:right-40 before:-translate-y-1/2 before:left-0 before:rounded-b-full before:-z-40",
    "after:absolute after:bg-indigo-50 after:w-1/2 after:aspect-square after:bottom-1/2 after:translate-y-1/2 after:scale-y-50 after:right-0  after:right-0 after:rounded-t-full after:-z-30"
  );
  return (
    <div className="h-screen w-screen overflow-hidden">
      <section className={backgroundBase}>
        <div className={waveStyles}></div>
        <Card />
      </section>
    </div>
  );
}

export default page;
