import Image from "next/image"
function IconShare() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
      <path
        fill="#6E8098"
        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
      />
    </svg>
  )
}
function CardHeader() {
  return (
    <div className="relative h-64 md:h-72 w-full brightness-110">
      <Image
        src="/article-preview/images/drawers.jpg"
        fill
        objectFit="cover"
        alt=""
      />
    </div>
  )
}
function CardBody() {
  return (
    <>
      <h6 className="font-semibold text-[15px] text-slate-600 tracking-wide mb-3">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h6>
      <p className="font-light text-slate-500 font-sm">
        Ever been in a room and felt like something was missin? Perhaps it felt
        slightly bare and uninviting. I&apos;ve got some simple tips to help you
        make any room feel complete.
      </p>
    </>
  )
}
function CardFooter() {
  //TODO share menu with some code that actually works
  //TODO set an open state and show amazingly the options.
  return (
    <div className="mt-6 w-full flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="relative overflow-hidden w-10 h-10 rounded-full">
          <Image
            src="/article-preview/images/avatar-michelle.jpg"
            alt=""
            fill
            objectFit="cover"
          />
        </div>
        <div>
          <span className="block text-slate-500 text-sm font-bold">
            Michelle Appleton
          </span>
          <span className="block text-slate-400/90 font-sm font-light">
            28 Jun 2020
          </span>
        </div>
      </div>
      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
        <IconShare />
      </div>
    </div>
  )
}
function Card() {
  return (
    <div className="bg-white shadow-xl shadow-slate-300/70 h-fit w-fit max-w-[300px] md:max-w-[700px] flex flex-col md:flex-row gap-1 justify-between overflow-hidden rounded-lg">
      <CardHeader />
      <div className="p-8">
        <CardBody />
        <CardFooter />
      </div>
    </div>
  )
}
function Page() {
  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="relative container px-8 mx-auto grid w-full h-full place-items-center">
        <Card />
      </div>
    </div>
  )
}

export default Page
