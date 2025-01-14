"use client"
import { cn } from "@/app/utils/utils"
import { Poppins } from "next/font/google"
import { useEffect, useState } from "react"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] })
export default function Page() {
    //purple, light-red, white, off-white, light-grey, smokey-grey, off-black
    //State: 
    const [displayResults, setDisplayResults] = useState({ years: "--", months: "--", days: "--" })

    const formMethods = useForm({ mode: "onChange" })

    return <VariablesSetup>
        <FormProvider {...{ ...formMethods, setDisplayResults }}>
            <div className="flex w-80 lg:w-[30em] flex-col gap-8 lg:gap-3 bg-white rounded-2xl p-5 rounded-br-[100px]">
                {/* Flex with 2 items:  the form and the results. */}

                <Form />
                <div className="">
                    <ResultLabel label="years" value={displayResults.years} />
                    <ResultLabel label="months" value={displayResults.months} />
                    <ResultLabel label="days" value={displayResults.days} />
                </div>
            </div>
        </FormProvider>

    </VariablesSetup>
}
function Form() {
    const monthsWith31 = [1, 3, 5, 7, 8, 10, 12]
    const monthsWith30 = [2, 4, 6, 9, 11]
    // //State: 
    const { handleSubmit, watch, setError, clearErrors, formState: { errors }, setDisplayResults } = useFormContext()

    // //This 
    // const [maxDay, setMaxDay] = useState(31)
    const reactiveDay = watch("day")
    const reactiveMonth = watch("month")
    const reactiveYear = watch("year")

    useEffect(() => {

        clearErrors()
        console.log(reactiveMonth)
        if (monthsWith30.includes(Number(reactiveMonth))) {
            if (Number(reactiveMonth) !== 2 && Number(reactiveDay) > 30) {
                // console.log("Case: reactive month shouldn't be 31")
                setError("day", { message: "Month does not have 31 days" })
            }
            else if (Number(reactiveMonth) === 2 && Number(reactiveDay) >= 29) {
                //Case: february
                const isLeapYear = Number(reactiveYear) % 4 !== 0 ? false :
                    Number(reactiveYear) % 100 !== 0 ? true :
                        Number(reactiveYear) % 400 !== 0 ? false : true
                if (isLeapYear) {
                    // clearErrors("day")
                    setError("day", { type: "custom", message: "Leap year has a maximum of 29 days" })
                }
                else {
                    // clearErrors("day")
                    setError("day", { message: "Non-leap February has a maximum of 28 days" })

                }
            }



        }

    }, [reactiveDay, reactiveMonth, reactiveYear])
    // useEffect(() => {
    //     console.log("Effect is triggered:")
    //     if (monthsWith30.includes(reactiveMonth) && reactiveDay > 30) {
    //         // setMaxDay(31)
    //         setError("day", { message: "Month does not have thatasas many days" })
    //     }
    // }, [reactiveDay, reactiveMonth])


    //Handlers:
    // we need it in the format of "yyyy-mm-dd"
    function calculateDateDifference(date1, date2) {
        // Parse the input dates
        const startDate = new Date(date1)
        const endDate = new Date(date2)

        // Ensure startDate is always earlier
        if (startDate > endDate) {
            [startDate, endDate] = [endDate, startDate]
        }

        // Extract year, month, and day components
        let startYear = startDate.getFullYear()
        let startMonth = startDate.getMonth()
        let startDay = startDate.getDate()

        let endYear = endDate.getFullYear()
        let endMonth = endDate.getMonth()
        let endDay = endDate.getDate()

        // Calculate years difference
        let years = endYear - startYear

        // Calculate months difference
        let months = endMonth - startMonth
        if (months < 0) {
            months += 12
            years-- // Borrow one year
        }

        // Calculate days difference
        let days = endDay - startDay
        if (days < 0) {
            // Borrow days from the previous month
            const previousMonth = new Date(endYear, endMonth, 0) // Last day of the previous month
            days += previousMonth.getDate()
            months-- // Borrow one month
            if (months < 0) {
                months += 12
                years-- // Borrow one year
            }
        }

        return { years: String(years), months: String(months), days: String(days) }
    }

    function onSubmit(data) {
        //How to fix this logic?
        if (Object.keys(errors).length > 0) {
            console.log("Errors detected:")
            console.log(errors)
            return
        }
        else {
            //Dataflow:
            const startDate = `${data.year}-${data.month}-${data.day}`

            const today = new Date()
            const thisYear = today.getFullYear()
            const thisMonth = today.getMonth()
            const thisDay = today.getDate()

            const endDate = `${thisYear}-${String(thisMonth + 1).padStart(2, "0")}-${thisDay}`

            const { years, months, days } = calculateDateDifference(startDate, endDate)

            setDisplayResults({ years, months, days })
        }
    }



    return <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8 lg:gap-4">

            {/* This div contains 2 items: the inputs (all tree of them),
                     and the button*/}
            <div className="flex justify-between lg:justify-start lg:gap-8 ">
                <Input
                    label="day"
                    placeholder="DD"
                    validations={
                        {
                            required: "This field is required",
                            min: { value: 1, message: "Must be at least 1" },
                            max: { value: 31, message: "Month does not have that many days" }
                        }}
                />
                <Input
                    label="month"
                    placeholder="MM"
                    validations={
                        {
                            required: "This field is required",
                            min: { value: 1, message: "Must be at least 1" },
                            max: { value: 12, message: "Must be at most 12" }
                        }}
                />
                <Input
                    label="year"
                    placeholder="YYYY"
                    validations={
                        {
                            required: "This field is required",
                        }}
                />
            </div>
            <button onClick={(e) => {
                e.preventDefault()
                handleSubmit(onSubmit)()
            }} className="relative w-14 h-14 p-2 bg-[var(--purple)] rounded-full self-center lg:self-end">
                <span className="inline-block scale-[0.75]"><Arrow /></span>
            </button>
        </div>
    </form>
}
function Arrow() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
}
//font size: 32px.
function VariablesSetup({ children }) {
    return <div
        className={`${poppins.className}   h-screen w-full grid place-items-center bg-[var(--off-white)] shadow-2xl`}
        style={{
            "--purple": "hsl(259, 100%, 65%)",
            "--light-red": "hsl(0, 100%, 67%)",
            "--white:": "hsl(0, 0%, 100%)",
            "--off-white": "hsl(0, 0%, 94%)",
            "--light-grey": "hsl(0, 0%, 86%)",
            "--smokey-grey": "hsl(0, 1%, 44%)",
            "--off-black": "hsl(0, 0%, 8%)",

        }}>{children}</div>
}
function Input({ label, placeholder = "", validations = {} }) {

    //State: 
    const { register, formState: { errors } } = useFormContext()

    //Style: 
    const labelStyles = cn("text-[var(--smokey-grey)]  font-bold text-center lg:text-left  inline-block tracking-widest uppercase text-sm lg:text-[10px]",
        errors[label] && "text-[var(--light-red)]"
    )


    return <div className="w-28 flex flex-col gap-3 relative  ">
        <label className={labelStyles}>{label}</label>
        <input {...register(label, validations)} type="number" className="w-full indent-3 py-1.5 self-center placeholder:font-bold bg-white border-transparent border-[var(--off-white)] border rounded-md" placeholder={placeholder} />
        <span className="absolute bottom-0 translate-y-[110%]  text-[9px] text-[var(--light-red)]">
            {errors[label]?.message}
        </span>
    </div>
}

function ResultLabel({ value = "--", label }) {
    return <div className="text-5xl font-bold italic mb-6">
        <span className="text-[var(--purple)]">{value}</span>{" "}
        <span>{label}</span>
    </div>
}
