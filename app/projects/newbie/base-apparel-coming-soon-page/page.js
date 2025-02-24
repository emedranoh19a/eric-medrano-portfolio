"use client"
import { cn } from "@/app/utils/utils"
import clsx from "clsx"
import { Josefin_Sans } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
const josefinSans = Josefin_Sans({ subsets: ["latin"] })


function Background({ children }) {
  return (
    <>
      <div className="absolute h-full w-full hidden lg:block -z-10">
        <Image
          src="/base-apparel/images/bg-pattern-desktop.svg"
          fill
          objectFit="cover"
          alt=""
        />
      </div>
    </>
  )
}
function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="158" height="33">
      <defs>
        <linearGradient id="a" x1="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F8BFBF" />
          <stop offset="100%" stopColor="#EE8B8B" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#423A3A"
          fillRule="nonzero"
          d="M53.699 10.2c0 .571-.11 1.071-.33 1.5-.221.428-.537.786-.947 1.071-.411.286-.905.5-1.483.643a7.997 7.997 0 0 1-1.92.215h-5.947V1.126h5.804c1.286 0 2.295.292 3.028.875.732.584 1.098 1.37 1.098 2.358v.036c0 .357-.045.673-.134.946a2.846 2.846 0 0 1-.875 1.322 3.49 3.49 0 0 1-.634.429c.726.274 1.298.646 1.714 1.116.417.47.626 1.122.626 1.956v.035zm-3.43-5.34v-.037c0-.416-.154-.735-.464-.955-.31-.22-.756-.33-1.34-.33h-2.714V6.18h2.536c.607 0 1.09-.104 1.447-.313.357-.208.535-.544.535-1.009zm.697 5v-.036c0-.416-.16-.747-.482-.99-.322-.245-.84-.367-1.554-.367h-3.18v2.75h3.27c.606 0 1.083-.11 1.428-.33.345-.22.518-.563.518-1.027zm21.945 3.769h-2.876l-1.143-2.804h-5.287l-1.143 2.804h-2.804l5.358-12.592h2.536l5.359 12.592zM67.91 8.396L66.249 4.34l-1.661 4.055h3.322zm20.73 1.536c0 .619-.113 1.17-.34 1.652a3.393 3.393 0 0 1-.946 1.214 4.277 4.277 0 0 1-1.447.75 6.281 6.281 0 0 1-1.858.26 8.28 8.28 0 0 1-2.804-.492 7.422 7.422 0 0 1-2.5-1.51L80.37 9.86a8.16 8.16 0 0 0 1.76 1.107c.6.274 1.259.411 1.973.411.572 0 1.015-.104 1.33-.312a.984.984 0 0 0 .474-.867v-.035c0-.179-.033-.337-.098-.474-.066-.137-.19-.265-.375-.384a3.928 3.928 0 0 0-.768-.357 13.29 13.29 0 0 0-1.277-.375 15.566 15.566 0 0 1-1.715-.518 4.83 4.83 0 0 1-1.304-.705 2.853 2.853 0 0 1-.83-1.045c-.197-.417-.295-.935-.295-1.554v-.036c0-.571.107-1.086.322-1.545.214-.458.514-.854.901-1.187a4.06 4.06 0 0 1 1.385-.768A5.564 5.564 0 0 1 83.62.948c.917 0 1.76.137 2.527.41a7.326 7.326 0 0 1 2.117 1.18l-1.43 2.071a9.057 9.057 0 0 0-1.642-.902 4.2 4.2 0 0 0-1.608-.33c-.536 0-.938.104-1.205.312-.268.209-.402.468-.402.777v.036c0 .202.038.378.116.527.077.149.217.283.42.402.202.119.479.232.83.339.351.107.795.232 1.33.375.632.167 1.194.354 1.688.563.495.208.911.458 1.25.75.34.292.596.634.769 1.027.172.393.259.863.259 1.41v.037zm16.76 3.331h-9.52V.761h9.43v2.447h-6.698v2.536h5.894V8.19h-5.894v2.625h6.787v2.447zm-50.148 19h-2.875l-1.143-2.804h-5.287l-1.143 2.804H42l5.358-12.592h2.536l5.358 12.592zm-5-5.233l-1.661-4.054-1.662 4.054h3.323zm21.587-2.911c0 .726-.131 1.363-.393 1.91a3.9 3.9 0 0 1-1.08 1.376c-.459.37-.995.646-1.608.83a6.816 6.816 0 0 1-1.974.277h-2.09v3.751h-2.75V19.761h5.108c.75 0 1.42.104 2.01.312.589.209 1.09.503 1.5.884.41.381.726.837.946 1.367.22.53.33 1.116.33 1.759v.036zm-2.786.053v-.035c0-.62-.2-1.09-.599-1.411-.399-.322-.943-.483-1.634-.483h-2.125v3.822h2.179c.69 0 1.226-.181 1.607-.544.381-.363.572-.813.572-1.349zm19.48-.053c0 .726-.132 1.363-.393 1.91a3.9 3.9 0 0 1-1.081 1.376c-.458.37-.994.646-1.607.83a6.816 6.816 0 0 1-1.974.277h-2.09v3.751h-2.75V19.761h5.108c.75 0 1.42.104 2.01.312.589.209 1.089.503 1.5.884.41.381.726.837.946 1.367.22.53.33 1.116.33 1.759v.036zm-2.787.053v-.035c0-.62-.2-1.09-.598-1.411-.399-.322-.944-.483-1.634-.483h-2.126v3.822h2.18c.69 0 1.226-.181 1.607-.544.38-.363.571-.813.571-1.349zm21.766 8.091h-2.875l-1.143-2.804h-5.287l-1.143 2.804H94.26l5.358-12.592h2.536l5.358 12.592zm-5-5.233l-1.662-4.054-1.66 4.054h3.321zm22.497 5.233h-3.214l-2.68-4h-2.16v4h-2.751V19.761h5.715c1.489 0 2.647.363 3.474 1.09.828.726 1.241 1.738 1.241 3.036v.035c0 1.012-.247 1.837-.74 2.474a4.295 4.295 0 0 1-1.939 1.402l3.054 4.465zm-3.16-8.198v-.036c0-.595-.191-1.041-.572-1.34-.381-.297-.911-.446-1.59-.446h-2.733v3.59h2.787c.678 0 1.2-.16 1.562-.482.364-.321.545-.75.545-1.286zm19.55 8.198h-9.52V19.761h9.431v2.447h-6.698v2.536h5.894v2.447h-5.894v2.625h6.787v2.447zm16.194 0h-8.984V19.761h2.75v10.002h6.234v2.5z"
        />
        <path
          fill="url(#a)"
          d="M15.5 32.088c-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5 8.56 0 15.5 6.94 15.5 15.5 0 8.56-6.94 15.5-15.5 15.5zm0-3.5c6.904 0 12.5-5.373 12.5-12s-5.596-12-12.5-12S3 9.961 3 16.588s5.596 12 12.5 12z"
          transform="translate(0 -.088)"
        />
      </g>
    </svg>
  )
}
function Content() {
  return (
    <div className={`${josefinSans.className}`}>
      <h1 className=" text-4xl px-10 pt-8 pb-5 text-center uppercase tracking-[10px]">
        <span className="text-red-950/25 font-light">We&apos;re</span>
        <br /> coming <br />
        soon
      </h1>
      <p className="px-10 mb-5 text-sm text-center text-red-950/40">
        Hello fellow shoppers! We&apos;re currently building out new fashion
        store. Add your email below to stay up-to-date with announcements and
        our launch deals.
      </p>
    </div>
  )
}
function LadyHero() {
  const baseStyles = clsx(
    "relative h-60 sm:h-screen sm:w-full",
    "sm:col-start-2 sm:row-start-1 sm:row-end-3",
  )
  const mobileStyles = cn(baseStyles, "sm:hidden")
  const desktopStyles = cn(baseStyles, "hidden sm:block")
  return <>
    <Image alt="Stylish lady with makeup" fill objectFit="cover" src="/projects/newbie/base-apparel-coming-soon-page/images/hero-mobile.jpg" className={mobileStyles} />
    <Image alt="Stylish lady with makeup" fill objectFit="contain" src="/projects/newbie/base-apparel-coming-soon-page/images/hero-desktop.jpg" className={desktopStyles} />
  </>
}

function Input() {
  const [status, setStatus] = useState(null)
  const [error, setError] = useState("")
  const inputStyles = clsx(
    "w-full h-12 py-4 px-6",
    "bg-transparent text-red-950/40",
    "placeholder:text-red-950/20 placeholder:text-sm",
    "border border-red-950/40",
    "rounded-full"
  )

  const handleFormSubmit = async (event) => {
    // event.preventDefault()
    // try {
    //   setStatus("pending")
    //   setError(null)
    //   const myForm = event.target
    //   const formData = new FormData(myForm)
    //   const res = await fetch("/__forms.html", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    //   })
    //   if (res.status === 200) {
    //     setStatus("ok")
    //   } else {
    //     setStatus("error")
    //     setError(`${res.status} ${res.statusText}`)
    //     console.log("error")
    //   }
    // } catch (e) {
    //   setStatus("error")
    //   setError(`${e}`)
    //   console.log(e)
    // }
    console.log("form submitted")
  }

  //Review added email "id" and "name" props
  const [value, setValue] = useState("")
  return (
    <div className=" w-[80%] mx-auto relative h-fit">
      <form
        name="contact"
        onSubmit={handleFormSubmit}
      // action="/email-success"
      // method="POST"
      // data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* <input form-name="contact" hidden /> */}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          className={inputStyles}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          value={value}
        />
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="absolute shadow-xl shadow-rose-400/25 w-20 right-0 h-full bg-gradient-to-r from-rose-200 to-rose-300 rounded-full cursor-pointer p-3"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="M1 1l8.836 8.836L1 18.671"
              />
            </svg>
          </div>
        </button>
      </form>
    </div>
  )
}

function Page() {

  return (
    <div className="w-full h-screen bg-rose-50 mx-auto grid grid-cols-1 ">
      <div className="relative w-full h-full max-w-80 sm:max-w-none mx-auto grid grid-cols-1 sm:grid-cols-2 grid-rows-[repeat(2,min-content)_auto] sm:grid-rows-[1fr_10fr]">
        <Background />
        <div className="h-fit w-20 p-6 ml-4 relative">
          <Image
            src="/projects/newbie/base-apparel-coming-soon-page/images/logo.svg"
            fill
            objectFit="contain"
            objectPosition="right"
            alt="logo"
          />
        </div>
        <LadyHero />
        <div className="sm:col-start-1 sm:row-start-2 place-self-center">
          <div className="max-w-80 place-self-center">
            <Content />
            <Input />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
