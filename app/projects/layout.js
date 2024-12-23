import { Tabs } from "../components/layout/Tabs/Tabs"
import { tabs } from "../data"

export default function ProyectsLayout({ children }) {
    //This is not the navigation at home (filterable). This has instead, some tabs, etc.
    return <div>
        {children}
        <div>
            <div
                className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
                <Tabs tabs={tabs} />
            </div>
        </div>
    </div>
}


// import { tabs } from "../data"

// export function TabsDemo() {


//     return (
//         (<div
//             className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
//             <Tabs tabs={tabs} />
//         </div>)
//     )
// }

