import { cn } from "@/app/utils/utils"
import { Karla } from "next/font/google"
const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] })
export default function Page() {
    return <div
        className="px-8 pt-20 pb-16 grid place-items-center min-h-screen w-full bg-(--background)"
        style={{
            "--background": "#e6eff5",
            "--white": "#ffffff",
            "--teal": "#2ab3b1",
            "--lime": "#c0df33",
            "--gray": "#9aa7be",

        }}>
        <div className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 rounded-2xl ${karla.className}`}>

            <TopItem />
            <MiddleItem />
            <BottomItem />

        </div>
    </div>
}
function Subtitle({ children, className }) {
    const styles = cn("mb-4 lg:mb-2.5 font-bold text-(--lime) text-[15px] lg:text-[18px] tracking-[-0.19px] lg:tracking-[-0.22px]", className)
    return <h2 className={styles}>{children}</h2>
}
function Text({ children, className }) {
    const styles = cn("max-w-[263px] lg:max-w-[555px] text-(--gray) font-normal text-[14px] lg:text-[16px] tracking-[-0.17px] tracking-[-0.2px]", className)
    return <p className={styles}>{children}</p>
}
function TopItem() {
    return <div className="bg-(--white) lg:col-span-2 px-6 lg:px-10 pt-7 lg:pt-10 pb-8 lg:pb-10">
        <h1 className="mb-6 font-bold text-[20px] lg:text-[24px] text-(--teal) tracking-[-0.25px] lg:tracking-[-0.3px]">
            Join our community
        </h1>

        <Subtitle>
            30-day, hassle-free money back guarantee
        </Subtitle>

        <Text>
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
        </Text>
    </div>
}

function MiddleItem() {
    return <div className="bg-(--teal) p-6 lg:p-10">
        <Subtitle className="text-(--white)">
            Monthly Subscription
        </Subtitle>

        <div className="flex justify-start items-center">
            <span className="mr-[5px] font-bold text-(--white) text-[32px] tracking-[-0.4px]">
                $29 {" "}
            </span>
            <span className="font-normal text-[16px] leading-[26%] opacity-70 tracking-[-0.2px] text-(--white)">
                per month
            </span>
        </div>

        <Text className="text-(--white) text-[16px] mb-6">
            Full access for less than $1 a day
        </Text>

        <button className="cursor-pointer py-4 w-full bg-(--lime) text-(--white) text-center shadow-lg rounded-lg">
            Sign Up
        </button>
    </div>
}

function BottomItem() {
    return <div className="bg-(--teal) z-0 relative p-6 lg:p-10">
        <div className="absolute w-full h-full bg-(--white) opacity-10 -z-10 top-0 left-0" />
        <Subtitle className="text-white">
            Why Us
        </Subtitle>

        <Text className="text-white">

            Tutorials by industry experts<br />


            Peer &amp; expert code review<br />


            Coding exercises<br />


            Access to our GitHub repos<br />


            Community forum
            <br />

            Flashcard decks<br />


            New videos every week<br />

        </Text></div>
}
