import Quote from "@/app/components/ui/Quote"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "700"] })
export default function Page() {
    return <ProjectSetup>
        <div className="absolute inset-x-5 inset-y-5 bg-red-500  flex flex-col md:flex-row-reverse inset-x-5">
            <div className="bg-sky-500  aspect-square block basis-1/3">
            </div>
            <div className="max-w-md">
                <p>
                    <Quote>
                        I&apos;ve been interested in coding for a while but never taken the jump, until now.
                        I couldn&apos;t recommend this course enough. I&apos;m now in the job of my dreams and so
                        excited about the future.
                    </Quote>
                </p>
                <h3>Tanya Sinclair</h3>
                <h4>UX Engineer</h4>
            </div>
        </div>
    </ProjectSetup>
}


function ProjectSetup({ children }) {
    return <div
        className={`min-h-screen w-full grid place-items-center px-5 py-10 ${inter.className}`}
        style={{
            "--dark-blue": "hsl(240, 38%, 20%)",
            "--grayish-blue": "hsl(240, 18%, 77%)"
        }}
    >{children}</div>
}
