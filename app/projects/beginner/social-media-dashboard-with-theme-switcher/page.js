"use client"
import DarkTheme from "./ui/components/DarkTheme"
import Navbar from "./ui/components/Navbar"
import GeneralOverview from "./ui/sections/GeneralOverview"
import TodayOverview from "./ui/sections/TodayOverview"
import StyleSetup from "./ui/StyleSetup"

export default function Page() {
  return (
    <DarkTheme>
      <StyleSetup>
        <Navbar />
        <GeneralOverview />
        <TodayOverview />
      </StyleSetup>
    </DarkTheme>
  )
}
