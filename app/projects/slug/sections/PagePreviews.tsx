import { Scales } from "@/app/(home)/components/vendors/Scales";
import Image from "next/image";
import { Subtitle } from "../components";
import preview from "./3-devices-black-cropped.png";
export default function PagePreviews() {
    return <section id="page-previews" className="bg-white mb-10 border-y-2 border-dashed border-neutral-200">
        <Subtitle text="Screenshots" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-y-2 border-dashed border-neutral-200/80 divide-y-2 divide-x-2 divide-neutral-200/80 relative z-0">
            <Scales className="-z-10 opacity-30" />
            <PagePreview />
            <PagePreview />
            <PagePreview />
            <PagePreview />
            {/* <PagePreview /> */}
            {/* <PagePreview /> */}
            {/* <PagePreview /> */}
            {/* <PagePreview /> */}
        </ul>
        <Subtitle text="Links" />
        <p>description</p>
    </section>
}

function PagePreview() {
    return <li className="list-none w-full px-4 relative z-0">
        {/* <DotPattern className="-z-10 opacity-40" /> */}
        {/* <div className="bg-neutral-200 w-full h-60 relative overflow-hidden"> */}
        <div className="border-x-2 border-dashed border-neutral-200/50 bg-white">

            <div className="h-6 border-b-2 border-neutral-200/50 border-dashed bg-neutral-100" />
            <Image src={preview} alt="" className="object-contain opacity-0" height={1000} width={1000} />
            {/* </div> */}
            <div className="h-6 border-t-2 border-neutral-200/50 border-dashed" />
            <h4 className="border-y-2 border-neutral-200/50 border-dashed">Home</h4>
            <p>This is a description for the home page</p>
        </div>
    </li>
}
