import clsx from "clsx"
import { Commissioner } from "next/font/google"
import { ReactNode } from "react"
import "../theme.css"
const commissioner = Commissioner({ subsets: ["latin"], weight: ["400", "800"] })

export default function DesignSystem({ children }: { children: ReactNode }) {
    const containerStyles = clsx(
        "body px-6",
        "min-h-screen",
        commissioner.className)

    return <main className={containerStyles}>
        <div className="container mx-auto">
            {children}
        </div>
    </main>
}
