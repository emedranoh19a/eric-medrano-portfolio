"use client"
import clsx from "clsx"
import { Manrope } from "next/font/google"
import Image from "next/image"
import { useEffect, useState } from "react"
import { dividerDesktop, iconDice } from "./imageIndex"
const manrope = Manrope({ subsets: ["latin"], weights: ["800"] })

function ChallengeContainer({ children }) {
    return <div style={{
        "--lightCyan": "hsl(193, 38%, 86%)",
        "--neonGreen": "hsl(150, 100%, 66%)",
        "--grayishBlue": "hsl(217, 19%, 38%)",
        "--darkGrayishBlue": "hsl(217, 19%, 24%)",
        "--darkBlue": "hsl(218, 23%, 16%)"
    }}
        className={`${manrope.className} w-full h-screen bg-[var(--darkBlue)] grid place-items-center`}
    >
        {children}
    </div>
}
export default function Page() {
    //State: 
    const [adviceId, setAdviceId] = useState("...")
    const [advice, setAdvice] = useState("loading...")
    useEffect(handleAdvice, [])
    //Handlers:
    function handleAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                //set the data here
                setAdviceId(data.slip.id)
                setAdvice(data.slip.advice)
            })
    }
    //Style:
    const cardContainer = clsx(
        "relative max-w-sm px-6 py-8",
        "bg-[var(--darkGrayishBlue)] text-center",
        "rounded-xl",
        "shadow-2xl")
    const spanStyles = clsx("text-[var(--neonGreen)] uppercase text-xs font-bold tracking-widest mb-5 block")
    const adviceStyles = clsx("text-[var(--lightCyan)] text-2xl font-bold")
    const imageContainer = clsx("relative h-4 my-5")
    const imageStyles = clsx("object-contain ")
    const buttonStyles = clsx(
        "absolute bg-[var(--neonGreen)]",
        "w-12 h-12 rounded-full",
        "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", "grid place-items-center",
        "hover:shadow-2xl hover:shadow-[var(--neonGreen)]  transition-all duration-300"
    )
    return <ChallengeContainer>

        {/* Card */}
        <div className={cardContainer}>
            <span className={spanStyles}>Advice #{adviceId}</span>
            <p className={adviceStyles}>“{advice}”</p>
            <div className={imageContainer}>

                <Image
                    src={dividerDesktop}
                    alt=""
                    fill
                    className={imageStyles}
                />
            </div>
            {/* Image of the divisor */}
            <button
                className={buttonStyles}
                onClick={handleAdvice}
            >

                <Image height={20} width={20} src={iconDice} alt="" />
            </button>
        </div>
    </ChallengeContainer>
}

