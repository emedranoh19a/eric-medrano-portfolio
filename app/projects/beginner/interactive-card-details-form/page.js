"use client"
//_The challenge: 
// Users should be able to:

import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import ColorBackground from "./components/ColorBackground"
import CreditCard from "./components/CreditCard"
import Form from "./components/Form/Form"
import Success from "./components/Form/Success"
import StylesSetup from "./components/StylesSetup"

//TODO: - Receive error messages when the form is submitted if the card number is in the wrong format

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const methods = useForm({ mode: "onTouched" })
    return <StylesSetup>
        <ColorBackground />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-[49px] sm:gap-[69px] lg:gap-[127px] w-fit h-fit mx-auto">
            <FormProvider {...{ ...methods, setIsSubmitted }}>
                <Cards />
                {!isSubmitted ? <Form /> : <Success />}
            </FormProvider>
        </div>
    </StylesSetup>
}

function Cards() {
    return <div className="relative z-0 w-[342px] h-[250px] sm:w-[543px] sm:h-[384px] lg:h-[541px] lg:w-[522px]">
        <CreditCard className="absolute top-0 right-0" flipped />
        <CreditCard className="absolute bottom-0 left-0" />
    </div>
}
