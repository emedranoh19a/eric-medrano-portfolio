"use client"
import { useBreakpoint } from "@/app/hooks/useBreakpoint"
import { cn } from "@/app/utils/utils"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import Logo from "./components/Logo"
import StyleSetup from "./components/StyleSetup"
import Ticket from "./components/Ticket"
import TicketForm from "./components/TicketForm"

export default function Page() {

    //TODO: - Receive form validation messages if the avatar upload is too big or the wrong image format
    //TODO: - Complete the form only using their keyboard
    //TODO: - Have inputs, form field hints, and error messages announced on their screen reader
    const methods = useForm({ mode: "onTouched" })
    const [ticketData, setTicketData] = useState({ image: "", name: "", email: "", githubUser: "" })
    const [isTicketGenerated, setIsTicketGenerated] = useState(false)
    const [preview, setPreview] = useState(null)
    //Note: With TailwindCSS layers we may escape breakpoint hooks.
    return <StyleSetup>
        <FormProvider {...{ ...methods, setIsTicketGenerated, ticketData, setTicketData, preview, setPreview }}>
            <div className="w-fit h-fit mx-auto mb-10 sm:mb-16">
                <Logo full />
            </div>
            {!isTicketGenerated ? <>
                <Content />
                <TicketForm />
            </> :
                <Ticket />
            }
        </FormProvider>
    </StyleSetup>
}

function Content() {
    const bp = useBreakpoint()

    //Style:
    const titleStyles = cn(
        "mb-5 text-[var(--neutral-0)] text-center",
        bp === "base" || bp === "sm" ? "preset-1" : "preset-1-desktop")
    const paragraphStyles = cn(
        "mb-5 text-[var(--neutral-300)] text-center",
        bp === "base" || bp === "sm" ? "preset-4" : "preset-4-desktop")

    return <div className="mx-auto w-full max-w-[890px]">
        <h1 className={titleStyles}>
            Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className={paragraphStyles}>
            Secure your spot at next year&apos;s biggest coding conference.
        </p>
    </div>
}
