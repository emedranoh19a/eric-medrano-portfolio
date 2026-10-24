import Image from "next/image";
import preview from "./preview.jpg";
export default function ProjectHeader() {
    return <>
        <h1 className="preset-1">Galleria Slideshow Site</h1>
        <hr className="text-violet-500 bg-violet-500 h-1 rounded-full my-4 inline-block w-full" />
        <div className="relative bg-neutral-200">
            <Image
                alt="preview"
                src={preview}
                height={1000}
                width={1000}
                className="h-auto w-full object-contain rounded-2xl opacity-0"
            />
        </div>
    </>
} 
