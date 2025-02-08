"use client"
import { Red_Hat_Text } from "next/font/google"
import Cart from "./components/Cart"
import DessertCatalogue from "./components/DessertCatalogue"
const redHatText = Red_Hat_Text({ subsets: ["latin"] })

export default function Page() {
    return <StyleTokensSetup>
        <div className="p-10 w-full h-fit max-w-md lg:max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 h-full">
                <DessertCatalogue />
                <Cart />

            </div>
        </div>
        {/* <div className="bg-red-500 h-20 w-full block" /> */}
    </StyleTokensSetup>
}

function StyleTokensSetup({ children }) {
    return <div
        className={`w-full text-[var(--rose-900)] min-h-screen h-fit lg:pb-60 bg-[var(--rose-50)] grid place-items-center ${redHatText.className}`}
        style={{
            "--red": "hsl(14,86%,42%)",
            "--green": "hsl(159, 69%, 38%)",
            "--rose-50": "hsl(20, 50%, 98%)",
            "--rose-100": "hsl(13, 31%, 94%)",
            "--rose-300": "hsl(14, 25%, 72%)",
            "--rose-400": "hsl(7, 20%, 60%)",
            "--rose-500": "hsl(12, 20%, 44%)",
            "--rose-900": "hsl(14, 65%, 9%)"
        }}>
        {children}
    </div>
}
//TODO: Add bottom padding for correction. or any kind of space.
