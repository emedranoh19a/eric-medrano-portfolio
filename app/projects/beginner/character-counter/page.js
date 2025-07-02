"use client"
import { FormProvider, useForm } from "react-hook-form"
import StyleSetup from "./components/StyleSetup"
import ThemeProvider from "./components/ThemeProvider"
import Form from "./sections/Form"
import Navbar from "./sections/Navbar"
import Results from "./sections/Results"
//TODO: - Analyze the character, word, and sentence counts for their text
//TODO: - Exclude/Include spaces in their character count
//TODO: - Set a character limit
//TODO: - Receive a warning message if their text exceeds their character limit
//TODO: - See the approximate reading time of their text
//TODO: - Analyze the letter density of their text
//TODO: - Select their color theme
//TODO: - View the optimal layout for the interface depending on their device's screen size
//TODO: - See hover and focus states for all interactive elements on the page


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
