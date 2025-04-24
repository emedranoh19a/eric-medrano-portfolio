import { DM_Sans } from "next/font/google"
import Image from "next/image"

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] })

export default function Page() {
    return <div
        className={`h-fit w-full mx-auto  ${dmSans.className} max-w-sm lg:max-w-none px-3 py-5 mb-40 bg-white`}
        style={{
            "--primaryLight": "hsl(254, 88%, 90%)",
            "--primaryDark": "hsl(256, 67%, 59%)",

            "--accentLight": "hsl(31, 66%, 93%)",
            "--accentDark": "hsl(39, 100%, 71%)",

            "--white": "hsl(0, 0%, 100%)",
            "--black": "hsl(0, 0%, 7%)",
        }}
    >
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-[repeat(12, 1fr)] gap-5 lg:h-full lg:py-10 lg:px-20">
            <div className=" flex flex-col gap-4 justify-evenly rounded-lg text-center p-10 bg-[var(--primaryDark)] lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-5">
                <div className="text-4xl text-[var(--white)] font-semibold tracking-wide max-w-96 mx-auto">
                    Social Media <span className="text-[var(--accentDark)] ">10x</span> <em>
                        Faster {" "}
                    </em>
                    with AI
                </div>
                <div className="flex flex-col gap-1 ">

                    <div className="relative h-6">
                        <Image fill objectFit="contain" src="/projects/beginner/bento-grid/images/illustration-five-stars.webp" alt="" />
                    </div>
                    <div>
                        <span className="text-white/90 font-light">Over 4,000 5-star reviews</span>
                    </div>
                </div>
            </div>
            <div className=" rounded-lg p-4 relative bg-[var(--white)] lg:col-start-2 lg:row-start-6 lg:row-span-4">
                <div className="relative flex flex-col gap-3 justify-between h-full ">
                    <div className="w-full relative flex-1 min-h-20 md:min-h-10 ">
                        <Image src="/projects/beginner/bento-grid/images/illustration-multiple-platforms.webp" alt="" fill objectFit="contain" />
                    </div>
                    <div className="font-bold text-2xl">
                        Manage multiple accounts and platforms
                    </div>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden p-4 pb-0 relative bg-[var(--accentDark)] lg:col-start-3 lg:row-start-6 lg:row-span-4">
                <div className="h-full w-full pb-40  flex relative flex-col gap-1 ">

                    <p className="text-[var(--black)] text-2xl font-bold">

                        Maintain a consistent posting schedule.
                    </p>

                    {/* <div className="relative h-full w-full"> */}
                    <div className="absolute left-0 bottom-0  w-[75%] lg:w-full max-w-68 lg:translate-y-5 aspect-video">

                        <Image alt="" fill objectFit="contain" src="/projects/beginner/bento-grid/images/illustration-consistent-schedule.webp" />
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div className="rounded-lg p-4 pr-0 relative bg-[var(--primaryLight)] lg:col-start-4 lg:row-start-1 lg:row-span-9">
                <div className="flex flex-col gap-3 h-full w-full text-center lg:text-left">
                    <div className="pr-4">
                        <p className=" font-bold text-xl mt-2 ">Schedule to social media</p>
                    </div>
                    <div className=" w-full h-full min-h-80 relative">
                        <Image
                            src="/projects/beginner/bento-grid/images/illustration-schedule-posts.webp"
                            alt=""
                            fill
                            className="absolute lg:h-full aspect-square object-contain lg:object-cover object-left " />
                    </div>
                    <div className="pr-4">
                        <p className="text-sm">
                            Optimize post timing to publish content at the perfect time for your audience.
                        </p>
                    </div>
                </div>

            </div>
            <div className="rounded-lg p-4 relative bg-[var(--primaryDark)] lg:col-start-3 lg:col-span-2 lg:row-span-3">
                <div className="flex flex-col lg:flex-row w-full h-fit gap-2">
                    <div className="self-center relative  w-[75%] aspect-square">
                        <Image
                            alt=""
                            src="/projects/beginner/bento-grid/images/illustration-grow-followers.webp"
                            fill
                            objectFit="contain" />
                    </div>
                    <div className="relative self-center">

                        <p className="text-4xl text-center lg:text-left text-[var(--white)]  font-semibold tracking-wide">
                            Grow followers with non-stop content.
                        </p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg p-4 relative bg-[var(--white)] lg:col-start-2 lg:row-start-10 lg:row-span-3">
                <div className="flex flex-col py-2 justify-evenly gap-2 h-full">
                    <div className="align-middle text-left font-bold text-5xl">
                        {">56%"}
                    </div>
                    <div>
                        faster audience growth
                    </div>
                    <div className=" w-full min-h-20 relative">
                        <Image
                            src="/projects/beginner/bento-grid/images/illustration-audience-growth.webp"
                            fill
                            objectFit="contain"
                            objectPosition="left"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="rounded-lg p-4 relative bg-[var(--white)] lg:col-start-1 lg:row-start-1 lg:row-span-6">
                <div className="flex flex-col justify-center gap-2 h-full ">
                    <div> <p className="text-[var(--black)] text-3xl tracking-tight font-bold max-w-[80%]">Create and schedule content
                        <span className="text-[var(--primaryDark)]">
                            {" "}quicker
                        </span>
                    </p></div>
                    <div className=" w-full min-h-24 relative">
                        <Image
                            src="/projects/beginner/bento-grid/images/illustration-create-post.webp"
                            fill
                            objectFit="contain"
                            alt=""
                        />
                    </div>

                </div>
            </div>
            <div className="rounded-lg p-4 relative bg-[var(--accentDark)] lg:row-start-7 lg:row-span-6 lg:col-start-1">
                <div className="w-full h-full flex flex-col gap-3">

                    <p className="text-[var(--black)] text-2xl font-bold">
                        Write your content using AI.
                    </p>
                    <div className=" h-full  w-2/3 lg:w-auto min-h-40 relative ">
                        <Image
                            fill
                            objectFit="contain"
                            src="/projects/beginner/bento-grid/images/illustration-ai-content.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div >
}
//To use:
