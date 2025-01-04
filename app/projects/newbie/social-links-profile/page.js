import Image from "next/image"


function SocialLink({ text }) {
  return (
    <div className="bg-stone-600 rounded-lg text-white h-full py-4 hover:cursor-pointer hover:bg-lime-400 hover:text-black transition-all">
      <p className="leading-none block">{text}</p>
    </div>
  )
}
const socialLinks = [
  "GitHub",
  "Frontent Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
]
function Page() {

  return (
    <div className="bg-stone-800 w-full min-h-screen grid place-items-center text-center">
      <div className="bg-stone-700 w-80 md:w-96 h-fit flex flex-col items-center p-10 gap-5 rounded-lg">
        <div className="relative w-20 h-20 rounded-full">
          <Image
            className="w-20 bg-gray-300 h-20 rounded-full"
            fill
            objectFit="cover"
            src="/projects/newbie/social-links-profile/images/avatar-jessica.jpeg"
            alt="Avatar of Jessica"
          />
        </div>
        <div className="flex flex-col gap-0">
          <h1 className="text-white text-2xl tracking-normal font-semibold">
            Jessica Randall
          </h1>
          <h2 className="text-lime-300 text-xs font-bold">
            London, United Kingdom
          </h2>
        </div>
        <p className="text-white text-sm tracking-tight">
          &quot;Front-end developer and avid reader.&quot;
        </p>
        <div className=" w-full h-80 flex flex-col justify-center gap-5">
          {socialLinks.map((socialLink, index) => (
            <SocialLink text={socialLink} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
