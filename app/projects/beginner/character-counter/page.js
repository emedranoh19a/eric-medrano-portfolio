"use client"
import { FormProvider, useForm } from "react-hook-form"
import StyleSetup from "./components/StyleSetup"
import ThemeProvider from "./components/ThemeProvider"
import Form from "./sections/Form"
import Navbar from "./sections/Navbar"
import Results from "./sections/Results"

export default function Page() {
    //State: 
    const methods = useForm({ mode: "onChange" })
    return <ThemeProvider>
        <StyleSetup>
            <Navbar />
            <FormProvider {...methods}>
                <Form />
                <Results />
            </FormProvider>
        </StyleSetup>
    </ThemeProvider>
}
