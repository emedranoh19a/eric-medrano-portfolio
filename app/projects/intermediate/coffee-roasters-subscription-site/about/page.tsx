import { Commitment, Header, Headquarters, Quality } from "./components";

export default function Page() {
    return <main className="w-full text-dark-grey-blue">
        <Header />
        <Commitment />
        <Quality />
        <Headquarters />
    </main>
}

