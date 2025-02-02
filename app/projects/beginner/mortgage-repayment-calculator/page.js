"use client"
import clsx from "clsx"
import { Plus_Jakarta_Sans } from "next/font/google"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import Calculator from "./components/Calculator"
import Results from "./components/Results"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "700"] })
export default function Page() {
    //State:
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [results, setResults] = useState({ monthly: 0, total: 0 })
    const methods = useForm({ mode: "onChange" })
    const { handleSubmit } = methods
    function onSubmit(data) {
        // console.log(data)
        const { amount, term, rate, type } = data

        let monthlyRepayment, totalRepayment

        const principal = Number(amount)
        const years = Number(term)
        const annualRate = Number(rate) / 100
        const monthlyRate = annualRate / 12
        const months = years * 12

        if (type === "1") {
            // **Repayment Mortgage Formula**
            monthlyRepayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
            totalRepayment = monthlyRepayment * months
        } else {
            // console.log("Interest-Only Mortgage")
            // **Interest-Only Mortgage Formula**
            monthlyRepayment = principal * (annualRate / 12)
            totalRepayment = (monthlyRepayment * months) + principal
        }

        setResults({ monthly: monthlyRepayment.toFixed(2), total: totalRepayment.toFixed(2) })
        setIsSubmitted(true)
    }
    //Style:
    const containerStyles = clsx(
        "bg-white rounded-xl overflow-hidden shadow-2xl",
        "w-full h-full md:w-fit md:h-fit flex flex-col md:flex-row",
        "max-w-xs md:max-w-2xl")

    return <StyleSetup>
        <FormProvider {...{ ...methods, onSubmit, setResults }}>
            <form onSubmit={handleSubmit(onSubmit)} className={containerStyles}>
                <Calculator />
                <Results isSubmitted={isSubmitted} results={results} />
            </form>
        </FormProvider>
    </StyleSetup>
}


// Interest-Only Mortgage
// Loan: $200,000, Term: 25 years, Rate: 5%

// Monthly Interest: $833.33
// Total Repayment: $450,000
// Loan: $500,000, Term: 15 years, Rate: 2.8%

// Monthly Interest: $1,166.67
// Total Repayment: $710,000


//font size of 16px
function StyleSetup({ children }) {
    return <div className={`w-full bg-slate-100 min-h-screen h-fit grid place-items-center bg-slate-100 ${plusJakartaSans.className}`} style={{
        "--lime": "hsl(61, 70%, 52%)",
        "--red": "hsl(4, 69%, 50%)",
        //tailwind white
        //slate: 100, 300, 500, 700, 900
    }}>{children}</div>
}
