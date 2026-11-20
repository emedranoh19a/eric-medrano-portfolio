import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { avatar } from "./images/imageIndex";

export default function PhoneHeader() {

    return <div className="rounded-b-md rounded-t-[20px] shadow-[0px_0px_13px] mb-4 shadow-[#3E2753]/25 bg-[linear-gradient(225deg,#E844FF_0%,#8739FF_100%)] pt-7.5 pb-3 px-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
            <Back />
            <User />
        </div>
        <Menu />
    </div>
}

function User() {
    return <div className="flex flex-row gap-2 items-center">
        {/* Avatar */}
        <div className="bg-red w-6 aspect-square border border-white rounded-full overflow-hidden relative">
            <Image src={avatar} className="object-cover" alt="Samuel Green" fill />
        </div>
        {/* User data */}
        <div className="text-white">
            <h2 className="text-[11px] font-medium mb-0.5">
                Samuel Green
            </h2>
            <h3 className="text-[8px] font-normal">
                Available to Walk
            </h3>
        </div>
    </div>
}

function Back() {
    const iconTopHalf = cn(
        "bg-white rounded-t-full absolute h-[150%] w-1/2",
        "translate-y-[0.1px] rotate-25 origin-top translate-x-[0.4px]",
        "top-0 right-0",
    )
    const iconBottomHalf = cn(
        "bg-white rounded-b-full absolute h-[150%] w-1/2",
        "-translate-y-[0.1px] -rotate-25 origin-bottom translate-x-[0.4px]",
        "bottom-0 right-0",
        // " rotate-25 origin-top  translate-y-1 ",
        "",
        "")
    return <div className="relative w-1 h-2.5">
        <div className="relative w-full  h-1/2 overflow-hidden">
            <div className={iconTopHalf} />
        </div>
        <div className="relative w-full  h-1/2 overflow-hidden">
            <div className={iconBottomHalf} />
        </div>
    </div>
}
function Menu() {
    return <div className="flex flex-col gap-px w-fit">
        <div className=" bg-white w-0.5 aspect-square rounded-full" />
        <div className=" bg-white w-0.5 aspect-square rounded-full" />
        <div className=" bg-white w-0.5 aspect-square rounded-full" />
    </div>
}

