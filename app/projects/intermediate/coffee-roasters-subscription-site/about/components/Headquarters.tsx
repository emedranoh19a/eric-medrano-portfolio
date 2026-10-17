import Image from "next/image"
import { aboutIllustrationAustralia, aboutIllustrationCanada, aboutIllustrationUK } from "../../assets/assetIndex"

const headquarters = [
    {
        country: "United Kingdom",
        list: ["68  Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"],
        icon: aboutIllustrationUK
    },
    {
        country: "Canada",
        list: ["1528  Eglinton Avenue", "Toronto", "Ontario M4P 1A6", "+1 416 485 2997"],
        icon: aboutIllustrationCanada
    },
    {
        country: "Australia",
        list: ["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"],
        icon: aboutIllustrationAustralia
    }
]
export default function Headquarters() {
    return <section className="xl:pl-21.25 mb-30 sm:mb-36 lg:mb-42">
        <h2 className="mb-18 heading-4 text-grey ">Our headquarters</h2>
        <ul className="flex flex-col gap-20 sm:gap-2.5 lg:gap-23.75 sm:flex-row justify-start">
            {headquarters.map((headquarter, i) => <Headquarter {...headquarter} key={i} />)}
        </ul>
    </section>
}

function Headquarter({ country, list, icon }) {
    return <li className="flex flex-col items-center sm:items-start">
        <div className="w-12.5 aspect-square  mb-12 relative">
            <Image src={icon} fill className="object-contain" alt={country} />
        </div>
        <h3 className="heading-4 text-[28px] sm:heading-4 lg:heading-3 mb-5.25 lg:mb-6">{country}</h3>
        <ul className="body sm:w-55.75 lg:w-71.25">
            {list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    </li>
}
