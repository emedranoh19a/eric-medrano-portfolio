import { FormAside, FormRegistry, FormSummary, Header, Steps } from "./components";

export default function Page() {
    return <main className="w-full">
        <Header />
        <Steps />
        {/* The gap only works on lg since FormAside is hidden */}
        <div className="flex gap-31.25">
            <FormAside className="hidden lg:inline-block " />
            <div>
                <FormRegistry />
                <FormSummary />
            </div>
        </div>
    </main>
}
