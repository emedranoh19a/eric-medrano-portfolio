"use client"
import { CodeBlock } from "@/app/home/components/vendors/CodeBlock"
import { useState } from "react"
import { DesignSystem } from "./components"
import { ProjectHeader } from "./sections"
//TODO: Typography: text-base/6
//TODO: Typography size hierarchy
//TODO: Typography spacing hierarchy
//TODO: Section Spacing hierarchy






function BuiltWith() {
    return <div>
        <Subtitle text="Built with" />
        Semantic HTML5 markup
        CSS custom properties
        Flexbox
        CSS Grid
        Mobile-first workflow
        React - JS library
        Next.js - React framework
        Styled Components - For styles
    </div>
}
function ContentsTable() {
    return <div>
        <Subtitle text="Table of contents" />
        <List>

            Overview
            The challenge
            Screenshot
            Links
            My process
            Built with
            What I learned
            Continued development
            Useful resources
            Author
            Acknowledgments
        </List>
    </div>
}

function CodeBlockDemo() {
    const code = `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
  
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;

    return (
        <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
                language="jsx"
                filename="DummyComponent.jsx"
                highlightLines={[9, 13, 14, 18]}
                code={code}
            />
        </div>
    );
}
function LearnedThings() {

    // What I learned
    // Use this section to recap over some of your major learnings while 
    // working through this project. Writing these out and providing code 
    // samples of areas you want to highlight is a great way to reinforce 
    // your own knowledge.
    return <div>
        <Subtitle text="What I learned" />
        <h1>Some HTML code I'm proud of</h1>
        <CodeBlockDemo />
        {/* .proud-of-this-css {
                         color: papayawhip;
 } */}
        {/* const proudOfThisFunc = () => {
                         console.log('🎉')
                     } */}
        <h1>Some HTML code I'm proud of</h1>
        {/* .proud-of-this-css {
                         color: papayawhip;
 } */}
        {/* const proudOfThisFunc = () => {
                         console.log('🎉')
                     } */}
        <h1>Some HTML code I'm proud of</h1>
        {/* .proud-of-this-css {
                         color: papayawhip;
 } */}
        {/* const proudOfThisFunc = () => {
                         console.log('🎉')
                     } */}
    </div>
}
function ContinuedDevelopment() {
    return <div>
        <Subtitle text="Continued Development" />
        <h3>
            Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.
        </h3>
    </div>
}
function Resources() {
    return <div>
        <Subtitle text="Useful Resources" />
        Example resource 1 - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
        Example resource 2 - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

    </div>
}
function Author() {
    return <div>
        <Title text="Author" />
        Website - Add your name here
        Frontend Mentor - @yourusername
        Twitter - @yourusername
    </div>
}
function Acknowledgements() {
    return <div>
        <Title text="Acknowledments" />
        This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

    </div>
}
function Section() {
    return <section className="bg-blue-300 mb-20">This is a section</section>
}

export default function Page() {
    const [isOpen, setOpen] = useState(true)
    return <DesignSystem className="">
        <ProjectHeader />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        {/* <MainTitle />
        <Overview /> */}
        {/* <MainTitle />
        <ContentsTable />
        <Overview />
        <ChallengeDescription />
        <PagePreviews />
        <Title text="My Process" />
        <BuiltWith />
        <LearnedThings />
        <Resources />
        <ContinuedDevelopment />
        <Author />
        <Acknowledgements /> */}
        {/* <div>
            <button onClick={() => setOpen((s) => !s)}>

                Hello
            </button>
            <div
                className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="bg-neutral-100 p-8">
                        <p>
                            This is a long piece of text. There are more things in heaven
                            and Earth than those dreamt of in your philosophy.
                        </p>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <PagePreviews />
        <PagePreviews />
        <PagePreviews />
        <PagePreviews /> */}
        {/* <MainTitle />
        <ContentsTable />
        <Overview />
        <ChallengeDescription />
        <PagePreviews />
        <Title text="My Process" />
        <BuiltWith />
        <LearnedThings />
        <Resources />
        <ContinuedDevelopment />
        <Author />
        <Acknowledgements /> */}
    </DesignSystem >
}

function Contents() {
    return <menu>
        Table of Contents:
        <ul></ul>
    </menu>
}

//Rearrangement proposal
// <MainTitle /> The name of the project. 
// <ContentsTable />
// <Overview />
// <ChallengeDescription />
// <PagePreviews />
// <Title text="My Process" />
// <BuiltWith />
// <LearnedThings />
// <Resources />
// <ContinuedDevelopment />
// <Author />
// <Acknowledgements />
