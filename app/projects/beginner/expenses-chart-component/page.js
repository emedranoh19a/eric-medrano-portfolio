"use client"
//The Challenge:
import { cn } from "@/app/utils/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import StylesSetup from "./components/StylesSetup"
import data from './data.json' with { type: "json" }
import { logo } from "./imageIndex"
export default function Page() {

    return <StylesSetup>
        <div className="w-full max-w-lg p-4 relative flex flex-col h-fit gap-4">
            <Header />
            <Chart data={data} />
        </div>
    </StylesSetup>
}

function Header({ balance = 921.48 }) {
    return <div className="bg-[var(--soft-red)] p-5 rounded-xl flex justify-between items-center">
        <div className=" flex flex-col text-[var(--very-pale-orange)]">
            <h1 className="font-thin font-base">My balance</h1>
            <span className=" font-bold text-2xl">${balance}</span>
        </div>
        <div className="relative aspect-video h-12">
            <Image src={logo} className="object-contain" fill alt="logo" />
        </div>
    </div>
}
function Chart({ data }) {
    //Dataflow: 
    const maxAmount = data.reduce((current, item) => item.amount > current ? item.amount : current, 0)

    return <div className="bg-[var(--very-pale-orange)] text-[var(--medium-brown)] p-5 rounded-xl flex flex-col gap-4">
        <div >
            <span className="text-2xl font-bold text-[var(--dark-brown)]">
                Spending - Last 7 days
            </span>
        </div>
        <div className="pt-10 w-full aspect-video flex gap-3">
            {data.map((item, i) =>
                <Bar
                    key={i}
                    dayLabel={item.day}
                    amount={item.amount}
                    maxAmount={maxAmount}
                    index={i}
                />)}
        </div>
        <hr />
        <span className="block -mb-4">Total this month</span>
        <div className="-mt-4 w-full flex justify-between items-end">
            <div>
                <span className="text-3xl text-[var(--dark-brown)] font-bold">
                    $478.33
                </span>
            </div>
            <div>
                <span className="block text-[var(--dark-brown)] font-bold"> +2.4% </span>
                <span className="block">from last month</span>
            </div>
        </div>
    </div>
}
function Bar({ dayLabel, amount, maxAmount, index }) {
    const percentage = amount / maxAmount * 100
    const hasMaxData = amount === maxAmount
    const barStyles = cn(
        "absolute cursor-pointer w-full rounded-lg bottom-0 hover:brightness-125 transition",
        hasMaxData ? "bg-[var(--cyan)]" : "bg-[var(--soft-red)]")

    return <div className="group flex flex-col-reverse w-full">
        <span className="text-center mx-auto text-sm">{dayLabel}</span>
        <div className="h-full relative">
            <motion.div
                className={barStyles}
                initial={{ height: 0 }}
                animate={{ height: `${percentage}%` }}
                transition={{ delay: index * 0.08 }}
            >
                <div className="relative w-full h-full">
                    <div className=" opacity-0 transition group-hover:scale-[1.1] group-hover:opacity-100 absolute text-sm bg-[var(--dark-brown)] text-[var(--very-pale-orange)] -translate-y-full -top-2 left-1/2 -translate-x-1/2 p-2 rounded-lg">
                        ${amount}
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
}

