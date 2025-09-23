"use client"
import { useBreakpoint } from "@/app/hooks/useBreakpoint"
import ApparelForm from "./components/ApparelForm"
import LadyDesktop from "./components/LadyDesktop"
import LadyMobile from "./components/LadyMobile"
import Logo from "./components/Logo"
import StyleSetup from "./components/StyleSetup"
import Text from "./components/Text"

export default function Page() {
  return (
    <StyleSetup>
      <div className="lg:pt-20 lg:flex lg:flex-col ">
        <Logo />
        <LadyMobile />
        <Content />
      </div>
      <LadyDesktop />

    </StyleSetup>
  )
}


function Content() {
  //State:
  const bp = useBreakpoint()
  //Derived:
  const titlePreset = bp === "base" ? 2 : 1
  const contentPreset = bp === "base" ? 4 : 3

  return <div className="mb-8 max-w-[311px] sm:max-w-[445px] mx-auto">
    <Text preset={titlePreset} as="h1" className="mt-16 mb-8  uppercase text-center lg:text-left">
      <Text preset={titlePreset} as="span" className="text-(--pink-400)">
        We&apos;re{" "}
      </Text><br />
      <Text preset={titlePreset} accent as="span">

        coming<br /> soon
      </Text>
    </Text>
    <Text className="text-(--pink-400) text-center lg:text-left mb-8" preset={contentPreset}>

      Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
    </Text>
    <ApparelForm />

  </div >
}
