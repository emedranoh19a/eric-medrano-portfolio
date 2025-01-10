import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] })
export default function Page() {
    return <VariablesSetup>
        <div>
            This is the age calculator
        </div>
    </VariablesSetup>
}
//font size: 32px.
function VariablesSetup({ children }) {
    return <div

        className={`bg-red-500 ${poppins.className} h-screen w-full grid place-items-center`}
        style={{
            "--purple": "hsl(259, 100%, 65%)",
            "--light-red": "hsl(0, 100%, 67%)",
            "--white:": "hsl(0, 0%, 100%)",
            "--off-white": "hsl(0, 0%, 94%)",
            "--light-grey": "hsl(0, 0%, 86%)",
            "--smokey-grey": "hsl(0, 1%, 44%)",
            "--off-black": "hsl(0, 0%, 8%)",

        }}>{children}</div>
}
