"use client"
import { cn } from "@/app/utils/utils"
import Image from "next/image"
import { Job as JobType } from "../types/Job.type"
import Chip from "./Chip"
import { useJobs } from "./JobsProvider"
import Tag from "./Tag"

export default function Jobs() {
    const { jobs } = useJobs()
    return <div>{jobs.map((job, i) => <Job key={i} job={job} />)}</div>
}

type JobProps = { job: JobType }

function Job({ job }: JobProps) {
    const { company, position, role, level, languages, tools, logo } = job;
    const containerCn = cn(
        "relative group bg-white rounded-[5px]",
        "p-6 pt-8 mb-10 lg:mb-6",
        "shadow-[0_15px_20px_-5px_rgba(13,113,130,0.15)]",
        "flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center")
    //Calculate the tags, merge strings and arrays.
    const desktopImageCn = cn("relative h-[88px] hidden lg:inline-block aspect-square rounded-full")
    const mobileImageCn = cn("rounded-full",
        "h-[48px] aspect-square inline-block lg:hidden",
        "absolute -top-6 left-6")
    const tags = [role, level, ...languages, ...tools]



    return <div className={containerCn}>
        <div className={mobileImageCn} >
            <Image src={logo} fill className="object-cover" alt={`${company}'s logo`} />
        </div>
        <div className="relative flex flex-row gap-6 items-center">
            <div className={desktopImageCn} >
                <Image src={logo} className="object-cover" alt={`${company}'s logo`} fill />
            </div>
            <JobInfo company={company} position={position} />
        </div>
        <hr className="text-[#B7C4C4] lg:hidden" />
        <ul className="h-fit flex flex-row flex-wrap gap-x-4 gap-y-4">
            {tags.map((tag, i) => <Tag label={tag} key={i} />)}
        </ul>
    </div>
}

type JobInfoProps = {
    company: string;
    position: string;
}

function JobInfo({ company, position }: JobInfoProps) {
    return <div>
        <div className="mb-[9px] lg:mb-[10px] flex justify-between lg:justify-start gap-4 items-center">
            <h3 className="font-bold text-[13px] lg:text-[18px] text-[#5ca5a5]">
                {company}
            </h3>
            <div className="flex justify-start gap-2">
                <Chip variant="new" />
                <Chip variant="featured" />
            </div>
        </div>
        <h2 className="mb-2 lg:mb-[7px] font-bold text-[15px] lg:text-[22px] text-[#2B3939] group-hover:text-[#5CA5A5]">
            {position}
        </h2>
        <div className="flex flex-row gap-2.5 font-medium text-[16px] lg:text-[18px] text-[#7C8F8F] tracking-[-0.12px] lg:tracking-[-0.14px] leading-[24%]">

            <span>1 day ago</span>
            <span>・</span>
            <span>Full Time</span>
            <span>・</span>
            <span>USA only</span>
        </div>
    </div>
}
