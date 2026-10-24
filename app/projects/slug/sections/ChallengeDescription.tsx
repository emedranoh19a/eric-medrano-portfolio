import { Subtitle } from "../components";

export default function ChallengeDescription() {
    return <div>
        <Subtitle text="The Challenge" />
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
            <List>
                <li>Select whether they want to use metric or imperial units</li>
                <li>Enter their height and weight</li>
                <li>See their BMI result, with their weight classification and healthy weight range</li>
                <li>View the optimal layout for the interface depending on their device's screen size</li>
                <li>See hover and focus states for all interactive elements on the page</li>
            </List>

        </p>
    </div>
}
