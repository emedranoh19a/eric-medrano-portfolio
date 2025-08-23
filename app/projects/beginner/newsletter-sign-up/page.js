"use client"
import { cn } from "@/app/utils/utils"
import Image from "next/image"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import Card from "./components/Card"
import Button from "./components/form/Button"
import TextInput from "./components/form/TextInput"
import StyleSetup from "./components/StyleSetup"
import Text from "./components/Text"
import { iconList, iconSuccess, illustrationSignUpDesktop, illustrationSignUpMobile, illustrationSignUpTablet } from "./imageIndex"

export default function Page() {
    const [submitted, setSubmitted] = useState(false)
    return <StyleSetup>
        {!submitted ? <Form onSubmit={() => setSubmitted(true)} /> :
            <Success onReset={() => setSubmitted(false)} />}
    </StyleSetup>
}
function Success({ onReset }) {
    return <Card className="flex flex-col justify-between gap-8 pt-[149px] sm:p-16">
        <div className="flex flex-col gap-8 max-w-[327px] sm:max-w-[376px]">
            <Image src={iconSuccess} width={64} height={64} alt="" />
            <Text preset={1}>Thanks for subscribing!</Text>
            <Text preset={2}>A confirmation email has been sent to
                <span className="font-bold">
                    ash@loremcompany.com.
                </span>
                Please open it and click the button inside to confirm your subscription</Text>
        </div>
        <Button text="Dismiss message" className="w-full" onClick={onReset} />
    </Card>
}
const items = ["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"]

function Form({ onSubmit }) {
    return <Card as="div" className="text-[var(--blue-800)] flex flex-col lg:items-center lg:flex-row-reverse gap-10 lg:gap-16 pt-0 sm:pt-6">
        <FormImage />
        <FormContent onSubmit={onSubmit} />
    </Card>
}
function FormImage() {
    const containerCn = cn(" h-[284px] sm:w-[528px] sm:h-[358px] lg:w-[400px] lg:h-[593px] rounded-b-3xl sm:rounded-3xl overflow-hidden",
        //Full bleed styles
        "w-screen relative left-1/2 -ml-[50vw] sm:left-0 sm:ml-0")
    return <div className={containerCn}>
        <Image src={illustrationSignUpMobile} alt="" fill className="object-cover sm:hidden" />
        <Image src={illustrationSignUpTablet} alt="" fill className="object-cover hidden sm:block lg:hidden" />
        <Image src={illustrationSignUpDesktop} alt="" fill className="object-coverhidden hidden lg:block" />
    </div>
}
function FormContent({ onSubmit: onSubmitProp }) {
    const methods = useForm({ mode: "onChange" })
    const { handleSubmit, formState: { isValid } } = methods
    function onSubmit() {
        onSubmitProp()
    }
    return <FormProvider {...methods}>
        <form className="text-[var(--blue-800)] flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
                <Text as="h1" preset={1} >
                    Stay updated!
                </Text>
                <Text preset={2}>
                    Join 60,000+ product managers receiving monthly updates on:
                </Text>
                <ul className="flex flex-col gap-2">
                    {items.map((item, i) => <BulletPoint text={item} key={i} />)}
                </ul>
            </div>
            <div className="flex flex-col gap-6 sm:gap-4 lg:gap-6">
                <TextInput
                    fieldName="email"
                    validations={{
                        required: "Insert an email",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                            message: "It seems this is not an email"
                        }
                    }}
                    className="w-full"
                    label="Email address"
                    placeholder="email@company.com"
                />
                <Button type="submit" text="Subscribe to monthly newsletter" className="w-full" disabled={!isValid} />
            </div>
        </form>
    </FormProvider>
}
function BulletPoint({ text }) {
    return <li className="flex w-full gap-4 items-start">
        <Image src={iconList} height={21} width={21} alt="" />
        <Text preset={2}>{text}</Text >
    </li>
}
