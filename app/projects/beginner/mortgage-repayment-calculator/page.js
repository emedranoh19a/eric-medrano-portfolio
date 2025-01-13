import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "700"] })
export default function Page() {
    return <StyleSetup>Mortage repayment</StyleSetup>
}
//font size of 16px
function StyleSetup({ children }) {
    return <div className={`w-full min-h-screen h-fit bg-sky-500/20 ${plusJakartaSans.className}`} style={{
        "--lime": "hsl(61, 70%, 52%)",
        "--red": "hsl(4, 69 %, 50 %)",
        //tailwind white
        //slate: 100, 300, 500, 700, 900
    }}>{children}</div>
}
