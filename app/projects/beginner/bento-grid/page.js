import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] })

export default function Page() {
    return <div
        className={` h-screen w-full grid place-items-center ${dmSans.className}`}
        style={{
            "--primaryLight": "hsl(254, 88%, 90%)",
            "--primaryDark": "hsl(256, 67%, 59%)",

            "--accentLight": "hsl(31, 66%, 93%)",
            "--accentDark": "hsl(39, 100%, 71%)",

            "--white": "hsl(0, 0%, 100%)",
            "--black": "hsl(0, 0%, 7%)",
        }}
    >
        <div className="grid grid-cols-1 md:grid-cols-4"> Grid container </div>
    </div>
}
