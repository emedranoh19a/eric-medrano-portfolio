//External projects can be in the Dock. That's OK.
//Then, I can gather all levels in the docker.
//I must add other projects as "others"
//Mirror.
//LearningCenter. (Explorer)
//TrainingCenter
//RealWorldLab
//Divide between internal and external proyects. (Not filterable)
//Divide between levels of complexity. (on layouts). Insert here tailwind and jonas, and Angela Yu, why not?
//Divide between technologies that were actually used.


// import { BentoGrid, BentoGridItem } from "../components/BentoGrid"

export default function Page() {
    return <div className="bg-gray-100 p-2">
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
    </div>
}

function Content() {
    return <>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
        <div className="bg-gray-200 m-2">

            This is the page content
        </div>
    </>
}


