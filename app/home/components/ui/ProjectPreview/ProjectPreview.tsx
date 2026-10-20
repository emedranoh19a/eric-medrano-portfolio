"use client"
import ParticlesOverlay from "./ParticlesOverlay";
import ProjectHeader from "./ProjectHeader";
export default function ProjectPreview() {
    return (
        <ParticlesOverlay>
            <div className="preset-body relative bg-white/85 shadow-2xl shadow-neutral-300/30 h-full w-full max-w-4xl scrollbar-thumb-violet-500 scroll-smooth  overflow-y-auto rounded-3xl">

                {/* Background: covers the full content height */}
                {/* <div className="absolute top-0 bottom-0 w-full bg-red-500" /> */}

                {/* Card content */}
                <div className="relative z-10 p-8 sm:p-10">

                    <ProjectHeader />
                    <h2 className="preset-2">Overview</h2>
                    <h3 className="preset-3">The Challenge</h3>
                    <p className="">
                        Your challenge is to build out this
                        body mass index calculator page and
                        get it looking as close to the design as possible.
                    </p>
                    <p className="">
                        You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
                    </p>
                    <p>

                        Your users should be able to:
                        <ul>
                            <li>Select whether they want to use metric or imperial units</li>
                            <li>Enter their height and weight</li>
                            <li>See their BMI result, with their weight classification and healthy weight range</li>
                            <li>View the optimal layout for the interface depending on their device's screen size</li>
                            <li>See hover and focus states for all interactive elements on the page</li>
                        </ul>

                    </p>
                    <h3 className="preset-3">Screenshots</h3>
                    <h3 className="preset-3">Links</h3>
                    <h2 className="preset-2">The Process</h2>
                    <h2 className="preset-3">Built with</h2>
                    <h3>What I learnt</h3>
                    <h3>Continued Develodivment</h3>
                    <h2>Useful resources</h2>
                    <h2>Author</h2>
                    <h2>Acknowledgements</h2>
                    Frontend Mentor - Body Mass Index Calculator solution
                    This is a solution to the Body Mass Index Calculator challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

                    Table of contents
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
                    Note: Delete this note and update the table of contents based on what sections you keep.

                    Overview
                    The challenge
                    Users should be able to:

                    Select whether they want to use metric or imperial units
                    Enter their height and weight
                    See their BMI result, with their weight classification and healthy weight range
                    View the optimal layout for the interface depending on their device's screen size
                    See hover and focus states for all interactive elements on the page
                    Screenshot


                    Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

                    Alternatively, you can use a tool like FireShot to take the screenshot. FireShot has a free option, so you don't need to purchase it.

                    Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

                    Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.

                    Links
                    Solution URL: Add solution URL here
                    Live Site URL: Add live site URL here
                    My process
                    Built with
                    Semantic HTML5 markup
                    CSS custom properties
                    Flexbox
                    CSS Grid
                    Mobile-first workflow
                    React - JS library
                    Next.js - React framework
                    Styled Components - For styles
                    Note: These are just examples. Delete this note and replace the list above with your own choices

                    What I learned
                    Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

                    To see how you can add code snippets, see below:

                    <h1>Some HTML code I'm proud of</h1>
                    {/* .proud-of-this-css {
                        color: papayawhip;
} */}
                    {/* const proudOfThisFunc = () => {
                        console.log('🎉')
                    } */}
                    If you want more help with writing markdown, we'd recommend checking out The Markdown Guide to learn more.

                    Note: Delete this note and the content within this section and replace with your own learnings.

                    Continued development
                    Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

                    Note: Delete this note and the content within this section and replace with your own plans for continued development.

                    Useful resources
                    Example resource 1 - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
                    Example resource 2 - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
                    Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.

                    Author
                    Website - Add your name here
                    Frontend Mentor - @yourusername
                    Twitter - @yourusername
                    Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.

                    Acknowledgments
                    This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

                    Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.
                </div>
            </div>
        </ParticlesOverlay>
    )
}
