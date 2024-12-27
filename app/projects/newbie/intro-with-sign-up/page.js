export default function Page() {
    // TODO: Mobile Layout.
    //TODO: Desktop Mobile
    //TODO: component for text FieldGroup 

    return <main className="bg-[url('/intro-with-sign-up/images/bg-intro-mobile.png')] bg-cover max-w-screen min-h-screen bg-red-400/80 text-neutral-50">

        {/* TODO: this is a simple grid to be responsive, two columns on big screen */}
        <div className="mx-auto my-auto w-fit grid grid-cols-1 md:grid-cols-2">

            <Intro />
            <Form />
        </div>
    </main>
}

function Intro() {
    return <div className="pt-16 px-6 text-center mb">

        <h1 className="font-bold text-3xl mb-4">Learn to code by watching others</h1>
        <p className="leading-relaxed ">
            See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.</p>

    </div>
}

function Form() {
    return <form>
        <TryFreeButton />
        <TextField />
        <ClaimTrialButton />
        <TermsNotice />
    </form>
}
function ClaimTrialButton() {
    return <button>
        Claim myour free trial
    </button>
}

function TryFreeButton() {
    return <button className="bg-indigo-500/90 font-thin w-full inset-x-4  text-center rounded-lg py-4">
        <strong className="font-bold">
            Try it free for 7 days{" "}
        </strong>
        then <br /> $20/mo. thereafter
    </button>
}
function TextField() {
    //TODO: register error state with react  hook form.
    return <input />
}

function TermsNotice() {
    return <p>By clicking the button, you are agreeing to our Terms and Services</p>
}

// Primary
// red-400 
// green-500 
// Accent
// indigo-600 
// Neutral
//bg-indigo-900 
//text-gray-400
