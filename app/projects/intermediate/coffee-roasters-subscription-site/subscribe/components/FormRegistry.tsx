

import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { planArrowIcon } from "../../assets/assetIndex";

type FieldValue = {
    value: string;
    description: string;
}

const fields = [
    {
        fieldName: "presentation",
        label: "How do you dringk your coffee?",
        options: [
            {
                value: "Capsule",
                description: "Compatible with Nespresso systems and similar brewers"
            },
            {
                value: "Filter",
                description: "For pour over or drip methods like Aeropress, Chemex, and V60"
            },
            {
                value: "Espresso",
                description: "Dense and finely ground beans for an intense, flavorful experience"

            }
        ]
    },
    {
        fieldName: "coffeeType",
        label: "What type of coffee?",
        options: [
            { value: "Single Origin", description: "Distinct, high quality coffee from a specific family-owned farm" },
            { value: "Decaf", description: "Just like regular coffee, except the caffeine has been removed" },
            { value: "Blended", description: "Combination of two or three dark roasted beans of organic coffees" }
        ]
    },
    {
        fieldName: "ammount",
        label: "How much would you like?",
        options: [
            { value: "250g", description: "Perfect for the solo drinker. Yields about 12 delicious cups." },
            { value: "500g", description: "Perfect option for a couple. Yields about 40 delectable cups." },
            { value: "1000g", description: "Perfect for offices and events. Yields about 90 delightful cups." }
        ]
    },
    {
        fieldName: "gridOption",
        label: "Want us to grind them?",
        options: [
            { value: "Wholebean", description: "Best choice if you cherish the full sensory experience" },
            { value: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress" },
            { value: "Cafetiére", description: "Course ground beans specially suited for french press coffee" }
        ]
    },
    {
        fieldName: "frequency",
        label: "How often should we deliver?",
        options: [
            { value: "Every week", description: "$7.20 per shipment. Includes free first-class shipping." },
            { value: "Every 2 weeks", description: "$9.60 per shipment. Includes free priority shipping." },
            { value: "Every month", description: "$12.00 per shipment. Includes free priority shipping." }
        ]
    },

]

export default function FormRegistry() {
    return <div className="">
        {fields.map((field, i) => <Field key={i} {...field} />)}
    </div>
}

type FieldProps = { label: string; fieldName: string; options: FieldValue[] }

function Field({ label, fieldName, options }: FieldProps) {
    // const handleOpen = () => {
    //     // TODO: handle toggle
    //TODO: Register field in Hook Form
    // }
    return <div className="mb-27.5 sm:mb-25 lg:mb-22">
        {/* This should handle the toggle */}
        <div className="cursor-pointer mb-8 sm:mb-10 lg:mb-14 flex flex-row items-center justify-between">
            <label className="text-grey heading-4 sm:heading-3 lg:heading-2">{label}</label>
            <div className="h-3 w-4.5 relative">
                <Image src={planArrowIcon} alt="open" fill className="object-contain" />
            </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2.5 lg:gap-5.75">
            {options.map((option, i) => <FieldValue {...option} key={i} variant="default" />)}
        </div>
    </div>
}


type FieldValueProps = FieldValue & {
    variant: "active" | "default"
}
function FieldValue({ value, description, variant = "default" }: FieldValueProps) {
    const containerStyles = cn(
        "group rounded-lg transition-colors cursor-pointer",
        "py-6 sm:py-8 px-6.25 lg:px-7 hover:bg-pale-orange text-dark-grey-blue",
        variant === "active" ? "bg-dark-cyan text-light-cream" : "bg-[#F4F1EB] "
    );
    return <div className={containerStyles}>
        <h3 className="heading-4 mb-2 sm:mb-6">
            {value}
        </h3>
        <p className="body">
            {description}
        </p>
    </div>
}
