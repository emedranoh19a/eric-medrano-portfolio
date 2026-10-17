"use client"
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { useRef, useState } from "react";
import Button from "../../ui/Button";
import SummaryContent from "./SummaryContent";

export default function FormSummary() {
    const [openModal, setOpenModal] = useState(false)
    return <div className="flex flex-col items-center  lg:items-end gap-14 sm:gap-10 mb-30 sm:mb-36 lg:mb-42">
        <SummaryContent />
        <Button label="Create my plan!" className="px-8.75" onClick={() => setOpenModal(true)} />
        {openModal && <ConfirmModal onClose={() => setOpenModal(false)} />}
    </div>
}


function ConfirmModal({ onClose }: { onClose: () => void }) {
    const ref = useRef(null)
    useClickOutside(ref, onClose);

    return <div className="py-8.75 px-6 sm:px-28.5 sm:py-53.5 fixed top-0 left-0 h-screen w-screen bg-black/50 z-20 grid place-items-center" >
        <div ref={ref} className="pb-6  sm:pb-14 container mx-auto max-w-135 bg-light-cream rounded-lg overflow-hidden">
            <SummaryContent variant="modal" />
            <div className="px-6 sm:px-11 lg:px-16 sm:mt-1.75">
                <p className="body text-grey mb-6 sm:mb-[47px">
                    Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                </p>
                <div className="flex flex-row gap-3.25 justify-between items-center">
                    <span className="text-dark-grey-blue heading-3 sm:inline hidden text-nowrap">$14.00 / mo</span>
                    <Button
                        className="w-full"
                        onClick={onClose}
                        label={
                            <>
                                <span>Checkout {" "}</span>
                                <span className="sm:hidden ">$14.00 / mo</span>
                            </>
                        }
                    />
                </div>
            </div>
        </div>

    </div>

}
