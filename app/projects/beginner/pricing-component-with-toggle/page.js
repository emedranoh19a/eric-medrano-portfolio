"use client"
import Image from "next/image"
import { useState } from "react"
import PricingCard from "./components/PricingCard"
import StyleSetup from "./components/StyleSetup"
import Toggle from "./components/Toggle"
import { bgBottom, bgTop } from "./imageIndex"


const cardsData = [
    {
        title: "Basic",
        monthPrice: "19.99",
        yearPrice: "199.99",
        storage: "500 GB", //storage
        users: 2, //"users allowed"
        bandwidth: 3, //Send up to ---GB
        isPrimary: false,
        side: "left"
    },
    {
        title: "Professional",
        monthPrice: "24.99",
        yearPrice: "249.99",
        storage: "1 TB",
        users: 5,
        bandwidth: 10,
        isPrimary: true,
        side: "center"
    },
    {
        title: "Professional",
        monthPrice: "39.99",
        yearPrice: "399.99",
        storage: "2 TB",
        users: 10,
        bandwidth: 20,
        isPrimary: false,
        side: "right"
    },

]
export default function Page() {
    const [enabled, setEnabled] = useState(false)

    return (
        <StyleSetup>
            <div className="w-[470px] h-[760px] absolute -z-10 -top-[139px] left-1/2 lg:-top-[103px] lg:left-full lg:-translate-x-[370px]">
                <div className="w-full h-full relative z-0">
                    <div className="absolute inset-0 z-10" />
                    <Image src={bgTop} fill className="object-contain" alt="" />
                </div>
            </div>
            <div className="hidden lg:block w-[470px] h-[760px] absolute -z-10 top-[548px] -left-[120px]">
                <div className="w-full h-full relative z-0">
                    <div className="absolute inset-0 z-10" />
                    <Image src={bgBottom} fill className="object-contain" alt="" />
                </div>
            </div>
            <div className="w-full">
                <h1 className="preset-3 text-gray-650 text-center mb-10">Our pricing</h1>
                <Toggle enabled={enabled} setEnabled={setEnabled} />
                <div className={`flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 max-w-[1440px] mx-auto `}>
                    {cardsData.map((cardData, i) => <PricingCard enabled={enabled} key={i} {...cardData} />)}
                </div>

            </div>
        </StyleSetup>
    )
}
